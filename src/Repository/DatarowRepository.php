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


    public function findByUserAndDataset($user, $dataset)
    {
        return $this->createQueryBuilder('d')
            ->join('d.dataset', "s")
            ->andWhere('d.dataset = :dataset')
            ->andWhere('s.user = :user')
            ->setParameter('dataset', $dataset)
            ->setParameter('user', $user)
            ->orderBy('d.created_at', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findByUserAndId($user, $datarowId)
    {
        return $this->createQueryBuilder('d')
            ->join('d.dataset', "s")
            ->andWhere('d.id = :datarowId')
            ->andWhere('s.user = :user')
            ->setParameter('datarowId', $datarowId)
            ->setParameter('user', $user)
            ->orderBy('d.created_at', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    // /**
    //  * @return Datarow[] Returns an array of Datarow objects
    //  */
    /*

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
