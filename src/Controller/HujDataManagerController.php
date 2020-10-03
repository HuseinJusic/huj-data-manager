<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HujDataManagerController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="index", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('huj_data_manager/index.html.twig', [
            'controller_name' => 'HujDataManagerController',
        ]);
    }

//    /**
//     * @Route("/profile", name="huj_data_manager_profile")
//     */
//    public function profile()
//    {
//        return $this->render('huj_data_manager/index.html.twig', [
//            'controller_name' => 'HujDataManagerController',
//        ]);
//    }
}
