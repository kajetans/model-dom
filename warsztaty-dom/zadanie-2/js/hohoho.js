"use strict"

function pobierzImie(event) {
  event.preventDefault();
  console.log('jest super');

  var form = document.getElementById("formularz");
  console.log(form);

  for (var i = 0; i < form.length; i++) {
    console.log(form.elements[i]);


  if (form.elements[i].value != 'Submit') {
    console.log(form.elements[i].value);
  }
}


}
