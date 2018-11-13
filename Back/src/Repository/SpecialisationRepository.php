<?php

namespace App\Repository;

use App\Entity\Specialisation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Specialisation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Specialisation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Specialisation[]    findAll()
 * @method Specialisation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpecialisationRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Specialisation::class);
    }

    // /**
    //  * @return Specialisation[] Returns an array of Specialisation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Specialisation
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
