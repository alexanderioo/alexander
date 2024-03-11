const button = document.querySelector('button');
button.addEventListener('click', () => (button.classList.toggle('active')))



const like = document.querySelector('.like');
const dislike = document.querySelector('.dislike');

like.addEventListener('click', () => {
    like.classList.toggle('active');
    if (like.classList.contains('active')) {
        dislike.classList.remove('active');
    }
});

dislike.addEventListener('click', () => {
    dislike.classList.toggle('active');
    if (dislike.classList.contains('active')) {
        like.classList.remove('active');
    }
});

let count = 0;
let buttons = document.getElementsByClassName('button_card');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            count++;
            document.getElementById('cart-counter').innerText = count;
        });
    }
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
        document.body.appendChild(ul);
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



    const coordinatesElement = document.getElementById('coordinates');

document.addEventListener('click', function(event) {
    const x = event.clientX - 102;
    const y = event.clientY - 73;

    coordinatesElement.textContent = `X: ${x}, Y: ${y}`;
});