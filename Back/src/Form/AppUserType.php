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
                $form->add('birthdate', DateType::class, [
                    'label' => 'Date de naissance',
                    'widget' => 'single_text',
                    'html5' => false,
                    'attr' => ['class' => 'datepicker', 'autocomplete' => 'off'],
                    'format' => 'dd/MM/yyyy',
                    ])
                     ->add('file', VichImageType::class, [
                        'required' => false,
                        'allow_delete' => true,
                        // 'download_label' => '...',
                        'download_uri' => true,
                        'image_uri' => true,
                        // 'imagine_pattern' => '...',
                     ])
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

                    $url_to_image = 'https://avatars.dicebear.com/v2/male/'. $user->getEmail() . '.svg';
                    
                    $ch = curl_init($url_to_image);
                    
                    $my_save_dir = '../public/images/profils/';
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
