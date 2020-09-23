<?php

namespace App\Repository;

use App\Entity\Datarow;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Datarow|null find($id, $lockMode = null, $lockVersion = null)
 * @method Datarow|null findOneBy(array $criteria, array $orderBy = null)
 * @method Datarow[]    findAll()
 * @method Datarow[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DatarowRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Datarow::class);
    }

    // /**
    //  * @return Datarow[] Returns an array of Datarow objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Datarow
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
