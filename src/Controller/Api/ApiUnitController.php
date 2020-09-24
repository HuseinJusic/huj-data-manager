<?php


namespace App\Controller\Api;


use App\Manager\UnitManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api")
 */
class ApiUnitController extends AbstractController{

    /**
     * @var UnitManager
     */
    private $unitManager;

    public function __construct(UnitManager $unitManager)
    {
        $this->unitManager = $unitManager;
    }

    /**
     * @Route("/v1/unit/list", name="apiv1ListUnit", methods={"GET"})
     */
    public function listUnit(Request $request) {
        return new JsonResponse(
            ["data" => $this->unitManager->list($this->getUser())]
        );
    }

    /**
     * @Route("/v1/unit/new", name="apiv1NewUnit", methods={"POST"})
     */
    public function newUnit(Request $request) {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["data" => $this->unitManager->create($this->getUser(), $data)]
        );
    }

    /**
     * @Route("/v1/unit/remove", name="apiv1RemoveUnit", methods={"POST"})
     */
    public function removeUnit(Request $request) {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["data" => $this->unitManager->remove($this->getUser(), $data)]
        );
    }

    /**
     * @Route("/v1/unit/update", name="apiv1UpdateUnit", methods={"POST"})
     */
    public function updateUnit(Request $request) {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'User tried to access a page without having ROLE_ADMIN');
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["data" => $this->unitManager->update($this->getUser(), $data)]
        );
    }


}