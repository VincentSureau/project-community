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


class ProjectType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('promotion')
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
                $form->add('linkProject')
                     ->add('linkVideo')
                     ->add('competences')
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
                     ->add('isActive')
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

                    $image = new Image;
                    $url_to_image = 'https://www.greengeeks.com/blog/wp-content/uploads/2015/11/ResponsiveWebDesign-e1447282926766.jpg';
                    
                    $ch = curl_init($url_to_image);
                    
                    $my_save_dir = '../public/img/projects/';
                    $filename = md5(uniqid(rand(), true)) . '.jpg';
                    $complete_save_loc = $my_save_dir . $filename;
                    $fp = fopen($complete_save_loc, 'wb');
                    curl_setopt($ch, CURLOPT_FILE, $fp);
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_exec($ch);
                    curl_close($ch);
                    fclose($fp);

                    $image->setContentUrl($filename);
                    $image->setIshero(true);
                    $project->addImage($image);
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
