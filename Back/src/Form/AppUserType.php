<?php

namespace App\Form;

use App\Entity\AppUser;
use App\Entity\Competence;
use App\Entity\ProfilPicture;
use App\Utils\GeneratePassword;
use App\Repository\RoleRepository;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\TelType;

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
            ->add('firstname', null, [
                'label' => 'Prénom',
            ])
            ->add('lastname', null, [
                'label' => 'Nom'
            ])
            ->add('promotion', null, [
                'label' => 'Promotion',
            ]);

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $user = $event->getData();
            $form = $event->getForm();
            // add fields to the form when editing an existing user
            if ($user && $user->getId() !== null) {
                $form->add('birthdate', BirthdayType::class, [
                    'label' => 'Date de naissance',
                    'widget' => 'single_text',
                    'html5' => false,
                    'required' => false,
                    'attr' => ['class' => 'datepicker', 'autocomplete' => 'off'],
                    'format' => 'dd/MM/yyyy',
                    ])
                     ->add('file', VichImageType::class, [
                        'required' => false,
                        'label' => 'Photo de profil',
                        'allow_delete' => true,
                        'download_label' => 'Télécharger l\'image',
                        'download_uri' => true,
                        'download_link' => false,
                        'image_uri' => true,
                     ])
                     ->add('phoneNumber', TelType::class, [
                         'label' => 'Téléphone',
                         'required' => false,
                     ] )
                     ->add('city', null, [
                         'label' => 'Ville',
                         'required' => false,
                     ])
                     ->add('zipcode', null, [
                         'label' => 'Code postal',
                         'required' => false,
                     ])
                     ->add('linkLinkedin', null, [
                         'label' => 'Profil LinkedIn',
                         'required' => false,
                     ])
                     ->add('linkGithub', null, [
                         'label' => 'Profil Github',
                         'required' => false,
                     ])
                     ->add('linkPersonal', null, [
                         'label' => 'Site personnel',
                         'required' => false,
                     ])
                     ->add('isActive', null, [
                         'label' => 'Afficher le profil',
                     ])
                     ->add('description', null, [
                         'label' => 'Description',
                         'required' => false,
                     ])
                     ->add('promotion', null, [
                         'label' => 'Promotion',
                     ])
                     ->add('specialisation', null, [
                         'label' => 'Spécialisation',
                     ])
                     ->add('professionalStatus', null, [
                         'label' => 'Statut profesionnel',
                     ])
                     ->add('project', null, [
                         'label' => 'Project',
                         'required' => false,
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
                    ;
            }
        });

        // if the user is a new user, set role to user, status to inactive
        // set a random password and a random profile picture
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

                    $url_to_image = 'https://avatars.dicebear.com/v2/male/'. $user->getEmail() . '.svg';
                    
                    $ch = curl_init($url_to_image);
                    
                    $my_save_dir = '../public/img/profils/';
                    $filename = md5(uniqid(rand(), true)) . '.svg';
                    $complete_save_loc = $my_save_dir . $filename;
                    $fp = fopen($complete_save_loc, 'wb');
                    curl_setopt($ch, CURLOPT_FILE, $fp);
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_exec($ch);
                    curl_close($ch);
                    fclose($fp);
                    
                    $user->setContentUrl($filename);
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

    public function getBlockPrefix()
    {
        return '';
    }
}
