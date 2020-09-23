<?php

namespace App\Entity;

use App\Repository\DatasetRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=DatasetRepository::class)
 */
class Dataset
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
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updated_at;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_nosql;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $dataset_token;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="datasets")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=Datarow::class, mappedBy="dataset", orphanRemoval=true)
     */
    private $datarows;

    /**
     * @ORM\ManyToOne(targetEntity=Unit::class, inversedBy="datasets")
     */
    private $unit;

    public function __construct()
    {
        $this->datarows = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeInterface $updated_at): self
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getIsNosql(): ?bool
    {
        return $this->is_nosql;
    }

    public function setIsNosql(bool $is_nosql): self
    {
        $this->is_nosql = $is_nosql;

        return $this;
    }

    public function getDatasetToken(): ?string
    {
        return $this->dataset_token;
    }

    public function setDatasetToken(?string $dataset_token): self
    {
        $this->dataset_token = $dataset_token;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Datarow[]
     */
    public function getDatarows(): Collection
    {
        return $this->datarows;
    }

    public function addDatarow(Datarow $datarow): self
    {
        if (!$this->datarows->contains($datarow)) {
            $this->datarows[] = $datarow;
            $datarow->setDataset($this);
        }

        return $this;
    }

    public function removeDatarow(Datarow $datarow): self
    {
        if ($this->datarows->contains($datarow)) {
            $this->datarows->removeElement($datarow);
            // set the owning side to null (unless already changed)
            if ($datarow->getDataset() === $this) {
                $datarow->setDataset(null);
            }
        }

        return $this;
    }

    public function getUnit(): ?Unit
    {
        return $this->unit;
    }

    public function setUnit(?Unit $unit): self
    {
        $this->unit = $unit;

        return $this;
    }
}
