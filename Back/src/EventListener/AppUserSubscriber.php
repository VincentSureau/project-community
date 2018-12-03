<?php

namespace App\EventListener;

use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\Entity\AppUser;
use App\Utils\SendMail;

final class AppUserSubscriber implements EventSubscriber
{
    private $mailer;

    private $twig;

    private $passwordEncoder;

    private $em;

    public function __construct(\Swift_Mailer $mail, \Twig_Environment $twig, UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->mailer = $mail;
        $this->twig = $twig;
        $this->passwordEncoder = $passwordEncoder;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::prePersist,
            Events::postPersist,
            Events::postUpdate,
        ];
    }

    /**
     * Encrypt user's password on persist event
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function prePersist(LifecycleEventArgs $args)
    {
        $this->sendMail($args);
        $this->encryptPassword($args);
    }

    /**
     * set user slug with they Id after persist event
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function postPersist(LifecycleEventArgs $args)
    {
        $this->setSlug($args);
    }

    /**
     * set user slug with they Id after update event
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function postUpdate(LifecycleEventArgs $args)
    {
        $this->setSlug($args);
    }

    /**
     * send a mail to the user with his password when a newx user is created
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function sendMail(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $mailSender = new SendMail($this->mailer,  $this->twig);
            $mailSender->newUser($user);
        }
    }

    /**
     * encrypt the password of a user
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function encryptPassword(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setPassword($encodedPassword);
        }
    }

    /**
     * create the slug of a user
     *
     * @param LifecycleEventArgs $args
     * @return void
     */
    public function setSlug(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $firstname = strtolower(iconv('utf-8', 'ascii//TRANSLIT', $user->getFirstname()));
            $lastname = strtolower(iconv('utf-8', 'ascii//TRANSLIT', $user->getLastname()));
            $slug = $firstname . '-' . $lastname . '-' . $user->getId();
            $user->setSlug($slug);
            $em = $args->getObjectManager();
            $em->flush();          
        }
    }

}
