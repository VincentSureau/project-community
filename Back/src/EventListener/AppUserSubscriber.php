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
            Events::preUpdate,
        ];
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $this->encryptPassword($args);
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        $this->sendMail($args);
        $this->encryptPassword($args);
    }

    public function sendMail(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $mailSender = new SendMail($this->mailer,  $this->twig);
            $mailSender->newUser($user);
        }
    }

    public function encryptPassword(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $encodedPassword = $this->passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setPassword($encodedPassword);
        }
    }

}