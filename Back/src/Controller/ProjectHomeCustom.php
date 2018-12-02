<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProjectHomeCustom extends AbstractController
{
   private $repo;

   public function __construct(ProjectRepository $repo)
   {
        $this->repo = $repo;
   }

   /**
    * return an array of 3 project randomly sorted
    *
    * @return array
    */
   public function __invoke()
   {
        $data = $this->repo->findRandom($limit = 3);
        return $data;
   }
}
