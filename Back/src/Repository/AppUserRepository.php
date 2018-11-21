<?php

namespace App\Repository;

use App\Entity\AppUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method AppUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method AppUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method AppUser[]    findAll()
 * @method AppUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppUserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, AppUser::class);
    }

    // /**
    //  * @return AppUser[] Returns an array of AppUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AppUser
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * @return AppUser[] Returns an array of AppUser objects with only fields needeed in page list
     */
    public function findRandom($limit = null): array
    {
    $entityManager = $this->getEntityManager();
    $qb = $entityManager->createQueryBuilder();
    $qb->select('u')
    ->addSelect('RAND() as HIDDEN rand')
    ->from('App\Entity\AppUser', 'u')
    ->where('u.isActive = true')
    ->orderBy('rand');
    if($limit !== null){
        $qb->setMaxResults($limit);
    }
    
    $query = $qb->getQuery();
    
    return $query->execute();
    }
}
