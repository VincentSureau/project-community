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
use App\Entity\ProfilPicture;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{

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

        //Creation d un role superadmin
        $roleSuperAdmin = new Role();
        $roleSuperAdmin->setCode('ROLE_COMMUNITY_SUPERADMIN'); //code technique role utilise pour tester l'ACL notamment
        $roleSuperAdmin->setName('Super_administrateur'); //libelle affiche a l'utilisateur lorsqu'il est connecte
        $manager->persist($roleSuperAdmin);

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
        $promotion_list= [
            'Big-Bang',
            'Cosmos',
            'Discovery',
            'Explorer',
            'Fusion',
            'Galaxy',
            'Hyperspace',
            'Invaders',
            'Journey',
            'Lunar',
            'Meteor',
            'Nova',
            'Orion',
        ];

        $promotions = [];
        foreach($promotion_list as $promotion_name) {
            $promotion = new Promotion();
            $promotion->setName($promotion_name);
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
                    // $image->setImageLink('https://via.placeholder.com/500x750');
                    $url_to_image = 'https://testinsane.com/blog/wp-content/uploads/2014/11/eCommerce-Testing-at-TestInsane-Technologies.png';
                    
                    $ch = curl_init($url_to_image);
                    
                    $my_save_dir = 'public/img/projects/';
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
                    $manager->persist($image);
                }

                //Creation de users

                for($k = 1; $k < mt_rand(4,6); $k++) {
                    $user = new AppUser();
                    $gender = ($k % 2 == 0)? 'male' : 'female';
                    $user->setEmail($faker->unique()->safeEmail);
                    $user->setRole($roleUser);
                    $user->setPassword('User1!');
                    if($gender == 'male'){
                        $user->setFirstname($faker->firstNameMale());
                    } else {
                        $user->setFirstname($faker->firstNameFemale());
                    }
                    $user->setLastname($faker->lastName);
                    $user->setBirthdate($faker->dateTimeInInterval($startDate = '-60 years', $interval = '-16 years'));

                    $url_to_image = 'https://avatars.dicebear.com/v2/'. $gender . '/' . $user->getEmail() . '.svg';
                    
                    $ch = curl_init($url_to_image);
                    
                    $my_save_dir = 'public/img/profils/';
                    $filename = md5(uniqid(rand(), true)) . '.svg';
                    $complete_save_loc = $my_save_dir . $filename;
                    $fp = fopen($complete_save_loc, 'wb');
                    curl_setopt($ch, CURLOPT_FILE, $fp);
                    curl_setopt($ch, CURLOPT_HEADER, 0);
                    curl_exec($ch);
                    curl_close($ch);
                    fclose($fp);
                    
                    $user->setContentUrl($filename);
                    $user->setPhoneNumber($faker->mobileNumber);
                    $user->setCity($faker->city);
                    $postcode = '';
                    for($x = 0; $x < 5; $x++){
                        $postcode .= mt_rand(0, 9);
                    }
                    $user->setZipcode(intval($postcode));
                    $user->setLinkLinkedin($faker->url);
                    $user->setLinkGithub($faker->url);
                    $user->setLinkPersonal($faker->url);
                    $user->setIsActive(true); 
                    $user->setDescription($faker->text($maxNbChars = 200));
                    $user->setProject($project);
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

        $promoKrypton = new Promotion;
        $promoKrypton->setName('Krypton');
        $promoKrypton->setStartDate(new \DateTime());
        $promoKrypton->setEndDate(new \DateTime());
        $manager->persist($promoKrypton);
        $community = new Project;
        $community->setDescription('L\'objectif du projet était de réaliser un site internet communautaire pour les anciens étudiants d\' O\’clock : un mélange de LinkedIn et des Copains d’Avant (une partie étant publique et l’autre privée).
        Il s’agit d’une plateforme permettant de référencer tous les étudiants et anciens étudiants d\’ O\'clock en recensant leurs différents profils et projets.
        Plusieurs avantages :
            Pour les personnes qui se projettent de s’inscrire : être convaincu en consultant les profils, projets et débouchés professionnels des anciens élèves d’O’Clock.
            Pour les élèves actuels de la formation O’Clock : être guidés dans leur choix de spécialisation en consultant les projets et profils des anciennes promo/élèves.
            Pour les anciens élèves : avoir un CV + Portfolio en ligne consultables par de potentiels recruteurs.
        De quoi convaincre quiconque de faire confiance à O’clock :) !
        ');
        $community->setIsActive(true);
        $community->setPromotion($promoKrypton);
        $community->setName('Oclock Community');

        $manager->persist($community);

        for($image_index = 0; $image_index < 4; $image_index++) {
            $image = new Image;
            $url_to_image = 'https://via.placeholder.com/504x300.png';
            
            $ch = curl_init($url_to_image);
            
            $my_save_dir = 'public/img/projects/';
            $filename = md5(uniqid(rand(), true)) . '.png';
            $complete_save_loc = $my_save_dir . $filename;
            $fp = fopen($complete_save_loc, 'wb');
            curl_setopt($ch, CURLOPT_FILE, $fp);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_exec($ch);
            curl_close($ch);
            fclose($fp);
            
            $image->setContentUrl($filename);
            $image->setProject($community);
            $image->setIsHero(($image_index == 0)? true : false);
            $manager->persist($image);
        }

        $communityUsers = [
            [
                'prenom' => 'Tristan',
                'nom' => 'Touchain',
                'email' => 'tristan.touchain@gmail.com',
                'gender' => 'male',
                'specialisation' => $react
            ],
            [
                'prenom' => 'Thibault',
                'nom' => 'Garnier',
                'email' => 'tgarni01@gmail.com',
                'gender' => 'male',
                'specialisation' => $symfony
            ],
            [
                'prenom' => 'Elodie',
                'nom' => 'Chiarani',
                'email' => 'elodie.chiarani@gmail.com',
                'gender' => 'female',
                'specialisation' => $react
            ],
            [
                'prenom' => 'Vincent',
                'nom' => 'Sureau',
                'email' => 'hello@vincent-sureau.fr',
                'gender' => 'male',
                'specialisation' => $symfony
            ]
        ];

        foreach ($communityUsers as $member){
            $newUser = new AppUser;
            $newUser->setFirstName($member['prenom'])
            ->setLastName($member['nom'])
            ->setEmail($member['email'])
            ->setPassword('Admin021218!')
            ->setProject($community)
            ->setPromotion($promoKrypton)
            ->setIsActive(true)
            ->setRole($roleSuperAdmin)
            ->setSpecialisation($member['specialisation']);

            $url_to_image = 'https://avatars.dicebear.com/v2/'. $member['gender'] . '/' . $user->getEmail() . '.svg';
            
            $ch = curl_init($url_to_image);
            
            $my_save_dir = 'public/img/profils/';
            $filename = md5(uniqid(rand(), true)) . '.svg';
            $complete_save_loc = $my_save_dir . $filename;
            $fp = fopen($complete_save_loc, 'wb');
            curl_setopt($ch, CURLOPT_FILE, $fp);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_exec($ch);
            curl_close($ch);
            fclose($fp);
            
            $newUser->setContentUrl($filename);

            $manager->persist($newUser);
        }

        $manager->flush();
    }
}
