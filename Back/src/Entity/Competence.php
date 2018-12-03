<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     collectionOperations={
 *        "get",
 *        "post"={"access_control"="is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais seuls les administrateurs peuvent ajouter une compétence !"}
 *     },
 *     itemOperations={
 *        "get",
 *        "put"={"access_control"="is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais seuls les administrateurs peuvent modifier une compétence !"},
 *        "delete"={"access_control"="is_granted('ROLE_COMMUNITY_ADMIN')", "access_control_message"="Désolé mais mais seuls les administrateurs peuvent supprimer une compétence"}
 *     },
 *     iri="http://schema.org/skills",
 * )
 * @ORM\Entity(repositoryClass="App\Repository\CompetenceRepository")
 */
class Competence
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"user", "project"})
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank(message="Ce champ ne peut pas être vide")
     * @Assert\Length(
     *      max = 100,
     *      maxMessage = "Le nom de la spécialisation ne doit pas dépasser {{ limit }} caractères"
     * )
     * @ApiProperty(iri="https://schema.org/name")
     */
    private $name;

    /**
     * @Gedmo\Slug(fields={"name"})
     * @ORM\Column(type="string", length=120, nullable=true)
     * @ApiProperty(iri="https://schema.org/URL")
     */
    private $slug;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\AppUser", mappedBy="competences")
     * @ApiProperty(iri="https://schema.org/Person")
     */
    private $appUsers;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Project", mappedBy="competences")
     * @ApiProperty(iri="https://schema.org/Project")
     */
    private $projects;

    public function __construct()
    {
        $this->appUsers = new ArrayCollection();
        $this->projects = new ArrayCollection();
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

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

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
            $appUser->addCompetence($this);
        }

        return $this;
    }

    public function removeAppUser(AppUser $appUser): self
    {
        if ($this->appUsers->contains($appUser)) {
            $this->appUsers->removeElement($appUser);
            $appUser->removeCompetence($this);
        }

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): self
    {
        if (!$this->projects->contains($project)) {
            $this->projects[] = $project;
            $project->addCompetence($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->contains($project)) {
            $this->projects->removeElement($project);
            $project->removeCompetence($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }
}
