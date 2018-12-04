<?php

namespace App\Form;

use App\Entity\Specialisation;
use App\Entity\AppUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class SpecialisationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => 'Nom',
            ])
            ->add('AppUsers', EntityType::class, [
            'class' => AppUser::class,
            'multiple' => true,
            'required' => false,
            'label' => 'Membres',
            'attr' =>
                ['class' => 'chosen-select',
                'data-placeholder' => 'Choisir un membre'],
            ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Specialisation::class,
        ]);
    }
}
