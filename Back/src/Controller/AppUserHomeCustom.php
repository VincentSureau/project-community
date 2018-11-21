<?php
// api/src/Controller/AppUserHomeCustom.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\AppUserRepository;
use App\Entity\AppUser;

class AppUserHomeCustom extends AbstractController
{
    private $repo;

    public function __construct(AppUserRepository $repo)
    {
        $this->repo = $repo;
    }

    public function __invoke(): Array
    {
        $data = $this->repo->findRandom($limit = 8);
        return $data;
    }
}