<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *        "normalizationContext"={"groups"={"project"}},
 *        "denormalizationContext"={"groups"={"projectWrite"}},
 *     },
 *     collectionOperations={
 *        "get",
 *        "post"={"access_control"="is_granted('ROLE_COMMUNITY_USER') and object.getProject() == user.getProject() or is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais tu ne peux ajouter des images qu'à ton projet !"},
 *     },
 *     itemOperations={
 *        "get",
 *        "put"={"access_control"="is_granted('ROLE_COMMUNITY_USER') and object.getProject() == user.getProject() or is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais tu ne peux modifier que les images de ton projet !"},
 *        "delete"={"access_control"="is_granted('ROLE_COMMUNITY_USER') and object.getProject() == user.getProject() or is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais tu ne peux supprimer que les images de ton projet !"}
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
     * @ORM\Column(type="boolean")
     * @Groups({"user","project", "ProjectList", "projectWrite"})
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
