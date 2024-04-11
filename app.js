// Get the button element
let btn = document.querySelector('#btn');
let newButton;
// Get the content div
const content = document.querySelector('#content');

function onClick() {
    warning.style.display = 'none';
    btn.style.display = 'none';
    content.innerHTML = 'You Win a Cookie!';
    newButton = document.createElement('button');
    newButton.innerHTML = 'Want another one? Play again!';
    newButton.classList.add('play-btn');
    document.body.appendChild(newButton);
    newButton.addEventListener('click', reload);
    document.body.style.backgroundImage = 'url(css/assets/cookies.png)';
}
function reload() {
    location.reload();
}
btn.addEventListener('click', onClick);