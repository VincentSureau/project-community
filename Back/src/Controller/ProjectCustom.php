<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProjectCustom extends AbstractController
{
   private $repo;

   public function __construct(ProjectRepository $repo)
   {
       $this->repo = $repo;
   }

   public function __invoke()
   {
       $data = $this->repo->findRandom();
       return $data;
   }
}
