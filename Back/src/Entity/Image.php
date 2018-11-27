<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *         "denormalizationContext"={"groups"={"projectWrite"}}
 *     },
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 */
class Image
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     * @Groups({"user","project", "ProjectList", "projectWrite"})
     */
    private $imageLink;

    /**
     * @Groups({"user","project", "ProjectList", "projectWrite"})
     * @ORM\Column(type="boolean")
     */
    private $isHero;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="images")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $project;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImageLink(): ?string
    {
        return $this->imageLink;
    }

    public function setImageLink(string $imageLink): self
    {
        $this->imageLink = $imageLink;

        return $this;
    }

    public function getIsHero(): ?bool
    {
        return $this->isHero;
    }

    public function setIsHero(bool $isHero): self
    {
        $this->isHero = $isHero;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function __toString()
    {
        return $this->imageLink;
    }
}
