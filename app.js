const bVal = document.getElementById('computer');
const userVal = document.getElementById('userr');
const userpoint = document.getElementById('user-point');
const computerpoint = document.getElementById('computer-point');
const mes =  document.getElementById('message');
let uPoint = 0, cPoint = 0;

function randomGen() {
    let a = Math.ceil(Math.random() * 3);
    
    if (a == 1) {
        bVal.innerHTML = 'Rock';
        bVal.style.backgroundColor = 'red';

    }
    else if (a == 2) {
        bVal.innerHTML = 'Paper';
        bVal.style.backgroundColor = 'rgb(115, 239, 255)';

    }
    else {
        bVal.innerHTML = 'Scissors';
        bVal.style.backgroundColor = 'rgb(148, 148, 148';

    }
}
function r() {
    userVal.innerHTML = 'Rock';
    userVal.style.backgroundColor = 'red';
}
function p() {
    userVal.innerHTML = 'Paper';
    userVal.style.backgroundColor = 'rgb(115, 239, 255)';

}
function s() {
    userVal.innerHTML = 'Scissors';
    userVal.style.backgroundColor = 'rgb(148, 148, 148';
    
}
function match() {
    if ((userVal.innerHTML == 'Rock' && bVal.innerHTML == 'Scissors') || (userVal.innerHTML == 'Paper' && bVal.innerHTML == 'Rock') || (userVal.innerHTML == 'Scissors' && bVal.innerHTML == 'Paper')) {
        uPoint = uPoint + 1;
        mes.innerHTML = 'You Won';
    }
    else if ((bVal.innerHTML == 'Rock' && userVal.innerHTML == 'Scissors') || (bVal.innerHTML == 'Paper' && userVal.innerHTML == 'Rock') || (bVal.innerHTML == 'Scissors' && userVal.innerHTML == 'Paper')) {
        cPoint = cPoint + 1;
        mes.innerHTML = 'Computer Won';
    }
    else {
        uPoint = uPoint + 0;
        cPoint = cPoint + 0;
        mes.innerHTML = 'Draw';
    }
    userpoint.innerHTML = uPoint;
    computerpoint.innerHTML = cPoint;
    if (cPoint === 5) {
        alert('COMPUTER WON THIS ROUND');
        uPoint = 0;
        cPoint = 0;
        userpoint.innerHTML = uPoint;
        computerpoint.innerHTML = cPoint;
        mes.innerHTML = '';
    }
    if (uPoint === 5) {
        alert('YOU WON THIS ROUND!!!!!!!!!');
        uPoint = 0;
        cPoint = 0;
        userpoint.innerHTML = uPoint;
        computerpoint.innerHTML = cPoint;
        mes.innerHTML = '';

    }
}