<?php
// api/src/Controller/AppUserCustomLastUsersHome.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\AppUserRepository;
use App\Entity\AppUser;

class AppUserCustomLastUsersHome extends AbstractController
{
    private $repo;

    public function __construct(AppUserRepository $repo)
    {
        $this->repo = $repo;
    }

    /**
    * Return an array [] of 8 Users randomly sorted of the last promotion
    */
    public function __invoke(): Array
    {

        $data = $this->repo->findRandomByLastPromo($limit = 8);

        return $data;
    }
}