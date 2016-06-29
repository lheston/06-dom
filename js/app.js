'use strict';


window.onload = function() {
/* your script goes here */
/*
console.log('Hello World!');

window.setTimeout(function() {
    console.log("Boo!");
}, 5000);

//for animation
window.requestAnimationFrame(renderCallback);

*/

/*var links = document.getElementsByTagName('a');
var len = links.length;

for(var i=0; i<len; i++)
{
   links[i].setAttribute("target","_blank"); //sets attribute instead cannot be passed directly fyi
}
*/

function blink(){
    var header = document.querySelector('header');
    header.classList.toggle('black');
}

window.setInterval(blink, 500);

/*
var np = document.createElement('p');
undefined
np.textContent="hello world"
"hello world"
np
<p>​hello world​</p>​
var h = document.querySelector('header')
undefined
h.appendChild(np)
<p>​hello world​</p>​
*/

var img = document.querySelector('img');

function handleClick(event){
    console.log('clicky clicky');
    console.log(event);
    var elem = event.target;
    console.log(elem);
    elem.setAttribute('src','img/husky.jpg');
}

img.addEventListener('click', handleClick);
}