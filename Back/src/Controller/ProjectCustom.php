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

   /**
    * return and array [] of all the project randomly sorted
    *
    * @return array
    */
   public function __invoke()
   {
       $data = $this->repo->findRandom();
       return $data;
   }
}
