/*objetos y funciones*/

var my_object=new Object ();

var other_object={};

my_object={
	firstName:"Lina",
	lastName:"Sepúlveda",
	phone:747474747
};

console.log(my_object.firstName);
console.log(my_object["lastName"]);

var key;

for(key in my_object){
	console.log(my_object[key]);
}


//como se hacen las funciones:

function test(){
	console.log("ejecutando una función");
}

test();

//usando una función anónima

var bye_bye=function(){
	console.log("mi texto va aquí");
}