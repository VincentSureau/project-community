<?php

namespace App\Utils;

class SendMail
{
  private $mailer;

  public function __construct(\Swift_Mailer $mailer, \Twig_Environment $twig)
  {
      $this->mailer = $mailer;
      $this->twig = $twig;
  }

  public function newUser($user)
  {
    $message = (new \Swift_Message('Bienvenue sur Oclock Community'))
        ->setFrom('etudiants@oclock.io')
        ->setTo($user->getEmail())
        ->setBody($this->twig->render('email/registration.html.twig', ['user' => $user]), 'text/html');

    return $this->mailer->send($message);
  }

  public function resetPassword($user)
  {
    $message = (new \Swift_Message('Bienvenue sur Oclock Community'))
        ->setFrom('etudiant@oclock.io')
        ->setTo($user->getEmail())
        ->setBody($this->twig->render('email/registration.html.twig', ['user' => $user]), 'text/html');

    return $this->mailer->send($message);
  }
}