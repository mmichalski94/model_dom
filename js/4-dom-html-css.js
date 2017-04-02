'use strict';

// dodajemy tekst do nagłówka

var naglowek = document.getElementById('main-header');


console.log(naglowek.innerText);

naglowek.innerText = "Tekst nagłówka po zmianie";
naglowek.innerHTML = "Tekst ze znacznikiem <span> span</span>";

//zmiana typu znacznika
//naglowek.outerHTML = "<h2>Tekst ze znacznikiem <span> span</span></h2>";

// zmieniamy typ znacznika z h1 na h2 bez przepisywania tekstu

naglowek.outerHTML = "<h2>" + naglowek.innerText +"</h2>";

// dokonaliśmy ziany z h1 na h2, więc klasa main-header przestaje istnieć. Nadajemy nową:
document.getElementsByTagName('h2')[0].id = "main-header-after-change";

document.getElementsByTagName('h2')[0].className = "header header-default";

console.log(document.getElementsByTagName('h2')[0].classList);

// w JavaScripcie możemy wstrzykiwać komendy nadpisując arkusz styli

document.getElementsByTagName('h2')[0].style.border = "2px solid red";