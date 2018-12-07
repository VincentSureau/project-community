<?php

namespace App\Controller\Admin;

use App\Entity\Project;
use App\Form\ProjectType;
use App\Repository\ProjectRepository;
use App\Repository\AppUserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @Route("/project")
 */
class ProjectController extends AbstractController
{
    /**
     * @Route("/", name="project_index", methods="GET")
     */
    public function index(ProjectRepository $projectRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $query = $projectRepository->findAll();
        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            15/*limit per page*/
        );
        return $this->render('admin/project/index.html.twig', ['pagination' => $pagination]);
    }

    /**
     * @Route("/new", name="project_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $project = new Project();
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($project);

            // because the relation between project and appuser is mapped by app user,
            // appUser changes will not be persisted in the database, so we need to do
            // it manually
            foreach($project->getAppUsers() as $user)
            {
                $user->setProject($project);
            }

            $em->flush();

            $this->addFlash(
                'success',
                'Le projet ' . $project->getName() . ' a été ajouté'
            );

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/new.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="project_show", methods="GET")
     */
    public function show(Project $project): Response
    {
        return $this->render('admin/project/show.html.twig', ['project' => $project]);
    }

    /**
     * @Route("/{id}/edit", name="project_edit", methods="GET|POST")
     */
    public function edit(Request $request, Project $project, AppUserRepository $userRepo): Response
    {
        $form = $this->createForm(ProjectType::class, $project);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();

            // because the relation between project and appuser is mapped by app user,
            // appUser changes will not be persisted in the database, so we need to do
            // it manually
            $oldUsers = $userRepo->findByProject($project);
            if(!empty($oldUsers))
            {
                foreach($oldUsers as $oldUser)
                {
                    $oldUser->setProject(null);
                }
            }

            foreach($project->getAppUsers() as $user)
            {
                $user->setProject($project);
            }

            $em->flush();

            $this->addFlash(
                'success',
                'Le projet ' . $project->getName() . ' a été modifié'
            );

            return $this->redirectToRoute('project_index');
        }

        return $this->render('admin/project/edit.html.twig', [
            'project' => $project,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="project_delete", methods="DELETE")
     */
    public function delete(Request $request, Project $project): Response
    {
        if ($this->isCsrfTokenValid('delete'.$project->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($project);
            $em->flush();

            $this->addFlash(
                'danger',
                'Le projet ' . $project->getName() . ' a été supprimé'
            );

        }

        return $this->redirectToRoute('project_index');
    }

    /**
     * @Route("/{id}/moderate", name="project_moderate", methods="POST")
    */
    public function moderate(Request $request, Project $project): Response
    {
        if ($this->isCsrfTokenValid('moderate'.$project->getId(), $request->request->get('_token'))) {
            if($project->getIsActive()) {
                $project->setIsActive(false);
            } else {
                $project->setIsActive(true);
            }
            $em = $this->getDoctrine()->getManager();
            $em->flush();
        }

        if($project->getIsActive()) {
            $this->addFlash(
                'success',
                'Le projet ' . $project->getName() . ' a été activé'
            );
        } else {
            $this->addFlash(
                'warning',
                'Le projet ' . $project->getName() . ' a été désactivé'
            );
        }

        return $this->redirectToRoute('project_index');
    }
}
