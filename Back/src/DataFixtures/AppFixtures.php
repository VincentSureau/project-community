<?php

namespace App\DataFixtures;

use Faker\Factory;

use App\Entity\Role;
use App\Entity\Image;
use App\Entity\AppUser;
use App\Entity\Project;
use App\Entity\Promotion;
use App\Entity\Competence;
use App\Entity\Specialisation;
use App\Entity\ProfessionalStatus;


use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
        {
            $this->passwordEncoder = $passwordEncoder;
        }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        //Creation des competences
        $competences_list = [
        'PHP7'
        , 'Javascript'
        , 'Jquery'
        , 'Jquery UI'
        , 'CSS3'
        , 'HTML 5'
        , 'Bootstrap'
        , 'Materialize CSS'
        , 'Bulma'
        , 'Ajax'
        , 'React'
        , 'Faker'
        , 'Api-platform'
        , 'REST'
        , 'MySql'
        , 'Composer'
        , 'Yarn'
        , 'Fixtures'
        , 'Symfony <3'
        , 'Wordpress'
        , 'Wix'
        , 'SEO'
        , 'POO'
        , 'Git'
        , 'MVC'
        , 'Gestion de projet'
        , 'Doctrine'
        , 'TWIG'
        , 'SCSS'
        , 'Altorouter'
        , 'JWT'
        , 'Plate'
        , 'Redux'
        , 'NodeJS'
        , 'Webpack'
        , 'Babel'
        , 'React router'
        , 'SwiftMailer'
        , 'YAML'
        , 'JSON'
        , 'Opquast'
        , 'Responsive Web Design'
        , '0Auth'
        , 'ES6'
        , 'Linux'
        , 'Apache'
        ];

        $competences = [];
        foreach($competences_list as $name){
            $competence = new Competence();
            $competence->setName($name);
            $manager->persist($competence);
            $competences[] = $competence;
        }

        $manager->flush();

        //Creation d un role admin
        $roleAdmin = new Role();
        $roleAdmin->setCode('ROLE_COMMUNITY_ADMIN'); //code technique role utilise pour tester l'ACL notamment
        $roleAdmin->setName('Administrateur'); //libelle affiche a l'utilisateur lorsqu'il est connecte
        $manager->persist($roleAdmin);

        //Creation d un role user
        $roleUser = new Role();
        $roleUser->setCode('ROLE_COMMUNITY_USER');
        $roleUser->setName('Utilisateur');
        $manager->persist($roleUser);

        $manager->flush();

        //Creation de spécialisation
        $specialisations = [];

        $symfony = new Specialisation();
        $symfony-> setName('Symfony');
        $manager->persist($symfony);

        $specialisations[] = $symfony;

        $react = new Specialisation();
        $react->setName('React');
        $manager->persist($react);

        $specialisations[] = $react;

        $wix = new Specialisation();
        $wix->setName('Wordpress');                
        $manager->persist($wix);

        $specialisations[] = $wix;

        $manager->flush();

        //Creation des statuts pro
        $proStatus = [];

        $employee = new ProfessionalStatus();
        $employee->setName('En activité');
        $manager->persist($employee);
        $proStatus[] = $employee;

        $lookingForAJob = new ProfessionalStatus();
        $lookingForAJob->setName('En recherche d\'emploi');
        $manager->persist($lookingForAJob);
        $proStatus[] = $lookingForAJob;

        $inProgress = new ProfessionalStatus();
        $inProgress->setName('En formation');
        $manager->persist($inProgress);
        $proStatus[] = $inProgress;

        $manager->flush();
        


        //Promotions
        $promotions = [];
        for($promotion_index = 1; $promotion_index < 15; $promotion_index++) {
            $promotion = new Promotion();
            $promotion->setName($faker->Name);
            $promotion->setStartDate($faker->dateTimeBetween('-2 years', '-5 month'));
            $promotion->setEndDate($faker->dateTimeBetween($promotion->getStartDate(), 'now'));
            $manager->persist($promotion);
            $promotions[] = $promotion;

            //Projects
            $projects = [];
            for($project_index = 0; $project_index < mt_rand(5, 7); $project_index++) {
                $project = new Project();
                $project->setName($faker->catchPhrase);
                $project->setDescription($faker->text($maxNbChars = 200));
                $project->setIsActive(true);
                $project->setLinkProject($faker->url);
                $project->setLinkVideo($faker->url);
                $project->setPromotion($promotion);
                for($competence_index = 0; $competence_index < mt_rand(8, 12); $competence_index++) {
                    $project->addCompetence($competences[array_rand($competences)]);
                }
                $manager->persist($project);
                $projects[] = $project;

                for($image_index = 0; $image_index < 4; $image_index++) {
                    $image = new Image;
                    $image->setImageLink('https://via.placeholder.com/500');
                    $image->setProject($project);
                    $image->setIsHero(($image_index == 0)? true : false);
                    $manager->persist($image);
                }

                //Creation de users
                for($k = 1; $k < mt_rand(3,5); $k++) {
                    $user = new AppUser();
                    $user->setEmail($faker->safeEmail);
                    $user->setRole($roleUser);
                    $user->setPassword('user');
                    $user->setFirstname($faker->firstName());
                    $user->setLastname($faker->lastName);
                    $user->setBirthdate($faker->dateTimeInInterval($startDate = '-60 years', $interval = '-16 years'));
                    $user->setProfilePicture('https://api.adorable.io/avatars/285/'. $user->getEmail() . '.png');
                    $user->setPhoneNumber($faker->mobileNumber);
                    $user->setCity($faker->city);
                    $user->setZipcode(intval($faker->postCode));
                    $user->setLinkLinkedin($faker->url);
                    $user->setLinkGithub($faker->url);
                    $user->setLinkPersonal($faker->url);
                    $user->setIsActive(true); 
                    $user->setDescription($faker->text($maxNbChars = 200));
                    $user->setProject($projects[array_rand($projects)]);
                    $user->setPromotion($promotion);
                    $user->setSpecialisation($specialisations[array_rand($specialisations)]);
                    $user->setProfessionalStatus($proStatus[array_rand($proStatus)]);
                    for($competence_index = 0; $competence_index < mt_rand(8, 12); $competence_index++) {
                        $user->addCompetence($competences[array_rand($competences)]);
                    }
                    $manager->persist($user);   
                }
            }

        }
        $manager->flush();
    }
}