const value = document.getElementById("valor");
const addButton = document.getElementById("adicionar");
const subButton = document.getElementById("subtrair");
const resetar = document.getElementById("reset");

const updatevalue = () =>{
value.innerHTML = contador;
};
let contador = 0;
let intervalId = 0;

addButton.addEventListener( "mousedown", () => {
    intervalId = setInterval(() => {
        contador += 1 ;
        updatevalue()
    },80);

}) ;
subButton.addEventListener( "mousedown", () => {
    intervalId = setInterval(() => {
        contador -= 1 ;
        updatevalue()
    },80);

}) ;
resetar.addEventListener( "click", () => {
    contador = 0; 
 updatevalue();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));

