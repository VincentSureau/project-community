<?php

namespace App\Controller\Admin;

use App\Entity\Specialisation;
use App\Form\SpecialisationType;
use App\Repository\SpecialisationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/specialisation")
 */
class SpecialisationController extends AbstractController
{
    /**
     * @Route("/", name="specialisation_index", methods="GET")
     */
    public function index(SpecialisationRepository $specialisationRepository): Response
    {
        return $this->render('admin/specialisation/index.html.twig', ['specialisations' => $specialisationRepository->findAll()]);
    }

    /**
     * @Route("/new", name="specialisation_new", methods="GET|POST")
     */
    public function new(Request $request): Response
    {
        $specialisation = new Specialisation();
        $form = $this->createForm(SpecialisationType::class, $specialisation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($specialisation);
            $em->flush();

            return $this->redirectToRoute('specialisation_index');
        }

        return $this->render('admin/specialisation/new.html.twig', [
            'specialisation' => $specialisation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="specialisation_show", methods="GET")
     */
    public function show(Specialisation $specialisation): Response
    {
        return $this->render('admin/specialisation/show.html.twig', ['specialisation' => $specialisation]);
    }

    /**
     * @Route("/{id}/edit", name="specialisation_edit", methods="GET|POST")
     */
    public function edit(Request $request, Specialisation $specialisation): Response
    {
        $form = $this->createForm(SpecialisationType::class, $specialisation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('specialisation_index', ['id' => $specialisation->getId()]);
        }

        return $this->render('admin/specialisation/edit.html.twig', [
            'specialisation' => $specialisation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="specialisation_delete", methods="DELETE")
     */
    public function delete(Request $request, Specialisation $specialisation): Response
    {
        if ($this->isCsrfTokenValid('delete'.$specialisation->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($specialisation);
            $em->flush();
        }

        return $this->redirectToRoute('specialisation_index');
    }
}
