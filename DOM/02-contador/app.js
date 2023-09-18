let cont = 0;

const value = document.querySelector("#value");
const btns = docume.parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}nt.querySelectorAll(".btn");
const incrementar = document.querySelector(".incrementar");
const decrementar = document.querySelector(".decrementar");
const reset = document.querySelector(".reset");

incrementar.addEventListener( "click", function(){
  cont++;
  console.log(cont);
  value.textContent = cont;
} );

decrementar.addEventListener( "click", function(){
  if(cont == 0){

  }else {
    cont--;
  }
  value.textContent = cont;
} );

reset.addEventListener( "click", function(){
  cont = cont * 0;
  console.log(cont);
  value.textContent = cont;
} );


