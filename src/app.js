/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let sujeto = ["Mi perro", "Un gato negro", "Mi hermano menor", "Una oveja"];
  let accion = ["se comió", "rompió", "borro", "se robó"];
  let conQue = ["mi tarea", "mi código", "mis apuntes", "mi teléfono"];
  let cuando = [
    "en la mañana",
    "durante la noche",
    "cuando fui a comer",
    "cuando salí a comprar"
  ];

  function generadorExcusa(arr) {
    let nuevaExcusa =
      sujeto[Math.floor(Math.random() * arr.length)] +
      " " +
      accion[Math.floor(Math.random() * arr.length)] +
      " " +
      conQue[Math.floor(Math.random() * arr.length)] +
      " " +
      cuando[Math.floor(Math.random() * arr.length)];
    return nuevaExcusa;
  }

  function agregarFrase() {
    document.getElementById("excusa").innerHTML = generadorExcusa(
      sujeto,
      accion,
      conQue,
      cuando
    );
  }

  window.onload = function() {
    agregarFrase();
  };
  console.log(nuevaExcusa);
};
