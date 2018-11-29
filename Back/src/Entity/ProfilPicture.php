<?php
// src/Entity/ProfilPicture.php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\CreateProfilPictureAction;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ApiResource(
  *     attributes={
 *         "normalization_context"={"groups"={"profilPictureRead"}},
 *         "denormalizationContext"={"groups"={"profilPictureWrite"}}
 *     },
 *     collectionOperations={
 *         "get",
 *         "post"={
 *             "method"="POST",
 *             "path"="/profil_picture",
 *             "controller"=CreateProfilPictureAction::class,
 *             "defaults"={"_api_receive"=false},
 *     },
 * })
 * @Vich\Uploadable
 */
class ProfilPicture
{
    /**
     * @Groups({"user", "userWrite"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Vich\UploadableField(mapping="profil_pictures", fileNameProperty="contentUrl")
     * @var File
     */
    public $file;

    /**
     * @var string|null
     * @ORM\Column(nullable=true)
     * @ApiProperty(iri="http://schema.org/contentUrl")
     * @Groups({"user", "userWrite"})
     */
    public $contentUrl;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var \DateTime
     */
    private $updatedAt;    

    public function __construct()
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getAppUser(): ?AppUser
    {
        return $this->appUser;
    }

    public function setAppUser(?AppUser $appUser): self
    {
        $this->appUser = $appUser;

        // set (or unset) the owning side of the relation if necessary
        $newProfilPicture = $appUser === null ? null : $this;
        if ($newProfilPicture !== $appUser->getProfilPicture()) {
            $appUser->setProfilPicture($newProfilPicture);
        }

        return $this;
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
    
    public function __toString()
    {
     return $this->contentUrl;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of file
     *
     * @return  File|null
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