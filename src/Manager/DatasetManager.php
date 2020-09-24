<?php

namespace App\Manager;

use App\Entity\Dataset;
use DateTime;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManager;

class DatasetManager implements CRUDEntityManagerInterface {

    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function create(UserInterface $user, $data): Dataset{
        $dataset = new Dataset();
        $dataset->setName($data["name"]);
        $dataset->setDescription($data['description']);
        $dataset->setIsNosql($data['isNOSQL']);
        //$dataset->setUnit();

        //TODO: IMP UNIT
        $dataset->setCreatedAt(new DateTime());
        $dataset->setUpdatedAt(new DateTime());
        $dataset->setUser($user);

        //TODO: write TOKEN generator
        $dataset->setDatasetToken(random_int(0,10000000));

        $this->em->persist($dataset);
        $this->em->flush();

        return $dataset;
    }

    public function list(UserInterface $user){
        return  $this->em->getRepository(Dataset::class)->findByUser($user->getId());
    }

    public function remove(UserInterface $user, $data){
        $dataset = $this->em->getRepository(Dataset::class)->findByIdAndUser($user->getId(), $data["id"]);

        if(sizeof($dataset) > 0){
            $this->em->remove($dataset[0]);
            $this->em->flush();
            return true;
        }else{
            return false;
        }
    }

    public function update(UserInterface $user, $data)
    {
        // TODO: Implement update() method.
    }
}