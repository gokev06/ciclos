let limite = prompt("ingrese un numero limite ");
let contador = 1;
let resultado= 0;
let resultadofinal= 0;
while (contador  <= limite  ) {
     resultado = contador *contador;
    contador++;
    resultadofinal= resultadofinal + resultado;
}

console.log(resultadofinal);