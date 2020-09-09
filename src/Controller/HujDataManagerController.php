<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HujDataManagerController extends AbstractController
{
    /**
     * @Route("/", name="huj_data_manager")
     */
    public function index()
    {
        return $this->render('huj_data_manager/index.html.twig', [
            'controller_name' => 'HujDataManagerController',
        ]);
    }
}
