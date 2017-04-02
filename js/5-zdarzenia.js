'use strict';

function nowaFunkcja() {
    console.log('kliknąłeś w paragraf');
}


// przypisywanie zdarzeń przy użyciu HTML DOM

var parSecond = document.getElementById('parSecond');

function changeBackground() {
    parSecond.style.backgroundColor = "green";
}

function changeBackgroundDB() {
    parSecond.style.backgroundColor = "red";
}
parSecond.onclick = changeBackground;

//parSecond.ondblclick = changeBackgroundDB;
parSecond.addEventListener('dblclick', changeBackgroundDB);

document.getElementById('parFirst').children[3].addEventListener('click', function (e) {

    e.preventDefault();

    console.log(e);
});

parSecond.addEventListener('click', function (e) {

    if (e.type == 'click')
        e.preventDefault();

    console.log(e);
});


// zadanie: napisz skrypt, który będzie zmieniał kolor nagłówka w zależności od naciśniętej strzałki. użyć funkcji switch

var mainHeader = document.getElementById('main-header-after-change');

document.onkeydown = checkKeyDown;

function checkKeyDown(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            mainHeader.style.color = "red";
            break;

        case 38:
            mainHeader.style.color = "green";
            // up
            break;

        case 39:
            mainHeader.style.color = "yellow";
            // right
            break;

        case 40:
            mainHeader.style.color = "blue";
            // down
            break;

        default:
    }
}

// zadanie2 tworzymy dwa paragrafy i przysisk, po naciśnięciu którego zmieni się tło paragafów

var parThird = document.getElementById('parThird');

var btn = document.createElement("button");
var btnText = document.createTextNode("Kliknij, aby zmienić kolor tła");
var btnClass = document.createAttribute("class");

btnClass.value = 'button-class';
btn.appendChild(btnText);
btn.setAttributeNode(btnClass);

parThird.insertBefore(btn, parThird.children[0]);

// funkcja sprawdzająca czy button jest naciśnięty

console.log(btn);

btn.onclick = buttonBackgroundChange;

function buttonBackgroundChange(e) {
    //btn.addEventListener("click", function (e) { błąd - to jest wywołanie funkcji wywołjące oczekiwanie na kliknięcie

            if (e.type == 'click') {
                parThird.children[1].style.backgroundColor = "red";
                parThird.children[2].style.backgroundColor = "yellow";
            } 
        
    }
//zadanie3 formularz
//Stwórz formularz, zablokuj, jego funkcję wysyłąjącą, pobierz dane z submita i wyświetl w konsoli


function pobierzImie(event) {
    event.preventDefault();
    console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);
    
    
}