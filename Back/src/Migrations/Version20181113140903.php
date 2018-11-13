<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181113140903 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE competence (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(120) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE promotion (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(120) DEFAULT NULL, start_date DATETIME DEFAULT NULL, end_date DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(30) NOT NULL, name VARCHAR(40) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE professional_status (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(120) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE specialisation (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, slug VARCHAR(120) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project (id INT AUTO_INCREMENT NOT NULL, promotion_id INT DEFAULT NULL, name VARCHAR(120) NOT NULL, description LONGTEXT DEFAULT NULL, is_active TINYINT(1) NOT NULL, created_date DATETIME NOT NULL, slug VARCHAR(150) DEFAULT NULL, link_project VARCHAR(255) DEFAULT NULL, link_video VARCHAR(255) DEFAULT NULL, INDEX IDX_2FB3D0EE139DF194 (promotion_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_competence (project_id INT NOT NULL, competence_id INT NOT NULL, INDEX IDX_8C72134D166D1F9C (project_id), INDEX IDX_8C72134D15761DAB (competence_id), PRIMARY KEY(project_id, competence_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE image (id INT AUTO_INCREMENT NOT NULL, project_id INT DEFAULT NULL, image_link VARCHAR(255) NOT NULL, is_hero TINYINT(1) NOT NULL, INDEX IDX_C53D045F166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_user (id INT AUTO_INCREMENT NOT NULL, role_id INT DEFAULT NULL, promotion_id INT DEFAULT NULL, specialisation_id INT DEFAULT NULL, professional_status_id INT DEFAULT NULL, project_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(80) DEFAULT NULL, lastname VARCHAR(80) DEFAULT NULL, birthdate DATETIME DEFAULT NULL, profile_picture VARCHAR(255) DEFAULT NULL, phone_number INT DEFAULT NULL, city VARCHAR(50) DEFAULT NULL, zipcode INT DEFAULT NULL, link_linkedin VARCHAR(150) DEFAULT NULL, link_github VARCHAR(150) DEFAULT NULL, link_personal VARCHAR(150) DEFAULT NULL, is_active TINYINT(1) NOT NULL, created_date DATETIME NOT NULL, description LONGTEXT DEFAULT NULL, UNIQUE INDEX UNIQ_88BDF3E9E7927C74 (email), INDEX IDX_88BDF3E9D60322AC (role_id), INDEX IDX_88BDF3E9139DF194 (promotion_id), INDEX IDX_88BDF3E95627D44C (specialisation_id), INDEX IDX_88BDF3E9DEB44956 (professional_status_id), INDEX IDX_88BDF3E9166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_user_competence (app_user_id INT NOT NULL, competence_id INT NOT NULL, INDEX IDX_69698B1A4A3353D8 (app_user_id), INDEX IDX_69698B1A15761DAB (competence_id), PRIMARY KEY(app_user_id, competence_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id)');
        $this->addSql('ALTER TABLE project_competence ADD CONSTRAINT FK_8C72134D166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_competence ADD CONSTRAINT FK_8C72134D15761DAB FOREIGN KEY (competence_id) REFERENCES competence (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E95627D44C FOREIGN KEY (specialisation_id) REFERENCES specialisation (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9DEB44956 FOREIGN KEY (professional_status_id) REFERENCES professional_status (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE app_user_competence ADD CONSTRAINT FK_69698B1A4A3353D8 FOREIGN KEY (app_user_id) REFERENCES app_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_user_competence ADD CONSTRAINT FK_69698B1A15761DAB FOREIGN KEY (competence_id) REFERENCES competence (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE project_competence DROP FOREIGN KEY FK_8C72134D15761DAB');
        $this->addSql('ALTER TABLE app_user_competence DROP FOREIGN KEY FK_69698B1A15761DAB');
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE139DF194');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9139DF194');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9D60322AC');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9DEB44956');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E95627D44C');
        $this->addSql('ALTER TABLE project_competence DROP FOREIGN KEY FK_8C72134D166D1F9C');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F166D1F9C');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9166D1F9C');
        $this->addSql('ALTER TABLE app_user_competence DROP FOREIGN KEY FK_69698B1A4A3353D8');
        $this->addSql('DROP TABLE competence');
        $this->addSql('DROP TABLE promotion');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE professional_status');
        $this->addSql('DROP TABLE specialisation');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE project_competence');
        $this->addSql('DROP TABLE image');
        $this->addSql('DROP TABLE app_user');
        $this->addSql('DROP TABLE app_user_competence');
    }
}
