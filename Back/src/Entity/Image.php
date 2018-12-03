<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiProperty;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use App\Controller\CreateProjectPictureAction;

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
 *        "delete"={"access_control"="is_granted('ROLE_COMMUNITY_USER') and object.getProject() == user.getProject() or is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais tu ne peux supprimer que les images de ton projet !"}, 
 *        "edit_pictures"= {
 *             "method"="POST",
 *             "path"="/project/{project}/project_pictures/{image}",
 *             "controller"=CreateProjectPictureAction::class,
 *             "defaults"={"_api_receive"=false},
 *             "denormalizationContext"={"groups"={"projectWrite"}},
 *          },
 *        "new_pictures"= {
 *             "method"="POST",
 *             "path"="/project/{project}/project_pictures",
 *             "controller"=CreateProjectPictureAction::class,
 *             "defaults"={"_api_receive"=false},
 *             "denormalizationContext"={"groups"={"projectWrite"}},
 *          }, 
 *     },
 *     iri="http://schema.org/image",
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @Vich\Uploadable
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
     * @Groups({"projectWrite"})
     * @Vich\UploadableField(mapping="project_pictures", fileNameProperty="contentUrl")
     * @var File
     * @Assert\Image(
     *      mimeTypesMessage = "Le fichier téléchargé doit forcément être une image !")
     * @ApiProperty(iri="https://schema.org/MediaObject")
     */
    public $file;

    /**
     * @var string|null
     * @ORM\Column(nullable=true)
     * @ApiProperty(iri="http://schema.org/contentUrl")
     * @Groups({"user","project", "ProjectList", "projectWrite"})
     */
    private $contentUrl;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"user","project", "ProjectList", "projectWrite"})
     */
    private $isHero;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="images")
     * @ORM\JoinColumn(onDelete="CASCADE")
     * @ApiProperty(iri="https://schema.org/Project")
     */
    private $project;

    /**
     * @ORM\Column(type="datetime")
     * @ApiProperty(iri="https://schema.org/Date")
     *
     * @var \DateTime
     */
    private $updatedAt;    

    public function __construct()
    {
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
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
        return $this->contentUrl;
    }

    /**
     * Get the value of file
     *
     * @return  File
     */ 
    public function getFile()
    {
        return $this->file;
    }

    /**
     * Set the value of file
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $file
     */ 
    public function setFile(?File $file = null): void
    {
        $this->file = $file;

        if (null !== $file) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    /**
     * Get the value of contentUrl
     *
     * @return  string|null
     */ 
    public function getContentUrl()
    {
        return $this->contentUrl;
    }

    /**
     * Set the value of contentUrl
     *
     * @param  string|null  $contentUrl
     *
     * @return  self
     */ 
    public function setContentUrl($contentUrl)
    {
        $this->contentUrl = $contentUrl;

        return $this;
    }

    /**
     * Get the value of updatedAt
     *
     * @return  \DateTime
     */ 
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set the value of updatedAt
     *
     * @param  \DateTime  $updatedAt
     *
     * @return  self
     */ 
    public function setUpdatedAt(\DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}


