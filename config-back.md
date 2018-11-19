#Installation du Back-Office

Commande | Commentaire
---------|------------
Modifier le fichier .env (par défaut, le port MySQL est 3306) |DATABASE_URL="mysql://username:password@127.0.0.1:3306MySQLport/databaseName"
composer install | Met à jour les dépendances et génère l'autoloader
bin/console doctrine:database:create | crée la table dans la BDD
bin/console doctrine:schema:update --force | Effectue la mise à jour des tables de la BDD (uniquement en Dev)
bin/console doctrine:fixtures:load | Créer un jeu de données factices dans la BDD
bin/console server:run | lance un server virtuel dans le terminal (ctrl + C pour quitter)

