<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\AppUser;
use App\Entity\Image;
use App\Entity\Competence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Doctrine\ORM\EntityManagerInterface;


class ProjectType extends AbstractType
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }


    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom',
            ])
            ->add('description', null, [
                'label' => 'Description',
            ])
            ->add('promotion', null, [
                'label' => 'Promotion',
            ])
            ->add('appUsers', EntityType::class, [
                'class' => AppUser::class,
                'multiple' => true,
                'group_by' => 'promotion',
                'required' => false,
                'label' => 'Membres',
                'attr' =>
                    ['class' => 'chosen-select',
                    'data-placeholder' => 'Choisir un membre'],
                ]
                );

        // add field to the form when editing an existing project
        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $project = $event->getData();
            $form = $event->getForm();
            dump($project);
            if ($project && $project->getId() !== null) {
                $form->add('linkProject', null, [
                    'label' => 'Lien du projet',
                ])
                     ->add('linkVideo', null, [
                         'label' => 'Lien de la vidéo',
                     ])
                     ->add('competences', EntityType::class, [
                        'class' => Competence::class,
                        'multiple' => true,
                        'required' => false,
                        'label' => 'Compétences',
                        'attr' =>
                            ['class' => 'chosen-select',
                            'data-placeholder' => 'Choisir une compétence'],
                        ]
                        )
                     ->add('isActive', null, [
                         'label' => 'Afficher le projet',
                     ])
                     ;

            }
        });

        // if the project is new, it set to inactive by default
        $builder->addEventListener(
            FormEvents::POST_SUBMIT,
            function(FormEvent $event) {
                $form = $event->getForm();
                $project = $event->getData();

                if ($project && $project->getId() == null) {
                    $project->setIsActive(false);

                    for($image_index = 0; $image_index < 4; $image_index++) {
                        $image = new Image;
                        $url_to_image = 'https://via.placeholder.com/504x300.png';
                        
                        $ch = curl_init($url_to_image);
                        
                        $my_save_dir = '../public/img/projects/';
                        $filename = md5(uniqid(rand(), true)) . '.png';
                        $complete_save_loc = $my_save_dir . $filename;
                        $fp = fopen($complete_save_loc, 'wb');
                        curl_setopt($ch, CURLOPT_FILE, $fp);
                        curl_setopt($ch, CURLOPT_HEADER, 0);
                        curl_exec($ch);
                        curl_close($ch);
                        fclose($fp);
                        
                        $image->setContentUrl($filename);
                        $image->setProject($project);
                        $image->setIsHero(($image_index == 0)? true : false);
                        $this->em->persist($image);
                    }
                }
            }

        );

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Project::class,
        ]);
    }
}
