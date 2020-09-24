<?php

namespace App\Entity;

use App\Repository\UnitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass=UnitRepository::class)
 */
class Unit implements JsonSerializable
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Dataset::class, mappedBy="unit")
     */
    private $datasets;

    public function __construct()
    {
        $this->datasets = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Dataset[]
     */
    public function getDatasets(): Collection
    {
        return $this->datasets;
    }

    public function addDataset(Dataset $dataset): self
    {
        if (!$this->datasets->contains($dataset)) {
            $this->datasets[] = $dataset;
            $dataset->setUnit($this);
        }

        return $this;
    }

    public function removeDataset(Dataset $dataset): self
    {
        if ($this->datasets->contains($dataset)) {
            $this->datasets->removeElement($dataset);
            // set the owning side to null (unless already changed)
            if ($dataset->getUnit() === $this) {
                $dataset->setUnit(null);
            }
        }

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "name" => $this->name
        ];
    }
}
