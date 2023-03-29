console.log("estos son todos los numeros multiplos del 6 del 0 al 100");
let multiplo = 1;
let contador = 0;
while (multiplo <= 100) {
    if(multiplo % 6 == 0 ) {
    console.log("multiplos de 6:",multiplo);
    contador++;
}
multiplo++;
}
console.log("cantidad de numeros", contador);