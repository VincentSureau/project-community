<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\ProjectCustom;
use App\Controller\ProjectHomeCustom;
use Symfony\Component\Validator\Constraints as Assert;



/**
 * @ApiResource(
 *     normalizationContext={"groups"={"project"}},
 *     denormalizationContext={"groups"={"projectWrite"}},
 *     collectionOperations={
 *         "get",
 *         "list"={
 *             "method"="GET",
 *             "path"="/projects/list",
 *             "controller"=ProjectCustom::class,
 *             "normalization_context"={"groups"={"ProjectList"}},
 *         },
 *         "home"={
 *             "method"="GET",
 *             "path"="/projects/home",
 *             "controller"=ProjectHomeCustom::class,
 *             "normalization_context"={"groups"={"ProjectList"}},
 *         },
 *         "post"={"access_control"="is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais seuls les administrateurs peuvent supprimer un projet !"}
 *     },
 *     itemOperations={
 *         "get"={
 *             "normalization_context"={"groups"={"project"}}
 *         },
 *         "put"={
 *             "normalization_context"={"groups"={"projectWrite"}},
 *             "access_control"="is_granted('ROLE_COMMUNITY_USER') and object == user.getProject() or is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais tu ne peux modifier que ton projet !"
 *         },
 *         "delete"={"access_control"="is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais mais seuls les administrateurs peuvent supprimer un projet"}
 *     }
 * )
 * @ApiFilter(SearchFilter::class, properties={"slug": "iexact"})
 * 
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"project", "projectWrite"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=120)
     * @Assert\NotBlank(message="Ce champ ne peut pas être vide")
     * @Assert\Length(
     *      max = 120,
     *      maxMessage = "Le nom du projet ne doit pas dépasser {{ limit }} caractères"
     * )
     * @Groups({"user", "ProjectList", "project", "projectWrite"})
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"project", "projectWrite"})
     */
    private $description;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"ProjectList", "project", "projectWrite", "user"})
     */
    private $isActive;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"project"})
     */
    private $createdDate;

    /**
     * @Gedmo\Slug(fields={"name"})
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Groups({"project", "AppUserList", "ProjectList", "user"})
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     * @Groups({"project", "projectWrite"})
     */
    private $linkProject;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     * @Groups({"project", "projectWrite"})
     */
    private $linkVideo;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\AppUser", mappedBy="project")
     * @Groups({"project", "ProjectList"})
     */
    private $appUsers;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Promotion", inversedBy="projects")
     * @ORM\JoinColumn(onDelete="SET NULL")
     * @Groups({"project","ProjectList"})
     */
    private $promotion;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Image", mappedBy="project", cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"user", "project", "ProjectList", "projectWrite"})
     */
    private $images;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Competence", inversedBy="projects")
     * @Groups({"project", "projectWrite"})
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

    public function setImage(Image $image)
    {
        
    }

    public function addImage(Image $image): self
    {
        
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setProject($this);
        } else {
            $em->persist($image);
            $em->flush();
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

    public function __toString()
    {
        return $this->name;
    }
}
