<?php


namespace App\Manager;


use App\Entity\Datarow;
use App\Entity\Dataset;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\User\UserInterface;

class DatarowManager{

    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function create(UserInterface $user, $data)
    {
        $dataset = $this->em->getRepository(Dataset::class)->findByIdAndUser($user->getId(), $data["datasetId"]);

        if(!$dataset){
            return false;
        }

        $datarow = new Datarow();
        $datarow ->setValue($data["value"]);
        $datarow->setDataset($dataset[0]);


        $this->em->persist($datarow);
        $this->em->flush();


        return $datarow;
    }

    public function list(UserInterface $user, $datasetId)
    {
        return $this->em->getRepository(Datarow::class)->findByUserAndDataset($user->getId(), $datasetId);
    }

    public function remove(UserInterface $user, $data)
    {
        $datarow = $this->em->getRepository(Datarow::class)->findByUserAndId($user->getId(), $data['id']);

        if($datarow){
            $this->em->remove($datarow[0]);
            $this->em->flush();

            return true;
        }else{
            return false;
        }

    }

}