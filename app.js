//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById('overlay');
const letter = document.getElementsByClassName('letter');
let missed = 0;
let boardPhrase;

const phrases = [
    'may the force be with you',
    'ill be back',
    'houston we have a problem',
    'just keep swimming',
    'to infinity and beyond'
]


//Hide overlay to start game
startBtn[0].addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Functions

//Get random phrase from phrases array
function getRandomPhraseAsArray(arr) {
    let min = 0;
    let max = arr.length;
    index = Math.floor(Math.random() * (max - min)) + min;
    return arr[index];
}

//Add random phrase to display
function addPhraseToDisplay(arr) {
    const boardLetters = [arr];
    for (let i = 0; i < arr.length; i++) {
        const ul = document.querySelector('#phrase ul');
        const li = document.createElement('li');
        li.textContent = arr[i];
        if (li.textContent === ' ') {
            li.classList.add('space');
        } else {
            li.classList.add('letter');
            boardLetters.push(arr[i]);
        }
        ul.append(li); 
    }
}

//Check for letters 
qwerty.addEventListener('click', (e) => {
    if (e.target. === 'BUTTON') {
        console.log('true');
    }
});


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);