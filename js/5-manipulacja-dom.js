"use strict"

var MainHeader = document.getElementById('main-header'); // przypisujemy nagłówek strony do zmiennej

MainHeader.innerText = 'tresc naglowka'; //dodajemy treść do nagłówka
MainHeader.outerHTML = "<p>Treść nagłówka</p>"

var link = document.getElementsByClassName('link')[0];

link.href = "http://akademia108.pl"; // nadpisujemy href w linku

link.className = "nowa-klasa"; //nadpisujemy nazwę klasy w linku

link.classList.add("nowa-nowa-klasa");

link.style.backgroundColor = "yellow"
