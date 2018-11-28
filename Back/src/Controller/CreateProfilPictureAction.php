<?php 

namespace App\Controller;

use ApiPlatform\Core\Bridge\Symfony\Validator\Exception\ValidationException;
use App\Entity\ProfilPicture;
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
     * @IsGranted("ROLE_COMMUNITY_USER")
     */
    public function __invoke(Request $request): ProfilPicture
    {
        $profilePicture = new ProfilPicture();

        $form = $this->factory->create(ProfilPictureType::class, $profilPicture);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->doctrine->getManager();
            $em->persist($profilePicture);
            $em->flush();

            // Prevent the serialization of the file property
            $profilePicture->file = null;

            return $profilePicture;
        }

        // This will be handled by API Platform and returns a validation error.
        throw new ValidationException($this->validator->validate($profilePicture));
    }
}