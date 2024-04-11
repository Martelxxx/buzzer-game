// Get the button element
let btn = document.querySelector('#btn');
let newButton1;
let newButton2;
let newButton3;
let newButton4;
let newButton5;
let newButton6;

// Get the content div
const content = document.querySelector('#content');

function onClick() {
    warning.style.display = 'none';
    btn.style.display = 'none';
    content.innerHTML = 'What kind of Cookie do you want?';
    content.style.display = 'flex';
    newButton1 = document.createElement('button');
    newButton1.innerHTML = 'Chocolate Chip Cookie';
    newButton1.classList.add('cookie1');
    document.body.appendChild(newButton1);
    
    newButton2 = document.createElement('button');
    newButton2.innerHTML = 'Sugar Cookie';
    newButton2.classList.add('cookie2');
    document.body.appendChild(newButton2)

    newButton3 = document.createElement('button');
    newButton3.innerHTML = 'Oatmeal Cookie';
    newButton3.classList.add('cookie3');
    document.body.appendChild(newButton3)

    newButton4 = document.createElement('button');
    newButton4.innerHTML = 'Cookie Dough';
    newButton4.classList.add('cookie4');
    document.body.appendChild(newButton4)

    newButton5 = document.createElement('button');
    newButton5.innerHTML = 'Peanut Butter Cookie';
    newButton5.classList.add('cookie5');
    document.body.appendChild(newButton5)

    document.body.style.backgroundImage = 'url(css/assets/cookies.png)';

    newButton1.addEventListener('click', ChocolateChip);
    newButton2.addEventListener('click', SugarCookie);
    newButton3.addEventListener('click', OatmealCookie);
    newButton4.addEventListener('click', CookieDough);
    newButton5.addEventListener('click', PeanutButterCookie);
}

function ChocolateChip() {
    content.innerHTML = 'You have chosen the Chocolate Chip Cookie!';
    content.style.display = 'flex';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    newButton6.addEventListener('click', reload);
}

function SugarCookie() {
    content.innerHTML = 'You have chosen the Sugar Cookie!';
    content.style.display = 'flex';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    newButton6.addEventListener('click', reload);
}

function OatmealCookie() {  
    content.innerHTML = 'You have chosen the Oatmeal Cookie!';
    content.style.display = 'flex';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    newButton6.addEventListener('click', reload);
}

function CookieDough() {
    content.innerHTML = 'You have chosen the Cookie Dough!';
    content.style.display = 'flex';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    newButton6.addEventListener('click', reload);
}

function PeanutButterCookie() {
    content.innerHTML = 'You have chosen the Peanut Butter Cookie!';
    content.style.display = 'flex';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    newButton6.addEventListener('click', reload);
}

function reload() {
    location.reload();
}

btn.addEventListener('click', onClick);
