<?php


namespace App\Controller\Api;



use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class ApiUserController extends AbstractController{

    /**
     * @Route("/api/v1/user/get", name="apiv1UserGet", methods={"GET"})
     */
    public function apiGetUser() {
        return new JsonResponse(
            $this->getUser()->jsonSerialize()
        );
    }


    /**
     * @Route("/getApiToken", name="apiv1GetApiToken", methods={"GET"})
     */
    public function userGetApiToken() {
        return new JsonResponse(
            $this->getUser()->getApiToken()
        );
    }

}