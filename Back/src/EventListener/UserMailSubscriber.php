<?php

namespace App\EventListener;

use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use App\Entity\AppUser;
use Doctrine\ORM\Events;

final class UserMailSubscriber implements EventSubscriber
{
    private $mailer;

    public function __construct(\Swift_Mailer $mailer, \Twig_Environment $twig)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postUpdate
        ];
    }

    public function postUpdate(LifecycleEventArgs $args)
    {
        $this->sendMail($args);
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $this->sendMail($args);
    }

    public function sendMail(LifecycleEventArgs $args)
    {
        $user = $args->getObject();
        // perhaps you only want to act on some "Product" entity
        if ($user instanceof AppUser) {
            $message = (new \Swift_Message('Bienvenue sur Oclock Community'))
                ->setFrom('etudiants@oclock.io')
                ->setTo($user->getEmail())
                ->setBody($this->twig->render('email/registration.html.twig', ['user' => $user]), 'text/html');

            $this->mailer->send($message);
        }


    }

}
