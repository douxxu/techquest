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
        question: 'Complétez: L\'ENIAC est considéré comme le premier ordinateur ___, et a été créé en ___ aux États-Unis.',
        answer: ['fabriqué', '1945']
    },
    {
        type: 'truefalse',
        question: 'Le premier ordinateur électronique programmable créé pendant la Seconde Guerre mondiale est l\'ENIAC.',
        answer: true
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
        type: 'truefalse',
        question: 'Ada Lovelace est considérée comme la première programmeuse de l\'histoire.',
        answer: true
    },
    {
        type: 'mcq',
        question: 'En quelle année a été lancé le premier ordinateur personnel, l\'Altair 8800 ?',
        options: ['1970', '1975', '1980', '1985'],
        answer: 1
    },
    {
        type: 'fill',
        question: 'Complétez : légendez l’URL en indiquant les parties manquantes.\nhttps://___.___/___',
        answer: ['domaine', 'extension', 'chemin']
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
        type: 'truefalse',
        question: 'Le système d\'exploitation symbolisé par une pomme est macOS.',
        answer: true
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
        question: 'Complétez: L’intelligence artificielle se base sur des algorithmes capables de ___ à partir des données, et d\'___ leur performance.',
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
        question: 'Associez chaque concept à sa période :',
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
let timeRemaining = 20;

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
        } else if (question.type === 'truefalse') {
            displayTrueFalse(question);
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
        optionElement.textContent = option;

        optionElement.addEventListener('click', () => {
            selectOption(index);
        });

        document.getElementById('question-content').appendChild(optionElement);
    });
}

let selectedOption = null;

function selectOption(index) {
    if (selectedOption !== null) {
        const previouslySelected = document.querySelector('.option.selected');
        if (previouslySelected) {
            previouslySelected.classList.remove('selected');
        }
    }

    selectedOption = index;
    const currentSelected = document.querySelectorAll('.option')[index];
    currentSelected.classList.add('selected');
}


function displayFillInTheBlank(question) {
    let questionContainer = document.createElement('div');
    questionContainer.classList.add('question-text');

    let questionText = question.question;

    question.answer.forEach((_, index) => {
        questionText = questionText.replace('___', `<span class="inline-input"><input type="text" placeholder="Réponse ${index + 1}" class="fill-blank"></span>`);
    });

    questionContainer.innerHTML = questionText;

    document.getElementById('question-content').appendChild(questionContainer);
}


function displayMatching(question) {
    let matchContainer = document.createElement('div');
    matchContainer.classList.add('match-container');

    question.pairs.forEach((pair, index) => {
        let pairContainer = document.createElement('div');
        pairContainer.classList.add('pair-container');

        let leftItem = document.createElement('div');
        leftItem.classList.add('match-bubble');
        leftItem.innerText = pair.left;

        let rightItem = document.createElement('select');
        rightItem.classList.add('match-select');
        rightItem.dataset.index = index;

        question.pairs.forEach(option => {
            let optionElement = document.createElement('option');
            optionElement.value = option.right;
            optionElement.text = option.right;
            rightItem.appendChild(optionElement);
        });

        pairContainer.appendChild(leftItem);
        pairContainer.appendChild(rightItem);
        matchContainer.appendChild(pairContainer);
    });

    document.getElementById('question-content').appendChild(matchContainer);
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
        label.innerText = `${answer}`;
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
    event.target.classList.add('filled');
    let dragItems = document.querySelectorAll('.drag-item');
    dragItems.forEach(item => {
        if (item.innerText === data) {
            item.style.visibility = 'hidden';
        }
    });
}

function displayTrueFalse(question) {
    const trueFalseContainer = document.createElement('div');
    trueFalseContainer.classList.add('true-false-container');

    const trueButton = document.createElement('button');
    trueButton.classList.add('true-button');
    trueButton.textContent = 'Vrai';
    trueButton.addEventListener('click', () => {
        checkTrueFalseAnswer(true);
    });

    const falseButton = document.createElement('button');
    falseButton.classList.add('false-button');
    falseButton.textContent = 'Faux';
    falseButton.addEventListener('click', () => {
        checkTrueFalseAnswer(false);
    });

    trueFalseContainer.appendChild(trueButton);
    trueFalseContainer.appendChild(falseButton);
    document.getElementById('question-content').appendChild(trueFalseContainer);
}

function checkTrueFalseAnswer(selectedAnswer) {
    const question = questions[questionIndex];
    if (selectedAnswer === question.answer) {
        score += Math.max(timeRemaining * pointsPerSecond, minPoints);
    }
    nextQuestion();
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
    clearTimeout(timer);
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('end-page').style.display = 'block';
    document.getElementById('final-score').innerText = `Votre score : ${score}`;
    
    submitScore(username, Math.floor(score));
}


function submitScore(username, points) {
    fetch(`api/leaderboard.php?username=${encodeURIComponent(username)}&points=${points}`)
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


function displayLeaderboard(topPlayers, currentPlayer) {
    const leaderboardContainer = document.getElementById('leaderboard');
    leaderboardContainer.innerHTML = '';


    const table = document.createElement('table');
    
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Rang</th><th>Joueur</th><th>Score</th>';
    table.appendChild(headerRow);

    topPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        if (index === 0) {
            row.classList.add('gold');
        } else if (index === 1) {
            row.classList.add('silver');
        } else if (index === 2) {
            row.classList.add('bronze');
        } else if (index === 3) {
            row.classList.add('blurple');
        } else if (index === 4) {
            row.classList.add('purple');
        }

        row.innerHTML = `<td>${index + 1}</td><td>${player.username}</td><td>${player.points}</td>`;
        table.appendChild(row);
    });

    leaderboardContainer.appendChild(table);

    if (currentPlayer.rank === 1) {
        startEmojiFall();
    }
}

function startEmojiFall() {
    const emojiCount = 100;
    const duration = 7000;
    const containerHeight = window.innerHeight;

    for (let i = 0; i < emojiCount; i++) {
        const randomDelay = Math.random() * duration;
        setTimeout(() => {
            createFallingEmoji(containerHeight);
        }, randomDelay);
    }
}

function createFallingEmoji(containerHeight) {
    const emoji = document.createElement('div');
    emoji.innerHTML = '🎉';
    emoji.classList.add('falling-emojis');
    document.body.appendChild(emoji);

    const startX = Math.random() * window.innerWidth;
    emoji.style.left = `${startX}px`;
    emoji.style.top = `-50px`;

    const randomDuration = 3000 + Math.random() * 3000;
    emoji.style.transition = `top ${randomDuration}ms linear`;
    
    setTimeout(() => {
        emoji.style.top = `${containerHeight}px`;
    }, 10);

    setTimeout(() => {
        emoji.remove();
    }, randomDuration);
}