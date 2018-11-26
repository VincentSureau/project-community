<?php

namespace App\Controller\Admin;

use App\Entity\ProfessionalStatus;
use App\Form\ProfessionalStatusType;
use App\Repository\ProfessionalStatusRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @Route("/professional-status")
 */
class ProfessionalStatusController extends AbstractController
{
    /**
     * @Route("/", name="professional_status_index", methods="GET")
     */
    public function index(ProfessionalStatusRepository $professionalStatusRepository, PaginatorInterface $paginator, Request $request): Response
    {
        $query = $professionalStatusRepository->findAll();
        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1)/*page number*/,
            8/*limit per page*/
        );
        return $this->render('admin/professional_status/index.html.twig', ['pagination' => $pagination]);
    }

    /**
     * @Route("/new", name="professional_status_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $professionalStatus = new ProfessionalStatus();
        $form = $this->createForm(ProfessionalStatusType::class, $professionalStatus);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($professionalStatus);
            $em->flush();

            $this->addFlash(
                'success',
                'Le statut professionnel ' . $professionalStatus->getName() . ' a été ajouté'
            );

            return $this->redirectToRoute('professional_status_index');
        }

        return $this->render('admin/professional_status/new.html.twig', [
            'professional_status' => $professionalStatus,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="professional_status_show", methods="GET")
     */
    public function show(ProfessionalStatus $professionalStatus): Response
    {
        return $this->render('admin/professional_status/show.html.twig', ['professional_status' => $professionalStatus]);
    }

    /**
     * @Route("/{id}/edit", name="professional_status_edit", methods="GET|POST")
     */
    public function edit(Request $request, ProfessionalStatus $professionalStatus): Response
    {
        $form = $this->createForm(ProfessionalStatusType::class, $professionalStatus);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            $this->addFlash(
                'success',
                'Le statut professionnel ' . $professionalStatus->getName() . ' a été modifié'
            );
    
            return $this->redirectToRoute('professional_status_index', ['id' => $professionalStatus->getId()]);
        }

        return $this->render('admin/professional_status/edit.html.twig', [
            'professional_status' => $professionalStatus,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="professional_status_delete", methods="DELETE")
     */
    public function delete(Request $request, ProfessionalStatus $professionalStatus): Response
    {
        if ($this->isCsrfTokenValid('delete'.$professionalStatus->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($professionalStatus);
            $em->flush();

            $this->addFlash(
                'danger',
                'Le statut professionnel ' . $professionalStatus->getName() . ' a été supprimé'
            );
        }


        return $this->redirectToRoute('professional_status_index');
    }
}
