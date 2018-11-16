<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\ProjectCustom;

/**
 * @ApiResource(
 *     attributes={
 *         "normalization_context"={"groups"={"project"}}
 *     },
 *     
 *     collectionOperations={
 *         "list"={
 *             "method"="GET",
 *             "method"="GET",
 *             "path"="/projects/list",
 *             "controller"=ProjectCustom::class,
 *             "normalization_context"={"groups"={"list"}}
 *         },
 *        "post"
 *  
 *     }
 * )
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"user", "list"})
     * @ORM\Column(type="string", length=120)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @Groups({"list"})
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdDate;

    /**
     * @Gedmo\Slug(fields={"name"})
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $linkProject;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $linkVideo;

    /**
     * @Groups({"project", "list"})
     * @ORM\OneToMany(targetEntity="App\Entity\AppUser", mappedBy="project")
     */
    private $appUsers;

    /**
     * @Groups({"project","list"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Promotion", inversedBy="projects")
     */
    private $promotion;

    /**
     * @Groups({"user", "project", "list"})
     * @ORM\OneToMany(targetEntity="App\Entity\Image", mappedBy="project")
     */
    private $images;

    /**
     * @Groups({"project"})
     * @ORM\ManyToMany(targetEntity="App\Entity\Competence", inversedBy="projects")
     */
    private $competences;

    public function __construct()
    {
        $this->createdDate = new \DateTime();
        $this->appUsers = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->competences = new ArrayCollection();
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

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getCreatedDate(): ?\DateTimeInterface
    {
        return $this->createdDate;
    }

    public function setCreatedDate(\DateTimeInterface $createdDate): self
    {
        $this->createdDate = $createdDate;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getLinkProject(): ?string
    {
        return $this->linkProject;
    }

    public function setLinkProject(?string $linkProject): self
    {
        $this->linkProject = $linkProject;

        return $this;
    }

    public function getLinkVideo(): ?string
    {
        return $this->linkVideo;
    }

    public function setLinkVideo(?string $linkVideo): self
    {
        $this->linkVideo = $linkVideo;

        return $this;
    }

    /**
     * @return Collection|AppUser[]
     */
    public function getAppUsers(): Collection
    {
        return $this->appUsers;
    }

    public function addAppUser(AppUser $appUser): self
    {
        if (!$this->appUsers->contains($appUser)) {
            $this->appUsers[] = $appUser;
            $appUser->setProject($this);
        }

        return $this;
    }

    public function removeAppUser(AppUser $appUser): self
    {
        if ($this->appUsers->contains($appUser)) {
            $this->appUsers->removeElement($appUser);
            // set the owning side to null (unless already changed)
            if ($appUser->getProject() === $this) {
                $appUser->setProject(null);
            }
        }

        return $this;
    }

    public function getPromotion(): ?Promotion
    {
        return $this->promotion;
    }

    public function setPromotion(?Promotion $promotion): self
    {
        $this->promotion = $promotion;

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setProject($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
            // set the owning side to null (unless already changed)
            if ($image->getProject() === $this) {
                $image->setProject(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Competence[]
     */
    public function getCompetences(): Collection
    {
        return $this->competences;
    }

    public function addCompetence(Competence $competence): self
    {
        if (!$this->competences->contains($competence)) {
            $this->competences[] = $competence;
        }

        return $this;
    }

    public function removeCompetence(Competence $competence): self
    {
        if ($this->competences->contains($competence)) {
            $this->competences->removeElement($competence);
        }

        return $this;
    }
}
