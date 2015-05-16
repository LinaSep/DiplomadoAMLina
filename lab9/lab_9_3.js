/* Callbacks en JavaScript */

/* 
* Un Callback en JS es una función, que por
* parametro se le envia otra función, y la función que lo
* recibe, espera a que se ejecute esa función
*/

/*
funciones ejercicio Viviana **/

// Creación del Callback
function operaciones(suma, x, y, resta, multiplica){
suma(x,y);
resta(x,y);
multiplica(x,y);
}

operaciones(function(a,b){
var sum = a + b;
console.log("La suma es : " + sum);
}, 
3, 
7, 
function(a,b){
var res = a - b;
console.log("La resta es : " + res);
},
function(a,b){
	var mul= a * b;
	console.log("La multiplicacion es:" + mul);
}
);



