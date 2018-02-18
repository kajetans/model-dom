"use strict"
//
// // var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem
// //
// function alarm(e) {
//     e.preventDefault(); //zapobiegamy domyślnej akcji
//     console.log('kliknięto kolejny link');
//
//     console.log(e.type);
// }
// //
// // secondLink.onclick = alarm; //wywołujemy funckję alarm na drugim linku po kliknięciu
//
// var thirdLink = document.getElementsByTagName('a')[2]; // tworzymy zmienna z trzecim linkiem
//
// thirdLink.addEventListener("click", alarm); // funkcja w trzecim linku
//

var mainHeader = document.getElementById('main-header');
// przypisujemy nagłówek strony do zmiennej

// function resize(e) { //przekazujemy zdarzenie jako  parametr funkcji
//   if (e.type == "mouseover") {
//     mainHeader.style.fontSize = "70px";
//   } else {
//     mainHeader.style.fontSize = "inherit" // przywróć domyślną wielkość po zjechaniu
//   } }
//
// mainHeader.onmouseover = resize;
// mainHeader.onmouseout = resize;

function klikHeader(e) {

  console.log('kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;
//wywołaj funkcję w elemencie Header

function klikH1(e) {
    e.stopPropagation(); // zatrzymanie propagacji
console.log("kliknales w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1;
