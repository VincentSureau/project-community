<?php
// api/src/Controller/PasswordCustom.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\AppUserRepository;
use App\Entity\AppUser;
use App\Utils\SendMail;
use App\Utils\GeneratePassword;

class PasswordCustom extends AbstractController
{
    private $repo;

    public function __construct(AppUserRepository $repo)
    {
        $this->repo = $repo;
    }

    public function newPassword($email, GeneratePassword $passwordFactory, SendMail $mailGenerator): Response
    {
        $user = $this->repo->findOneByEmail($email);
        if($user !== null) {
            $user->setPassword($passwordFactory->generate());
            $em = $this->getDoctrine()->getManager();
            $mailGenerator->resetPassword($user);
            $em->flush();

            return $this->json($data = ["message" => "mot de passe envoyé"], $status = 200);
        }
        return $this->json($data = ["message" => "aucun utilisateur trouvé"], $status = 403);
    }
}
