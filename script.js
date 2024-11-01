let questions = [
    {
        type: 'dragdrop',
        question: 'Associez chaque inventeur avec son invention ou contribution :',
        items: [
            'Machine de Turing',
            'Machine analytique',
            'Premier algorithme',
            'Compilateur COBOL'
        ],
        answer: [
            'Alan Turing',
            'Charles Babbage',
            'Ada Lovelace',
            'Grace Hopper'
        ]
    },
    {
        type: 'fill',
        question: 'Complétez la phrase suivante : L\'ENIAC est considéré comme le premier ordinateur ___, et a été créé en ___ aux États-Unis.',
        answer: ['électronique', '1945']
    },
    {
        type: 'mcq',
        question: 'Quel est le nom du premier ordinateur électronique programmable, créé pendant la Seconde Guerre mondiale ?',
        options: ['ENIAC', 'Altair 8800', 'Apple I', 'Z3'],
        answer: 0
    },
    {
        type: 'dragdrop',
        question: 'Associez chaque concept à sa période historique ou futuriste :',
        items: [
            'Années 1940',
            'Années 1970',
            'Futur',
            'Moyen Âge imaginaire'
        ],
        answer: [
            'ENIAC',
            'Altair 8800',
            'Hologrammes',
            'Serveurs en pierre médiévaux'
        ]
    },
    {
        type: 'mcq',
        question: 'Qui est considéré comme le premier programmeur de l\'histoire ?',
        options: ['Alan Turing', 'Charles Babbage', 'Ada Lovelace', 'Grace Hopper'],
        answer: 2
    },
    {
        type: 'mcq',
        question: 'En quelle année a été lancé le premier ordinateur personnel, l\'Altair 8800 ?',
        options: ['1970', '1975', '1980', '1985'],
        answer: 1
    },
    {
        type: 'fill',
        question: 'Complétez l’image : légendez l’URL en indiquant les parties manquantes (schéma d’URL montrant les parties “protocole”, “domaine”, “sous-domaine”, “chemin”).',
        answer: ['Protocole', 'Domaine', 'Sous-domaine', 'Chemin']
    },
    {
        type: 'dragdrop',
        question: 'Associez chaque système d’exploitation avec son logo :',
        items: [
            'Logo de Microsoft',
            'Logo d\'Apple',
            'Logo de Tux',
            'Logo du robot vert'
        ],
        answer: [
            'Windows',
            'macOS',
            'Linux',
            'Android'
        ]
    },
    {
        type: 'mcq',
        question: 'Quel système d\'exploitation est symbolisé par une pomme ?',
        options: ['Windows', 'macOS', 'Linux', 'MS-DOS'],
        answer: 1
    },
    {
        type: 'mcq',
        question: 'En quelle année le premier ordinateur Macintosh a-t-il été commercialisé ?',
        options: ['1980', '1984', '1990', '1995'],
        answer: 1
    },
    {
        type: 'mcq',
        question: 'Quel était le nom du premier virus informatique connu ?',
        options: ['Creeper', 'Worm', 'Trojan', 'Backdoor'],
        answer: 0
    },
    {
        type: 'match',
        question: 'Associez les termes suivants avec leur définition :',
        pairs: [
            { left: 'Machine virtuelle', right: 'Simule un ordinateur dans un autre ordinateur' },
            { left: 'OS', right: 'Système permettant à un ordinateur de fonctionner' },
            { left: 'Licence logicielle', right: 'Droit d\'utilisation d\'un logiciel' },
            { left: 'IA', right: 'Technologie permettant aux machines d\'apprendre' }
        ]
    },
    {
        type: 'mcq',
        question: 'Quel langage de programmation est associé à un serpent ?',
        options: ['COBOL', 'Java', 'Python', 'Perl'],
        answer: 2
    },
    {
        type: 'mcq',
        question: 'Comment appelle-t-on les "sous-parties" d\'une URL ?',
        options: ['Extensions', 'Protocoles', 'Nœuds', 'Domaines'],
        answer: 3
    },
    {
        type: 'mcq',
        question: 'Dans l\'intelligence artificielle, quel terme désigne les algorithmes permettant d\'apprendre des données ?',
        options: ['Data mining', 'Machine learning', 'Deep learning', 'Neural coding'],
        answer: 1
    },
    {
        type: 'fill',
        question: 'Complétez la phrase : L’intelligence artificielle se base sur des algorithmes capables de ___ à partir des données, et d\'___ leur performance.',
        answer: ['d’apprendre', 'd’améliorer']
    },
    {
        type: 'mcq',
        question: 'Quel est le nom de la conférence de 1956 qui est considérée comme le point de départ de la recherche en intelligence artificielle ?',
        options: ['Turing Conference', 'Dartmouth Workshop', 'MIT AI Symposium', 'Stanford AI Lab'],
        answer: 1
    },
    {
        type: 'match',
        question: 'Reliez chaque concept à sa période :',
        pairs: [
            { left: 'Machine de Babbage', right: 'Mécanique' },
            { left: 'ENIAC', right: 'Première génération d\'ordinateurs' },
            { left: 'Python', right: 'Langage moderne' },
            { left: 'IA et robotique', right: 'Technologies avancées' }
        ]
    },
    {
        type: 'mcq',
        question: 'Quel terme désigne un logiciel protégé par des droits d’utilisation ?',
        options: ['Partagiciel', 'Licence', 'Open Source', 'Freeware'],
        answer: 1
    },
    {
        type: 'mcq',
        question: 'Quel était l’objectif principal des premières recherches en IA ?',
        options: ['Aider les humains dans leurs tâches', 'Remplacer l’homme dans toutes ses tâches', 'Créer des machines autonomes', 'Développer un superordinateur'],
        answer: 0
    }
];


let username = '';
let score = 0;
let questionIndex = 0;
let timer;
let pointsPerSecond = 5;
let minPoints = 2;
let timeRemaining = 45;

function startQuiz() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('pseudo-page').style.display = 'none';
        document.getElementById('instructions-page').style.display = 'block';
    } else {
        alert("Veuillez entrer un pseudo !");
    }
}

function showQuestion() {
    document.getElementById('instructions-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    clearTimeout(timer);
    document.getElementById('question-content').innerHTML = '';
    timeRemaining = 10;
    document.getElementById('timer').innerText = `Temps restant : ${timeRemaining}s`;

    if (questionIndex < questions.length) {
        let question = questions[questionIndex];
        document.getElementById('question-title').innerText = question.question;

        if (question.type === 'mcq') {
            displayMCQ(question);
        } else if (question.type === 'fill') {
            displayFillInTheBlank(question);
        } else if (question.type === 'match') {
            displayMatching(question);
        } else if (question.type === 'dragdrop') {
            displayDragAndDrop(question);
        }

        startTimer();
    } else {
        endQuiz();
    }
}

function displayMCQ(question) {
    question.options.forEach((option, index) => {
        let optionElement = document.createElement('div');
        optionElement.classList.add('option');

        let radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'mcq';
        radioInput.value = index;

        optionElement.appendChild(radioInput);

        let label = document.createElement('label');
        label.innerText = option;
        optionElement.appendChild(label);

        document.getElementById('question-content').appendChild(optionElement);
    });
}


function displayFillInTheBlank(question) {
    question.answer.forEach((_, index) => {
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Réponse ${index + 1}`;
        input.classList.add('fill-blank');
        document.getElementById('question-content').appendChild(input);
    });
}

function displayMatching(question) {
    let leftColumn = document.createElement('div');
    leftColumn.classList.add('match-column');

    let rightColumn = document.createElement('div');
    rightColumn.classList.add('match-column');

    question.pairs.forEach((pair, index) => {
        let leftItem = document.createElement('div');
        leftItem.classList.add('match-item');
        leftItem.innerText = pair.left;
        leftColumn.appendChild(leftItem);

        let rightItem = document.createElement('select');
        rightItem.classList.add('match-select');
        rightItem.dataset.index = index;
        question.pairs.forEach(option => {
            let optionElement = document.createElement('option');
            optionElement.value = option.right;
            optionElement.text = option.right;
            rightItem.appendChild(optionElement);
        });
        rightColumn.appendChild(rightItem);
    });

    document.getElementById('question-content').appendChild(leftColumn);
    document.getElementById('question-content').appendChild(rightColumn);
}

function displayDragAndDrop(question) {
    let dropZone = document.createElement('div');
    dropZone.classList.add('drop-zone');

    question.items.forEach(item => {
        let dragItem = document.createElement('div');
        dragItem.classList.add('drag-item');
        dragItem.innerText = item;
        dragItem.setAttribute('draggable', 'true');
        dragItem.addEventListener('dragstart', dragStart);
        dropZone.appendChild(dragItem);
    });

    let answerZone = document.createElement('div');
    answerZone.classList.add('answer-zone');

    question.answer.forEach(answer => {
        let dropTarget = document.createElement('div');
        dropTarget.classList.add('drop-target');
        dropTarget.addEventListener('dragover', dragOver);
        dropTarget.addEventListener('drop', drop);
        
        let label = document.createElement('span');
        label.innerText = `Déposer ici pour ${answer}`;
        dropTarget.appendChild(label);

        answerZone.appendChild(dropTarget);
    });

    document.getElementById('question-content').appendChild(dropZone);
    document.getElementById('question-content').appendChild(answerZone);
}


function dragStart(event) {
    event.dataTransfer.setData('text', event.target.innerText);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    event.target.innerText = data;
}

function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById('timer').innerText = `Temps restant : ${timeRemaining}s`;
        } else {
            clearInterval(timer);
            document.getElementById('timer').innerText = 'Temps écoulé ! Vous pouvez encore répondre.';
        }
    }, 1000);
}

function nextQuestion() {
    let question = questions[questionIndex];
    let pointsEarned = timeRemaining * pointsPerSecond;

    if (question.type === 'mcq') {
        checkMCQAnswer(question);
    } else if (question.type === 'fill') {
        checkFillAnswer(question);
    } else if (question.type === 'match') {
        checkMatchAnswer(question);
    } else if (question.type === 'dragdrop') {
        if (checkDragAndDropAnswer(question)) {
            pointsEarned = Math.max(pointsEarned, minPoints);
            score += pointsEarned;
        }
    }

    questionIndex++;
    displayQuestion();
}

function checkMCQAnswer(question) {
    let selectedOption = document.querySelector('input[name="mcq"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === question.answer) {
        score += Math.max(timeRemaining * pointsPerSecond, minPoints);
    }
}

function checkFillAnswer(question) {
    let inputs = document.querySelectorAll('.fill-blank');
    let correct = true;
    inputs.forEach((input, index) => {
        if (input.value.trim().toLowerCase() !== question.answer[index].toLowerCase()) {
            correct = false;
        }
    });
    if (correct) score += Math.max(timeRemaining * pointsPerSecond, minPoints);
}

function checkMatchAnswer(question) {
    let correct = true;
    let selects = document.querySelectorAll('.match-select');
    selects.forEach((select, index) => {
        if (select.value !== question.pairs[index].right) {
            correct = false;
        }
    });
    if (correct) score += Math.max(timeRemaining * pointsPerSecond, minPoints);
}

function checkDragAndDropAnswer(question) {
    let correct = true;
    let dropTargets = document.querySelectorAll('.drop-target');
    dropTargets.forEach((target, index) => {
        if (target.innerText.trim() !== question.answer[index]) {
            correct = false;
        }
    });
    return correct;
}

function endQuiz() {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('end-page').style.display = 'block';
    document.getElementById('final-score').innerText = `Votre score : ${score}`;
}

function sendScore() {
    fetch(`api/leaderboard.php?username=${username}&points=${score}`)
        .then(response => response.text())
        .then(data => alert('Score envoyé avec succès !'))
        .catch(error => alert('Erreur d\'envoi du score'));
}
