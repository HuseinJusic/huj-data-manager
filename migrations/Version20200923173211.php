<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200923173211 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE unit (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE datarow (id INT AUTO_INCREMENT NOT NULL, dataset_id INT NOT NULL, value DOUBLE PRECISION DEFAULT NULL, INDEX IDX_D58492D7D47C2D1B (dataset_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE datarow ADD CONSTRAINT FK_D58492D7D47C2D1B FOREIGN KEY (dataset_id) REFERENCES dataset (id)');
        $this->addSql('ALTER TABLE dataset ADD unit_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE dataset ADD CONSTRAINT FK_B7A041D0F8BD700D FOREIGN KEY (unit_id) REFERENCES unit (id)');
        $this->addSql('CREATE INDEX IDX_B7A041D0F8BD700D ON dataset (unit_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dataset DROP FOREIGN KEY FK_B7A041D0F8BD700D');
        $this->addSql('DROP TABLE datarow');
        $this->addSql('DROP TABLE unit');
        $this->addSql('DROP INDEX IDX_B7A041D0F8BD700D ON dataset');
        $this->addSql('ALTER TABLE dataset DROP unit_id');
    }
}
