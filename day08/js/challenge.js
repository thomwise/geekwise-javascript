/*
var body = document.body;

var div = document.createElement('div'),
    img = document.createElement('img'),
    h1 = document.createElement('h1'),
    p = document.createElement('p'),
    a = document.createElement('a');

div.appendChild(img);
img.src = 'http://4.bp.blogspot.com/-BxlM7N680NE/Ub0E-1ocuRI/AAAAAAAAADY/uYcsMcvJdiY/s1600/poop.jpg';
img.alt = 'Poop emoji';
div.appendChild(h1);
h1.textContent = 'Thomas Wise';
div.appendChild(p);
p.textContent = 'This is the story of a girl, who cried a river and drowned the whole world. While she looks so sad in photographs. I absolutely love her...when she smiles.';
div.appendChild(a);
a.textContent = 'More about this...';
a.href = '#';

div.append(img, h1, p, a);
body.appendChild(div);
*/
var body = document.body;

var div = document.createElement('div'),
    container = document.createElement('form'),
    username = document.createElement('input'),
    password = document.createElement('input'),
    button = document.createElement('button');


container.appendChild(username);
username.type = 'text';
container.appendChild(password);
password.type = 'password';
password.placeholder = 'password';
container.appendChild(button);
button.textContent = 'Enter'

div.append(container, username, password, button);
body.appendChild(div);
