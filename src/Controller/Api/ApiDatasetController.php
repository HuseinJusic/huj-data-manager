<?php


namespace App\Controller\Api;


use App\Manager\DatasetManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api")
 */
class ApiDatasetController extends AbstractController{

    /**
     * @var DatasetManager
     */
    private $datasetManager;

    public function __construct(DatasetManager $datasetManager)
    {
        $this->datasetManager = $datasetManager;
    }


    /**
     * @Route("/v1/dataset/new", name="apiv1newDataset", methods={"POST"})
     */
    public function newDataset(Request $request) {
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            ["token" => json_encode($this->datasetManager->create($this->getUser(), $data)->getDatasetToken())]
        );
    }

    /**
     * @Route("/v1/dataset/remove", name="apiv1RemoveDataset", methods={"POST"})
     */
    public function removeDataset(Request $request) {
        $data = json_decode($request->getContent(), true);

        return new JsonResponse(
            $this->datasetManager->remove($this->getUser(), $data)
        );
    }

    /**
     * @Route("/v1/dataset/list", name="apiv1ListDataset", methods={"GET"})
     */
    public function listDataset(Request $request) {
        return new JsonResponse(
           ["data" => $this->datasetManager->list($this->getUser())]
        );
    }

}