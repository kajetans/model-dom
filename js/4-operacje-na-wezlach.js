"use strict"
//
// var istniejacyWezel =
// document.getElementById('parFirst')children[3]; // przypisz do zmiennej istniejacy Wezel
//
// var newElement = document.createElement('p'); // stworz nowy element paragraf
//
// var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworz nowy tekst do elementu p
//
// newElement.appendChild(newElementContent); //dodaj tekst do elementu p
//
// istniejacyWezel.appendChild(newElement);
//   console.log(newElement);

var allLinks = document.querySelectorAll('a'); // przypisz do zmiennej tablicę ze wszystkimi linkami - element a -

// console.log(allLinks);


for (var i = 0; i < allLinks.length, i++) {
    var br = document.createElement('br');
    console.log(allLinks[i].parentNode);
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling) // dodaj BR przed każdym linkiem
    allLinks[i].removeAttribute('class'); //usuń atrybut klasy
}
