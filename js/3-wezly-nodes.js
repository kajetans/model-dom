"use strict";

var pierwszyDiv = document.getElementById('parFirst')
// // console.log(pierwszyDiv);
// // console.log(pierwszyDiv.parentNode);
// // console.log(pierwszyDiv.parentElement);
// //
// // console.log(pierwszyDiv.childNodes);
//
// var pierwszyChild = pierwszyDiv.childNodes[0];
// console.log(pierwszyChild);
// console.log(pierwszyChild.nextSibling);
//

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach(function (element) {
  if(element.nodeType == 8 ) {
      console.log(element);
  }
});
