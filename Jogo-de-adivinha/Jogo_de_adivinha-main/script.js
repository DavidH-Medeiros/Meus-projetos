let Number = Math.floor(Math.random() * 100) + 1;

var tentativa = 0 ;
var contador = 0 ;

while (tentativa !== Number ) {
    tentativa = prompt("Por favor, insira um número inteiro de 1 a 100:"+ Number );
    contador ++;
    if (tentativa == Number) {
        alert("Você acertou com "+ contador + " tentativas, parabens !!!!")
        break
    }else if (contador > 10) {
        alert("você passou de 10 tentativas")
        break
    } 
    else if (tentativa > Number) {
        alert("Tente um numero menor !!")
    } else {
        alert("Tente um numero maior !!")
    }
}
