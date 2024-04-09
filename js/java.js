const like = document.querySelector('.like');
const dislike = document.querySelector('.dislike');
const spisok = document.querySelector('.spisok');
const buttons = document.querySelectorAll('.button_card');
const coordinatesElement = document.querySelector('.coordinates');
const oldList = spisok.querySelector('.ul');
const button_finger = document.querySelector('.button_finger');
const Cartcounter = document.querySelector('.cart-element');
const buttonsArray = Array.from(buttons);

function liking() {
    like.classList.toggle('active');
    if (like.classList.contains('active')) {
        dislike.classList.remove('active');
    }
}

function disliking() {
    dislike.classList.toggle('active');
    if (dislike.classList.contains('active')) {
        like.classList.remove('active');
    }
}
let count = 0;
buttonsArray.map(button => {
    button.addEventListener('click', () => {
        count++;
        Cartcounter.textContent = count;
    });
});
function randomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}

const originalArray = randomArray(7);

function list(array) {
    const ul = document.createElement('ul');
    array.forEach(number => {
        const li = document.createElement('li');
        li.textContent = number;
        ul.appendChild(li);
    });
    const spisok = document.querySelector('.spisok')
    spisok.appendChild(ul)
}

function removeList() {
    const oldList = document.querySelector('ul');
    if (oldList) {
        oldList.remove();
    }
}

function ascending() {
    const sortedArray = [...originalArray].sort((a, b) => a - b);
    removeList();
    list(sortedArray);
}

function descending() {
    const sortedArray = [...originalArray].sort((a, b) => b - a);
    removeList();
    list(sortedArray);
}

function reset() {
    removeList();
    list(originalArray);
}

list(originalArray);
document.getElementById('ascending').addEventListener('click', ascending);
document.getElementById('descending').addEventListener('click', descending);
document.getElementById('reset').addEventListener('click', reset);
document.addEventListener('click', function (event) {
    const x = event.clientX - 102;
    const y = event.clientY - 73;

    coordinatesElement.textContent = `X: ${x}, Y: ${y}`;
});
document.getElementById('ascending').addEventListener('click', ascending);
document.getElementById('descending').addEventListener('click', descending);
document.getElementById('reset').addEventListener('click', reset);
button_finger.addEventListener('click', () => (button_finger.classList.toggle('active')));
like.addEventListener('click', liking);
dislike.addEventListener('click', disliking)