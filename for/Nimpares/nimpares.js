let limite = parseInt(prompt("ingrese un numero limite"));
for (  let numero= 1; numero<= limite; numero++){
    if(numero % 2 != 0){
        console.log(numero)
    }
}
console.log("numeros impares del 1 al " ,limite);