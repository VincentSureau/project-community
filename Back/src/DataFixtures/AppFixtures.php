<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;



use App\Entity\AppUser;
use App\Entity\Role;
use App\Entity\Competence;
use App\Entity\ProfessionalStatus;
use App\Entity\Project;
use App\Entity\Image;
use App\Entity\Promotion;
use App\Entity\Specialisation;


use Faker\Factory;
use Faker\ORM\Doctrine\Populator;

class AppFixtures extends Fixture
{
    private $passwordEncode;
    
    public function load(ObjectManager $manager)
    {
        $generator = Factory::create('fr_FR');
        $competence = new Competence();
        $competence->setName('La 2eme competence');

        $manager->persist($competence);
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
        dump($competence->getSlug());
    }
}
