<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


class ProjectCustom extends AbstractController
{
   private $myService;

   public function __construct(ProjectRepository $repo)
   {
       $this->repo = $repo;
   }

   public function __invoke(ProjectRepository $repo)
   {
       $data = $repo->findByIsActive(true);
       return $data;
   }
}
