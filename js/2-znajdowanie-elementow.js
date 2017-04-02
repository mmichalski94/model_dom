'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var linki = document.getElementsByClassName('superlink');
console.log(linki[0]);

var linkPoZnaczniku = document.getElementsByTagName('a');
console.log(linkPoZnaczniku.length);// podaje ilość linkó na stronie, bez atrybutu length funkcja wypisze wszystkie linki w konsoli

var pierwszyLink = document.querySelector('.link');
var pierwszyLink = document.querySelector('[href*="http://]');

//var wszystkieLinki = document.querySelectorAll('[href]');
var wszystkieLinki = document.querySelectorAll('#parFirst [href]');
console.log(wszystkieLinki);

wszystkieLinki.forEach(function(element, index) {
    console.log(element.innerHTML);
}); // wyrzuca całą html-ową zawartość elementu