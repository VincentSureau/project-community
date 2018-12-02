<?php 

namespace App\Controller;

use ApiPlatform\Core\Bridge\Symfony\Validator\Exception\ValidationException;
use App\Entity\Image;
use App\Entity\Project;
use App\Form\ProjectPictureType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class CreateProjectPictureAction
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
     * This function is called when a user create or update a new picture in his project
     * @IsGranted("ROLE_COMMUNITY_USER")
     */
    public function __invoke(Project $project, $image = null, Request $request): Image
    {
        if($image){
            $image = $this->doctrine->getRepository(Image::class)->find($image);
        } else {
            $image = new Image();
        }
        $form = $this->factory->create(ProjectPictureType::class, $image);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // multipart/form-data sent form react serialize boolean value as a string
            // so we need to transform it into boolean
            if($request->request->get('isHero') == 'true')
            {
                $image->setIsHero(true);
            } else {
                $image->setIsHero(false);
            }
            $em = $this->doctrine->getManager();
            $image->setProject($project);
            $em->persist($image);
            $em->flush();
            // Prevent the serialization of the file property
            $image->file = null;

            return $image;
        }

        // This will be handled by API Platform and returns a validation error.
        throw new ValidationException($this->validator->validate($image));
    }
}