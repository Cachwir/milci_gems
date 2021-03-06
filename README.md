Projet créé via [Create React App](https://github.com/facebook/create-react-app).

## Gemmes d'exception

Projet d'apprentissage de reactJS.<br>
Ce site est dédié à l'amour de la gémologie.

## Installation

Les étapes suivantes impliquent que vous avez déjà installé apache, node, npm, mongodb et pm2.

1. Clonez le projet et rendez-vous à sa racine
2. `npm install`
3. `cd backend`
4. `npm install`
5. créez la base de donnée sur mongodb et donnez lui une collection du nom de "posts"
6. vous trouverez un dump de posts dans le dossier backend/dump
7. copiez config.json.dist en config.json et remplissez dedans les informations d'accès à la bdd
8. `cd ../src/config`
9. copiez config.json.dist en config.json et entrez l'url vers le backend
10. `cd ../..`
11. `npm run build`
12. `cd backend`
13. `pm2 start server.js`
14. `cd /etc/apache2/sites-available` (peut varier selon l'OS et sa version)
15. `sudo touch gemmesdexception.conf`
16. `sudo nano gemmesdexception.conf`
17. Entrez la configuration suivante (avec vos informations) :
<pre>
&lt;VirtualHost *:80&gt;
        ServerAdmin webmaster@localhost
        ServerName url.vers.le.site.com
        ServerAlias www.url.vers.le.site.com
        DocumentRoot /chemin/vers/milci_gems/build
        &lt;Directory /chemin/vers/milci_gems/build&gt;
                Options Indexes FollowSymLinks
                AllowOverride All
                Order allow,deny
                allow from all
                Require all granted
        &lt;/Directory&gt;
&lt;/VirtualHost&gt;
</pre>
18. Sauvegardez et fermez l'éditeur
19. `sudo touch api.gemmesdexception.conf`
20. `sudo nano api.gemmesdexception.conf`
21. Entrez la configuration suivante (avec vos informations) :
<pre>
&lt;VirtualHost *:80&gt;
   ServerAdmin contact@mondomaine.fr
   ServerName url.vers.l.api.com
   ProxyRequests off
   &lt;Proxy *&gt;
      Order deny,allow
      Allow from all
   &lt;/Proxy&gt;
   &lt;Location /&gt;
      ProxyPass http://127.0.0.1:5000/
      ProxyPassReverse http://127.0.0.1:5000/
   &lt;/Location&gt;
&lt;/VirtualHost&gt;
</pre>
22. Sauvegardez et fermez l'éditeur
23. `sudo a2ensite gemmesdexception.conf`
24. `sudo a2ensite api.gemmesdexception.conf`
25. Votre site devrait être accessible à l'url renseignée.

## Tests

Ce projet est fourni une batterie de tests unitaires.<br>
Pour les lancer, les modules npm de dev doivent être installés.

Pour lancer les tests : `npm test`<br>
Pour faire un audit de coverage : `npm test -- --coverage --watchAll=false`

## Remerciements

Je tiens à remercier Milci, un ami apprenti gémologue, de m'avoir fourni les images et les textes du site.
