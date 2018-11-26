<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181126150903 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE139DF194');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F166D1F9C');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9139DF194');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9166D1F9C');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9DEB44956');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9DEB44956 FOREIGN KEY (professional_status_id) REFERENCES professional_status (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9139DF194');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9DEB44956');
        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9166D1F9C');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9DEB44956 FOREIGN KEY (professional_status_id) REFERENCES professional_status (id)');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE image DROP FOREIGN KEY FK_C53D045F166D1F9C');
        $this->addSql('ALTER TABLE image ADD CONSTRAINT FK_C53D045F166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE139DF194');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE139DF194 FOREIGN KEY (promotion_id) REFERENCES promotion (id)');
    }
}
