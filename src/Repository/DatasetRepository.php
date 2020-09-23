<?php

namespace App\Repository;

use App\Entity\Dataset;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Dataset|null find($id, $lockMode = null, $lockVersion = null)
 * @method Dataset|null findOneBy(array $criteria, array $orderBy = null)
 * @method Dataset[]    findAll()
 * @method Dataset[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DatasetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dataset::class);
    }

    // /**
    //  * @return Dataset[] Returns an array of Dataset objects
    //  */

    public function findByUser($userId)
    {
        return $this->createQueryBuilder('d')
            ->Where('d.user = :user')
            ->setParameter('user', $userId)
            ->orderBy('d.name', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }

    public function findByIdAndUser($userId, $datasetId){
        return $this->createQueryBuilder('d')
            ->andWhere('d.user = :user')
            ->andWhere('d.id = :datasetId')
            ->setParameter('user', $userId)
            ->setParameter('datasetId', $datasetId)
            ->getQuery()
            ->getResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?Dataset
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
