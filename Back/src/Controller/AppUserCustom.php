<?php
// api/src/Controller/AppUserCustom.php

namespace App\Controller;

use App\Repository\AppUserRepository;
use App\Entity\AppUser;

class AppUserCustom
{
    private $myService;

    public function __construct(AppUserRepository $repo)
    {
        $this->repo = $repo;
    }

    public function __invoke(AppUser $data): AppUser
    {
        dump('test');
        dump($this->repo->findAll());
        die();

        return 'test';
    }
}