<?php

namespace App\Form;

use App\Entity\Promotion;
use App\Entity\AppUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class PromotionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('startDate', DateType::class, [
                'placeholder' => [
                    'year'=>'Année', 'month' => 'Mois', 'day' => 'Jour' 
                ]
            ])
            ->add('endDate', DateType::class, [
                'placeholder' => [
                    'year'=>'Année', 'month' => 'Mois', 'day' => 'Jour' 
                ]
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
            'data_class' => Promotion::class,
        ]);
    }
}
