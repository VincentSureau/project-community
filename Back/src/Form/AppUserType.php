<?php

namespace App\Form;

use App\Entity\AppUser;
use App\Repository\RoleRepository;
use App\Entity\Competence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Utils\GeneratePassword;

class AppUserType extends AbstractType
{
    private $passwordFactory;

    private $userRepo;

    public function __construct(GeneratePassword $passwordFactory, RoleRepository $roleRepo)
    {
        $this->passwordFactory = $passwordFactory;
        $this->roleRepo = $roleRepo;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email')
            ->add('firstname')
            ->add('lastname')
            ->add('promotion');

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $user = $event->getData();
            $form = $event->getForm();
            if ($user && $user->getId() !== null) {
                $form->add('birthdate', BirthdayType::class, [
                     'placeholder' => [
                         'year' => 'Année', 'month' => 'Mois', 'day' => 'Jour',
                         ]
                     ])
                     ->add('profilePicture')
                     ->add('phoneNumber')
                     ->add('city')
                     ->add('zipcode')
                     ->add('linkLinkedin')
                     ->add('linkGithub')
                     ->add('linkPersonal')
                     ->add('isActive')
                     ->add('description')
                     ->add('promotion')
                     ->add('specialisation')
                     ->add('professionalStatus')
                     ->add('project')
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
                    ;
            }
        });

        $builder->addEventListener(
            FormEvents::POST_SUBMIT,
            function(FormEvent $event) {
                $form = $event->getForm();
                $user = $event->getData();

                if ($user && $user->getId() == null) {
                    $roleUser= $this->roleRepo->findOneByCode('ROLE_COMMUNITY_USER');
                    $user->setIsActive(false);
                    $user->setPassword($this->passwordFactory->generate());
                    $user->setRole($roleUser);
                    $user->setProfilePicture('https://avatars.dicebear.com/v2/male/'. $user->getEmail() . '.svg');
                }
            }

        );

    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AppUser::class,
        ]);
    }
}
