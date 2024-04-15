// <<=== All Variable Declarations  ===>>

const content = document.querySelector('#content');
let btn = document.querySelector('#btn');
let sound = new Audio('css/assets/fart.mp3');

let counter1 = document.querySelector('#counter1');
let counter2 = document.querySelector('#counter2');
let counter3 = document.querySelector('#counter3');
let counter4 = document.querySelector('#counter4');
let counter5 = document.querySelector('#counter5');

let newButton7Created = false;
let newButton8Created = false;
let newButton9Created = false;
let newButton10Created = false;
let newButton11Created = false;

let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;

let newButton1;
let newButton2;
let newButton3;
let newButton4;
let newButton5;
let newButton6;
let newButton7;
let newButton8;
let newButton9;
let newButton10;
let newButton11;
let newButton12;

// <<=== All Function Declarations  ===>>


function onClick() {
    warning.style.display = 'none';
    btn.style.display = 'none';
    content.style.color = 'white';
    content.style.fontSize = '30px';
    content.style.fontWeight = 'bold';
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

    document.body.style.backgroundImage = 'url(css/assets/jars.png)';
    document.body.style.backgroundSize = 'cover';

    newButton1.addEventListener('click', ChocolateChip);
    newButton2.addEventListener('click', SugarCookie);
    newButton3.addEventListener('click', OatmealCookie);
    newButton4.addEventListener('click', CookieDough);
    newButton5.addEventListener('click', PeanutButterCookie);
}

function ChocolateChip() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton1.innerHTML = '';
    newButton1.style.backgroundImage = 'url(css/assets/chocolateChip.png)';
    newButton1.style.backgroundSize = 'cover';
    newButton1.style.width = '250px';
    newButton1.style.height = '250px';
    newButton1.style.border = 'none';
    newButton1.style.outline = 'none';
    newButton1.style.borderRadius = '50%';
    newButton1.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    if (clickCount1 > 14) {
        newButton1.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        document.body.style.backgroundImage = 'url(css/assets/bed.png)';
        document.body.style.backgroundSize = 'cover';
    }
    newButton1.addEventListener('click', ccScore);
    newButton6.addEventListener('click', reload);
    
}

function SugarCookie() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton2.innerHTML = '';
    newButton2.style.backgroundImage = 'url(css/assets/sugar.png)';
    newButton2.style.backgroundSize = 'cover';
    newButton2.style.width = '250px';
    newButton2.style.height = '250px';
    newButton2.style.border = 'none';
    newButton2.style.outline = 'none';
    newButton2.style.borderRadius = '50%';
    newButton2.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    if (clickCount2 > 14) {
        newButton2.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        document.body.style.backgroundImage = 'url(css/assets/bed.png)';
    }
    newButton2.addEventListener('click', scScore);
    newButton6.addEventListener('click', reload);
}

function OatmealCookie() {  
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton3.innerHTML = '';
    newButton3.style.backgroundImage = 'url(css/assets/oatmeal.png)';
    newButton3.style.backgroundSize = 'cover';
    newButton3.style.width = '250px';
    newButton3.style.height = '250px';
    newButton3.style.border = 'none';
    newButton3.style.outline = 'none';
    newButton3.style.borderRadius = '50%';
    newButton3.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton4.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    if (clickCount3 > 14) {
        newButton3.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        document.body.style.backgroundImage = 'url(css/assets/bed.png)';
    }
    newButton3.addEventListener('click', ocScore);
    newButton6.addEventListener('click', reload);
}

function CookieDough() {
    content.innerHTML = 'Click the dough as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton4.innerHTML = '';
    newButton4.style.backgroundImage = 'url(css/assets/dough.png)';
    newButton4.style.backgroundSize = 'cover';
    newButton4.style.width = '250px';
    newButton4.style.height = '250px';
    newButton4.style.border = 'none';
    newButton4.style.outline = 'none';
    newButton4.style.borderRadius = '50%';
    newButton4.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton5.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    if (clickCount4 > 14) {
        newButton4.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        document.body.style.backgroundImage = 'url(css/assets/bed.png)';
    }
    newButton4.addEventListener('click', cdScore);
    newButton6.addEventListener('click', reload);
}

function PeanutButterCookie() {
    content.innerHTML = 'Click the Cookie as fast as you can for 10 seconds!!';
    content.style.display = 'flex';
    newButton5.innerHTML = '';
    newButton5.style.backgroundImage = 'url(css/assets/peanut.png)';
    newButton5.style.backgroundSize = 'cover';
    newButton5.style.width = '250px';
    newButton5.style.height = '250px';
    newButton5.style.border = 'none';
    newButton5.style.outline = 'none';
    newButton5.style.borderRadius = '50%';
    newButton5.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.5)';
    newButton1.style.display = 'none';
    newButton2.style.display = 'none';
    newButton3.style.display = 'none';
    newButton4.style.display = 'none';
    newButton6 = document.createElement('button');
    newButton6.innerHTML = 'Try again?';
    newButton6.classList.add('tryAgain');
    document.body.appendChild(newButton6);
    if (clickCount5 > 14) {
        newButton5.style.display = 'none';
        content.innerHTML = 'You ate too many cookies and now you are sick!';
        document.body.style.backgroundImage = 'url(css/assets/bed.png)';
    }
    newButton5.addEventListener('click', cdScore);
    newButton6.addEventListener('click', reload);
}

setInterval(function() {
    if (clickCount1 > 14 && !newButton7Created) {
        newButton7 = document.createElement('button');
        document.body.appendChild(newButton7);
        newButton7.innerHTML = '';
        newButton7.style.backgroundImage = 'url(css/assets/vomit.png)';
        newButton7.style.width = '250px';
        newButton7.style.height = '250px';
        newButton7.style.backgroundSize = 'cover';
        newButton7.style.textAlign = 'center';
        newButton7.style.alignItems = 'center';
        newButton7.style.color = 'white';
        newButton7.style.display = 'flex';
        newButton7.style.fontSize = '50px';
        newButton7.style.fontWeight = 'bold';
        newButton7.style.border = 'none';
        newButton7.style.outline = 'none';
        newButton7.style.borderRadius = '50%';
        newButton7Created = true;
    }
    if (clickCount2 > 14 && !newButton8Created) {
        newButton8 = document.createElement('button');
        document.body.appendChild(newButton8);
        newButton8.innerHTML = '';
        newButton8.style.backgroundImage = 'url(css/assets/vomit.png)';
        newButton8.style.width = '250px';
        newButton8.style.height = '250px';
        newButton8.style.backgroundSize = 'cover';
        newButton8.style.textAlign = 'center';
        newButton8.style.alignItems = 'center';
        newButton8.style.color = 'white';
        newButton8.style.display = 'flex';
        newButton8.style.fontSize = '50px';
        newButton8.style.fontWeight = 'bold';
        newButton8.style.border = 'none';
        newButton8.style.outline = 'none';
        newButton8.style.borderRadius = '50%';
        newButton8Created = true;
    }
    if (clickCount3 > 14 && !newButton9Created) {
        newButton9 = document.createElement('button');
        document.body.appendChild(newButton9);
        newButton9.innerHTML = '';
        newButton9.style.backgroundImage = 'url(css/assets/vomit.png)';
        newButton9.style.width = '250px';
        newButton9.style.height = '250px';
        newButton9.style.backgroundSize = 'cover';
        newButton9.style.textAlign = 'center';
        newButton9.style.alignItems = 'center';
        newButton9.style.color = 'white';
        newButton9.style.display = 'flex';
        newButton9.style.fontSize = '50px';
        newButton9.style.fontWeight = 'bold';
        newButton9.style.border = 'none';
        newButton9.style.outline = 'none';
        newButton9.style.borderRadius = '50%';
        newButton9Created = true;
    }
    if (clickCount4 > 14 && !newButton10Created) {
        newButton10 = document.createElement('button');
        document.body.appendChild(newButton10);
        newButton10.innerHTML = '';
        newButton10.style.backgroundImage = 'url(css/assets/vomit.png)';
        newButton10.style.width = '250px';
        newButton10.style.height = '250px';
        newButton10.style.backgroundSize = 'cover';
        newButton10.style.textAlign = 'center';
        newButton10.style.alignItems = 'center';
        newButton10.style.color = 'white';
        newButton10.style.display = 'flex';
        newButton10.style.fontSize = '50px';
        newButton10.style.fontWeight = 'bold';
        newButton10.style.border = 'none';
        newButton10.style.outline = 'none';
        newButton10.style.borderRadius = '50%';
        newButton10Created = true;
    }
    if (clickCount5 > 14 && !newButton11Created) {
        newButton11 = document.createElement('button');
        document.body.appendChild(newButton11);
        newButton11.innerHTML = '';
        newButton11.style.backgroundImage = 'url(css/assets/vomit.png)';
        newButton11.style.width = '250px';
        newButton11.style.height = '250px';
        newButton11.style.backgroundSize = 'cover';
        newButton11.style.textAlign = 'center';
        newButton11.style.alignItems = 'center';
        newButton11.style.color = 'white';
        newButton11.style.display = 'flex';
        newButton11.style.fontSize = '50px';
        newButton11.style.fontWeight = 'bold';
        newButton11.style.border = 'none';
        newButton11.style.outline = 'none';
        newButton11.style.borderRadius = '50%';
        newButton11Created = true;
    }
}, 1000);

function ccScore() {
    clickCount1++;
    counter1.innerHTML = clickCount1;
    counter1.display = 'flex';
    counter1.style.color = 'white';
    counter1.style.fontSize = '30px';
    counter1.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    document.body.appendChild(counter1);
}

function scScore() {
    clickCount2++;
    counter2.innerHTML = clickCount2;
    counter2.display = 'flex';
    counter2.style.color = 'white';
    counter2.style.fontSize = '30px';
    counter2.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    document.body.appendChild(counter2);
}

function ocScore() {
    clickCount3++;
    counter3.innerHTML = clickCount3;
    counter3.display = 'flex';
    counter3.style.color = 'white';
    counter3.style.fontSize = '30px';
    counter3.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    document.body.appendChild(counter3);
}

function cdScore() {
    clickCount4++;
    counter4.innerHTML = clickCount4;
    counter4.display = 'flex';
    counter4.style.color = 'white';
    counter4.style.fontSize = '30px';
    counter4.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    document.body.appendChild(counter4);
}

function pbScore() {
    clickCount5++;
    counter5.innerHTML = clickCount5;
    counter5.display = 'flex';
    counter5.style.color = 'white';
    counter5.style.fontSize = '30px';
    counter5.style.fontWeight = 'bold'
    newButton6.style.display = 'none';
    document.body.appendChild(counter5);
}

function reload() {
    location.reload();
}

// <<=== All Event Listeners  ===>>

btn.addEventListener('click', onClick);
btn.addEventListener('click', function() {
    sound.play();
});
