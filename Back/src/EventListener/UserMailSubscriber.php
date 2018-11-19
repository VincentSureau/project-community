<?php

namespace App\EventListener;

use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Doctrine\ORM\Events;
use App\Entity\AppUser;
use App\Utils\SendMail;

final class UserMailSubscriber implements EventSubscriber
{
    private $mailer;

    private $twig;

    public function __construct(\Swift_Mailer $mail, \Twig_Environment $twig)
    {
        $this->mailer = $mail;
        $this->twig = $twig;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
        ];
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $this->sendMail($args);
    }

    public function sendMail(LifecycleEventArgs $args)
    {
        $user = $args->getObject();

        if ($user instanceof AppUser) {
            $mailSender = new SendMail($this->mailer,  $this->twig);
            $mailSender->newUser($user);
        }


    }

}
