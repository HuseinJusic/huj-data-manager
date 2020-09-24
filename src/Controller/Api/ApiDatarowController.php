<?php


namespace App\Controller\Api;


use App\Manager\DatarowManager;
use App\Manager\DatasetManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api")
 */
class ApiDatarowController extends AbstractController{

    /**
     * @var DatarowManager
     */
    private $datarowManager;

    public function __construct(DatarowManager $datarowManager)
    {
        $this->datarowManager = $datarowManager;
    }

    /**
     * @Route("/v1/datarow/list/{datasetId}", name="apiv1ListDatarow", methods={"GET"})
     */
    public function listDatarow(string $datasetId) {
        return new JsonResponse(
            ["data" => $this->datarowManager->list($this->getUser(), $datasetId)]
        );
    }

    /**
     * @Route("/v1/datarow/new", name="apiv1NewDatarow", methods={"POST"})
     */
    public function newDatarow(Request $request) {
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["data" => $this->datarowManager->create($this->getUser(), $data)]
        );
    }

    /**
     * @Route("/v1/datarow/remove", name="apiv1RemoveDatarow", methods={"POST"})
     */
    public function removeDatarow(Request $request) {
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["data" => $this->datarowManager->remove($this->getUser(), $data)]
        );
    }

}