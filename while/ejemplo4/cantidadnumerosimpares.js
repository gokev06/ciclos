console.log("estos son todos los numeros impares del 0 al 100");
let impar = 1;
let cantidad = 0;
while (impar <= 100) {
if (impar %  2 != 0){
    console.log(impar);
    cantidad++;
}
impar++;
}
console.log("estos es la cantidad de numeors impares", cantidad );