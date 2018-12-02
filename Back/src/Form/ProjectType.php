<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\AppUser;
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
