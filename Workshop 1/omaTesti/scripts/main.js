'use strict';
const switcher = document.querySelector('.color-change');
const text = document.querySelector('.black-text');

switcher.addEventListener('click', function() {
    text.classList.toggle('blue-text');
    text.classList.toggle('black-text');

    if (text.classList == 'blue-text') {
        alert("Tekstin väri muuttuu nyt siniseksi!");
    }
});


