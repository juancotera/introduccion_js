let res = document.getElementById("res");
let operacion = "";
let public;

const igual = document.querySelector(".igual");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const suma = document.querySelector(".suma");




uno.addEventListener("click", function(){
  operacion = operacion + "1";
  res.textContent = operacion;
});

dos.addEventListener("click", function(){
  operacion = operacion + "2";
  res.textContent = operacion;
});

suma.addEventListener("click", function(){
  operacion = operacion + "+";
  res.textContent = operacion;
});

igual.addEventListener("click", function() {
  let final = res.textContent;
  console.log(final);
});