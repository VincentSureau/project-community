<?php

namespace App\Controller\Admin;

use App\Entity\Competence;
use App\Form\CompetenceType;
use App\Repository\CompetenceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @Route("/competence")
 */
class CompetenceController extends AbstractController
{
    /**
     * @Route("/", name="competence_index", methods="GET")
     */
    public function index(CompetenceRepository $competenceRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $query = $competenceRepository->findAll();
        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            8/*limit per page*/
        );
        return $this->render('admin/competence/index.html.twig', ['pagination' => $pagination]);
    }

    /**
     * @Route("/new", name="competence_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $competence = new Competence();
        $form = $this->createForm(CompetenceType::class, $competence);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($competence);
            $em->flush();

            $this->addFlash(
                'success',
                'La compétence ' . $competence->getName() . ' a été ajoutée'
            );

            return $this->redirectToRoute('competence_index');
        }


        return $this->render('admin/competence/new.html.twig', [
            'competence' => $competence,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="competence_show", methods="GET")
     */
    public function show(Competence $competence): Response
    {
        return $this->render('admin/competence/show.html.twig', ['competence' => $competence]);
    }

    /**
     * @Route("/{id}/edit", name="competence_edit", methods="GET|POST")
     */
    public function edit(Request $request, Competence $competence): Response
    {
        $form = $this->createForm(CompetenceType::class, $competence);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            $this->addFlash(
                'success',
                'La compétence ' . $competence->getName() . ' a été modifiée'
            );

            return $this->redirectToRoute('competence_index', ['id' => $competence->getId()]);
        }


        return $this->render('admin/competence/edit.html.twig', [
            'competence' => $competence,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="competence_delete", methods="DELETE")
     */
    public function delete(Request $request, Competence $competence): Response
    {
        if ($this->isCsrfTokenValid('delete'.$competence->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($competence);
            $em->flush();
         
            $this->addFlash(
                'danger',
                'La compétence ' . $competence->getName() . ' a été supprimée'
            );
        }
        return $this->redirectToRoute('competence_index');
    }
}
