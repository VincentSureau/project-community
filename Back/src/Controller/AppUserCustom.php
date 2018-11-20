<?php
// api/src/Controller/AppUserCustom.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\AppUserRepository;
use App\Entity\AppUser;

class AppUserCustom extends AbstractController
{
    private $repo;

    public function __construct(AppUserRepository $repo)
    {
        $this->repo = $repo;
    }

    public function __invoke(): Array
    {
        $data = $this->repo->findBy(['isActive' => true]);

        return $data;
    }
}