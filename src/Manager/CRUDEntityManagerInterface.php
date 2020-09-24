<?php


namespace App\Manager;


use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManager;

interface CRUDEntityManagerInterface
{
    public function __construct(EntityManager $em);

    public function create(UserInterface $user, $data);
    public function list(UserInterface $user);
    public function remove(UserInterface $user, $data);
    public function update(UserInterface $user, $data);
}