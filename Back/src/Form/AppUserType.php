<?php

namespace App\Form;

use App\Entity\AppUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AppUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
            ->add('password')
            ->add('firstname')
            ->add('lastname')
            ->add('birthdate')
            ->add('profilePicture')
            ->add('phoneNumber')
            ->add('city')
            ->add('zipcode')
            ->add('linkLinkedin')
            ->add('linkGithub')
            ->add('linkPersonal')
            ->add('isActive')
            ->add('createdDate')
            ->add('description')
            ->add('role')
            ->add('promotion')
            ->add('specialisation')
            ->add('professionalStatus')
            ->add('project')
            ->add('competences')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AppUser::class,
        ]);
    }
}
