# TechQuest - Documentation du projet

Bienvenue dans la documentation du projet **TechQuest**, un quiz interactif permettant de tester vos connaissances sur l’histoire de la technologie et des inventions majeures dans le domaine de l'informatique. Ce projet est développé principalement en **JavaScript**, avec des fonctionnalités dynamiques et interactives telles que des questions à choix multiples (MCQ), des glisser-déposer, des vrais/faux, et plus encore.

## Table des matières
1. [Description du projet](#description-du-projet)
2. [Installation](#installation)
3. [Structure du projet](#structure-du-projet)
4. [Fonctionnalités](#fonctionnalités)
5. [Code de fonctionnement](#code-de-fonctionnement)
6. [FAQ](#faq)
7. [Contribuer](#contribuer)

---

## Description du projet

**TechQuest** est un quiz interactif où les utilisateurs peuvent tester leurs connaissances sur des sujets variés, comme l’histoire des ordinateurs, des systèmes d'exploitation, des inventeurs célèbres, et bien plus encore. Les utilisateurs doivent répondre à différentes questions, accumuler des points en fonction de la rapidité de leurs réponses et en fonction de la difficulté des questions.

Le projet se compose de plusieurs types de questions, allant des questions à choix multiples (MCQ) aux jeux de glisser-déposer, en passant par des questions de type vrai/faux et des questions à compléter.

## Installation

Pour installer et exécuter le projet sur votre machine locale, vous devez suivre ces étapes :

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-utilisateur/techquest.git
   cd techquest
   ```

2. **Installer les dépendances (si nécessaire) :**
   Ce projet n'a pas de dépendances spécifiques, il vous suffit de l'exécuter dans un serveur local ou de simplement ouvrir le fichier `index.html` dans votre navigateur.

3. **Lancer le projet :**
   Ouvrez le fichier `index.html` dans votre navigateur préféré pour démarrer l’application.

## Structure du projet

Voici la structure des fichiers et dossiers de ce projet :

```
├── api
│   └── leaderboard.php
├── images
│   ├── 1._Alan_Turing_les_bases_de_l'intelligence_artificielle.jpg
│   ├── 1er_virus.png
│   ├── 2._Le_premier_ordinateur_(ENIAC,_1946).jpg
│   ├── Ada.png
│   ├── Ada2.png
│   ├── AI.jpeg
│   ├── AI_conference.jpeg
│   ├── AI_improvement.jpeg
│   ├── AI_research.jpeg
│   ├── AI_robotics.jpeg
│   ├── Alan_Turing_pic.jpeg
│   ├── Alan_Turing_tech.jpg
│   ├── Apple_logo.png
│   ├── C._Babbage.png
│   ├── Charles_Babbage.png
│   ├── Chateau_server.png
│   ├── First_PC.jpg
│   ├── G._Hopper.png
│   ├── github.png
│   ├── Grace_Hopper.png
│   ├── Holograme.png
│   ├── icon.png
│   ├── license.jpeg
│   ├── Parchemin_LAN.jpg
│   ├── Parchemin_pour_binaire.jpg
│   ├── Python.jpg
│   ├── URL.jpg
│   ├── Ville_connect.png
│   ├── Virus.jpg
│   ├── VR.jpg
│   └── VR2.jpg
├── index.html
├── scripts
│   ├── no-mobile.js
│   └── script.js
└── styles
    └── style.css


Made with TreeGenerator@1.2.0
```

- **images/** : Contient les images utilisées pour les fonds de questions et autres visuels.
- **index.html** : Le fichier HTML principal pour l’interface utilisateur.
- **scripts/script.js** : Contient le JavaScript principal pour la gestion des questions et des réponses.
- **styles/style.css** : Le fichier CSS pour le design et la mise en page.
- **scripts/no-mobile.js** : Affiche un avertissement si on se situe sur mobile.

## Fonctionnalités

TechQuest offre une série de fonctionnalités interactives :

- **Questions à Choix Multiples (MCQ)** : L’utilisateur doit choisir la bonne réponse parmi plusieurs options.
- **Glisser-Déposer (Drag and Drop)** : L’utilisateur associe des éléments en les faisant glisser dans les bonnes zones de réponse.
- **Vrai/Faux** : L’utilisateur doit répondre par "Vrai" ou "Faux" à des affirmations.
- **Compléter les blancs** : L’utilisateur complète les blancs dans des phrases.
- **Correspondance (Match)** : L’utilisateur associe des termes à leurs définitions ou concepts.

### Logique de score

Les utilisateurs gagnent des points en fonction du temps qu'il leur reste lorsqu'ils répondent correctement à une question. Le temps est décompté à partir de 20 secondes et les points sont calculés en fonction du temps restant multiplié par un facteur.

- **Points par seconde** : 5 points.
- **Points minimum** : 2 points (en cas de réponse rapide mais incorrecte).
  
Le score final est affiché à la fin du quiz et est envoyé à un serveur pour mise à jour du classement.

## Code de fonctionnement

### Variables principales

- `questions` : Tableau contenant les questions du quiz. Chaque question a plusieurs propriétés, telles que le type de question (`mcq`, `truefalse`, `fill`, etc.), le texte de la question, les réponses possibles, et les images associées à la question.
- `score` : Variable qui garde une trace du score total de l'utilisateur.
- `timeRemaining` : Variable qui suit le temps restant pour répondre à chaque question.
- `questionIndex` : Index de la question en cours.

### Déroulement du quiz

1. **Initialisation** : L’utilisateur commence par entrer un pseudonyme. Ensuite, il voit les instructions et peut commencer le quiz.
2. **Questions** : Chaque question est affichée en fonction de son type (MCQ, vrai/faux, etc.). L'utilisateur interagit avec l'interface pour répondre.
3. **Timer** : Un timer est lancé pour chaque question. Les points sont attribués en fonction du temps restant.
4. **Fin du quiz** : Après toutes les questions, l’utilisateur voit son score final et peut accéder au tableau des scores.

### Exemple de code pour afficher une question

```javascript
function displayMCQ(question) {
    question.options.forEach((option, index) => {
        let optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;

        optionElement.addEventListener('click', () => {
            selectOption(index);
        });

        document.getElementById('question-content').appendChild(optionElement);
    });
}
```

Ce code génère des éléments HTML pour chaque option de réponse d'une question à choix multiples. L'utilisateur peut sélectionner une option et l'interface réagira en conséquence.

### Envoi des scores

Une fois le quiz terminé, les scores sont envoyés à un serveur externe via une requête `fetch` :

```javascript
function submitScore(username, points) {
    fetch(`https://techquest.work/api/leaderboard.php?username=${encodeURIComponent(username)}&points=${points}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                displayLeaderboard(data.top_players, data.current_player);
            } else {
                console.error(data.error);
            }
        })
        .catch(error => console.error('Error:', error));
}
```

### Classement des joueurs

À la fin du quiz, un tableau des scores est affiché avec les joueurs les mieux classés. Si l'utilisateur se classe parmi les meilleurs, une animation spéciale (comme des emojis qui tombent) est lancée.

## FAQ

### Pourquoi mon score ne s'affiche-t-il pas correctement ?

Vérifiez que votre navigateur accepte les cookies et que la requête pour envoyer le score au serveur aboutit sans erreur.

### Peut-on ajouter plus de questions ?

Oui, vous pouvez ajouter de nouvelles questions dans le tableau `questions`. Chaque question doit suivre le format de l'exemple donné pour fonctionner correctement.

### Où puis-je voir les scores des autres joueurs ?

Les scores sont affichés à la fin du quiz, dans le classement des meilleurs joueurs. Si vous avez un bon score, vous serez en tête du classement !

## Contribuer

Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt, créer une nouvelle branche, et soumettre une pull request avec vos améliorations ou ajouts de fonctionnalités.

### Étapes pour contribuer :
1. Forkez ce dépôt.
2. Créez une branche pour vos modifications (`git checkout -b feature-xyz`).
3. Faites vos modifications et commitez (`git commit -am 'Ajout de XYZ'`).
4. Poussez vos modifications sur votre fork (`git push origin feature-xyz`).
5. Ouvrez une pull request et décrivez vos changements.

---

Merci d'avoir exploré **TechQuest** ! Amusez-vous bien et bonne chance dans le quiz ! 🎮💻
