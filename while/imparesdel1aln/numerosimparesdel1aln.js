let numero = prompt("ingrese un numero limite");
console.log("estos son todos los numeros impares del 0 al ", numero);
let impar = 1;
while (impar <= numero) {
if (impar %  2 != 0){
    console.log(impar);
}
impar++;
}
