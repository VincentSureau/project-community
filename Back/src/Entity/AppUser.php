<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Controller\AppUserCustom;
use App\Controller\AppUserHomeCustom;
use App\Controller\AppUserRandomHomeCustom;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
/**
 * @ApiResource(
 *     attributes={
 *         "normalization_context"={"groups"={"user"}}
 *     },
 *     collectionOperations={
 *         "list"={
 *             "method"="GET",
 *             "path"="/app_users/list",
 *             "controller"=AppUserCustom::class,
 *             "normalization_context"={"groups"={"AppUserList"}}
 *         },
 *         "home"={
 *             "method"="GET",
 *             "path"="/app_users/home",
 *             "controller"=AppUserHomeCustom::class,
 *             "normalization_context"={"groups"={"AppUserList"}}
 *         },
 *         "RandomHome"={
 *             "method"="GET",
 *             "path"="/app_users/random_home",
 *             "controller"=AppUserRandomHomeCustom::class,
 *             "normalization_context"={"groups"={"AppUserList"}}
 *         },
 *         "get",
 *         "post"
 *     },
 * )
 * @ApiFilter(SearchFilter::class, properties={"id": "iexact"})
 * @ORM\Entity(repositoryClass="App\Repository\AppUserRepository")
 * @UniqueEntity("email")
 */
class AppUser implements UserInterface
{
    /**
     * @Groups({"user", "AppUserList", "project", "ProjectList"})
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\NotBlank(
     *     message = "Le champ email ne peux pas être vide."
     * )
     * @Assert\Email(
     *     message = "L'email '{{ value }}' n'est pas valide.",
     *     checkMX = true
     * )
     */
    private $email;

    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(
     *     message = "Le champ mot de passe ne peux pas être vide."
     * )
     * @Assert\Regex(
     *     pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,15}$"),
     *     match=true,
     *     message="Ton mot de passe doit contenir au minimum une majuscule, une minuscule, un chiffre, un caractère spécial et faire entre 8 et 15 caractères",
     */
    private $password;

    /**
     * @SecurityAssert\UserPassword(
     *     message = "Le mot de passe est erroné"
     * )
     */
    protected $oldPassword;

    /**
     * @Groups({"project", "AppUserList", "ProjectList", "user"})
     * @ORM\Column(type="string", length=80, nullable=true)
     * @Assert\NotBlank(
     *     message = "Le champ prénom ne peux pas être vide."
     * )
     * @Assert\Regex(
     *     pattern="/\d/",
     *     match=false,
     *     message="Le prénom ne peut pas contenir de chiffres"
     * )
     * @Assert\Length(
     *      min = 2,
     *      max = 80,
     *      minMessage = "Le champ prénom doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "Le champ prénom ne peux pas comporter plus de {{ limit }} caractères"
     * )
     */


    private $firstname;

    /**
     * @Groups({"project", "AppUserList", "ProjectList", "user"})
     * @ORM\Column(type="string", length=80, nullable=true)
     * @Assert\NotBlank(
     *     message = "Le champ nom ne peux pas être vide."
     * )
     * @Assert\Regex(
     *     pattern="/\d/",
     *     match=false,
     *     message="Le nom ne peut pas contenir de chiffres"
     * )
     * @Assert\Length(
     *      min = 2,
     *      max = 80,
     *      minMessage = "Le champ nom doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "Le champ nom ne peux pas comporter plus de {{ limit }} caractères"
     * )
     */
    private $lastname;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="datetime", nullable=true)
     * @Assert\DateTime(message="Veuillez indiquer une date valide")
     */
    private $birthdate;

    /**
     * @Groups({"AppUserList", "user"})
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     */
    private $profilePicture;

    /**
     * @Groups({"user"})
     * @Assert\Regex(
     *     pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$",
     *     match=true,
     *     message="Le numéro de téléphone saisi n'est pas valide"
     * )
     * @ORM\Column(type="string", length=25, nullable=true)
     */
    private $phoneNumber;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $city;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Regex(
     *     pattern="/\d/",
     *     match=true,
     *     message="Le code postal doit contenir uniqument des chiffres"
     * )
     * @Assert\Length(
     *      min = 5,
     *      max = 5,
     *      minMessage = "Le champ code postal doit comporter au minimum {{ limit }} caractères.",
     *      maxMessage = "Le champ code postal ne doit pas comporter plus de {{ limit }} caractères"
     * )
     */
    private $zipcode;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     */
    private $linkLinkedin;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     */
    private $linkGithub;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="string", length=150, nullable=true)
     * @Assert\Url(
     *     message = "L'url '{{ value }}  n'est pas une url valide",
     *     protocols = {"http", "https"}
     * )
     */
    
    private $linkPersonal;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="datetime")
     */
    private $createdDate;

    /**
     * @Groups({"user"})
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="appUsers")
     */
    private $role;

    /**
     * @Groups({"user", "AppUserList", "user"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Promotion", inversedBy="appUsers")
     * @Assert\NotBlank(
     *     message = "Le champ numéro de téléphone ne peux pas être vide."
     * )
     */
    private $promotion;

    /**
     * @Groups({"user", "project", "AppUserList", "ProjectList"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Specialisation", inversedBy="appUsers")
     */
    private $specialisation;

    /**
     * @Groups({"user", "AppUserList"})
     * @ORM\ManyToOne(targetEntity="App\Entity\ProfessionalStatus", inversedBy="appUsers")
     */
    private $professionalStatus;

    /**
     * @Groups({"user"})
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="appUsers")
     */
    private $project;

    /**
     * @Groups({"user"})
     * @ORM\ManyToMany(targetEntity="App\Entity\Competence", inversedBy="appUsers")
     */
    private $competences;

    /**
     * @Groups({"user", "AppUserList", "project", "ProjectList"})
     * @ORM\Column(type="string", length=120, nullable=true)
     */
    private $slug;

    public function __construct()
    {
        $this->createdDate = new \DateTime();
        $this->competences = new ArrayCollection();
    }

    // return id
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        return [$this->role->getCode()];
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getProfilePicture(): ?string
    {
        return $this->profilePicture;
    }

    public function setProfilePicture(?string $profilePicture): self
    {
        $this->profilePicture = $profilePicture;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(?string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getZipcode(): ?int
    {
        return $this->zipcode;
    }

    public function setZipcode(?int $zipcode): self
    {
        $this->zipcode = $zipcode;

        return $this;
    }

    public function getLinkLinkedin(): ?string
    {
        return $this->linkLinkedin;
    }

    public function setLinkLinkedin(?string $linkLinkedin): self
    {
        $this->linkLinkedin = $linkLinkedin;

        return $this;
    }

    public function getLinkGithub(): ?string
    {
        return $this->linkGithub;
    }

    public function setLinkGithub(?string $linkGithub): self
    {
        $this->linkGithub = $linkGithub;

        return $this;
    }

    public function getLinkPersonal(): ?string
    {
        return $this->linkPersonal;
    }

    public function setLinkPersonal(?string $linkPersonal): self
    {
        $this->linkPersonal = $linkPersonal;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

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

    public function getSpecialisation(): ?Specialisation
    {
        return $this->specialisation;
    }

    public function setSpecialisation(?Specialisation $specialisation): self
    {
        $this->specialisation = $specialisation;

        return $this;
    }

    public function getProfessionalStatus(): ?ProfessionalStatus
    {
        return $this->professionalStatus;
    }

    public function setProfessionalStatus(?ProfessionalStatus $professionalStatus): self
    {
        $this->professionalStatus = $professionalStatus;

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
        return $this->lastname . ' ' . $this->firstname;
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
}