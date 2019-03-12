'use strict'

let title = document.createElement('h2');
title.classList.add('red-text');
title.textContent = 'Hello World';
let div = document.querySelector('.first');
div.style.color = "red"
div.append(title);

div.insertAdjacentHTML('afterend', '<p class = "green">Lorem, ipsunt dolor</p>');
let text = document.querySelector('p');
text.classList.add('green');
let textGreen = document.querySelector('.green');
textGreen.style.color = 'green';


let image = document.createElement('img');
image.src = 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg';
div.append(image);
image.style.width = '200px';
image.style.margin = 'auto';
image.style.display = 'block';
