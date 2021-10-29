//Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName("btn__reset");
const overlay = document.getElementById('overlay');
const title = document.getElementsByClassName('title');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('space');
const tries = document.getElementsByClassName('tries');
let missed = 0;
const boardLetters = [];
const showClass = [];
const phrases = [
    'may the force be with you',
    'ill be back',
    'houston we have a problem',
    'just keep swimming', 
    'et phone home',
    'youre killin me smalls',
    'you had me at hello',
    'youre gonna need a bigger boat',
    'i see dead people',
    'nobody puts baby in a corner',
    'im the king of the world'
]



//Get random phrase from phrases array
function getRandomPhraseAsArray(arr) {
    let min = 0;
    let max = arr.length;
    index = Math.floor(Math.random() * (max - min)) + min;
    return arr[index];
}

const ul = document.querySelector('#phrase ul');
//Add random phrase to display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
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
function checkLetter(event) {
    let letterFound = null;
    for (let i = 0; i < letter.length; i++) {
        if (event.target.textContent === letter[i].textContent) {
            letter[i].classList.add('show');
            showClass.push(letter[i]);
            letterFound = true;
        }
    }
    return letterFound;
}



//Check win
function checkWin() {
    if (boardLetters.length === showClass.length) {
        overlay.classList.add('win')
        title[0].textContent = 'Congrats! You Won!';
        overlay.style.display = 'flex';
        resetGame();
    } else if (missed > 4) {
        overlay.classList.add('lose');
        title[0].textContent = 'Sorry, you lost';
        overlay.style.display = 'flex';
        resetGame();
    }
}


//Hide overlay to start game
btnReset[0].addEventListener('click', () => {
    overlay.style.display = 'none';
    createBoard();
});

//Create board
function createBoard() {
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
    ul.style.textTransform = 'capitalize';
}

//Reset Game
function resetGame() {
    btnReset[0].textContent = 'Play Again';
    //rewstore lives
    missed = 0;
    for (let i = 0; i < tries.length; i++) {
        tries[i].firstChild.src = 'images/liveHeart.png';
    }
    //reset letters
    const button = document.getElementsByTagName('button');
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('chosen');
        button[i].disabled = false;
    }
    //clear board
    ul.innerHTML = '';
    boardLetters.length = 0;
    showClass.length = 0;
}

//Game loop
qwerty.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.classList.add('chosen');    
        event.target.disabled = true;
        if (checkLetter(event) === null) {
            tries[missed].firstChild.src = 'images/lostHeart.png';
            missed++;
        }
    }
    checkWin();
});

