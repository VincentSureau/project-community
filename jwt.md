# JWT Token

## Installer JWT

Commande | Description
---------|------------
Composer install|Installe les dépendances (lexik/LexikJWTAuthenticationBundle)
mkdir config/jwt|Créé un dossier config pour stocker les clefs ssl
openssl genrsa -out config/jwt/private.pem -aes256 4096| Crée une clef privée pour la génération des tokens
openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem| Crée une clef publique pour la vérification des tokens
bin/console server:run 8001| Lance le serveur interne de symfony sur le port 8001

## Créer une utilisateur

* Ensuite aller dans http://127.0.0.1:8001/gestion/user/new
* Créer un utilisateur avec un email valide (le mot de passe sera envoyé à cette adresse)
* Dans la console faire : curl -X POST -H "Content-Type: application/json" http://localhost:8001/login_check -d '{"username":"MON_EMAIL","password":"MON_MOT_DE_PASSE"}'
* Si tout est bon, je reçoit un token

## Pour faire une requête:

Ligne|Contenu
-----|-------
Header|Content-Type: application/json
Content|{ "username": "vincentsureau5@gmail.com", "password": "%A!W&x%Z+g&S(e+" }
