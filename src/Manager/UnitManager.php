<?php


namespace App\Manager;


use App\Entity\Unit;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Security\Core\User\UserInterface;

class UnitManager implements CRUDEntityManagerInterface
{
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
        $unit = new Unit();
        $unit->setName($data["name"]);

        $this->em->persist($unit);
        $this->em->flush();

        return $unit;
    }

    public function list(UserInterface $user)
    {
        return $this->em->getRepository(Unit::class)->findAll();
    }

    public function remove(UserInterface $user, $data)
    {
        $unit = $this->em->getRepository(Unit::class)->find($data["id"]);
        if($unit){
            $this->em->remove($unit);
            $this->em->flush();
            return true;
        }else{
            return false;
        }

    }

    public function update(UserInterface $user, $data)
    {
        $unit = $this->em->getRepository(Unit::class)->find($data["id"]);
        $unit->setName($data["name"]);

        $this->em->persist($unit);
        $this->em->flush();

        return $unit;
    }
}