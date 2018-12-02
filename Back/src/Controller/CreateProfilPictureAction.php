<?php 

namespace App\Controller;

use ApiPlatform\Core\Bridge\Symfony\Validator\Exception\ValidationException;
use App\Entity\AppUser;
use App\Form\ProfilPictureType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class CreateProfilPictureAction
{
    private $validator;
    private $doctrine;
    private $factory;

    public function __construct(RegistryInterface $doctrine, FormFactoryInterface $factory, ValidatorInterface $validator)
    {
        $this->validator = $validator;
        $this->doctrine = $doctrine;
        $this->factory = $factory;
    }

    /**
     * This function is called when a user upload a new profile picture
     * @IsGranted("ROLE_COMMUNITY_USER")
     */
    public function __invoke(AppUser $appUser, Request $request): AppUser
    {
        $form = $this->factory->create(ProfilPictureType::class, $appUser);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->doctrine->getManager();
            $em->persist($appUser);
            $em->flush();
            // Prevent the serialization of the file property
            $appUser->file = null;

            return $appUser;
        }

        // This will be handled by API Platform and returns a validation error.
        throw new ValidationException($this->validator->validate($appUser));
    }
}