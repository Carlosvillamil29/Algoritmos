// document.body.onload = function(){
//     alert("hola mundo")
// }

// Este es una algoritmo de operaciones básicas
function operacionesBasicas (){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var división = 0;

    alert("Este algoritmo realiza una suma, resta, multiplicación y división de dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor ha operar:  "));
    B = parseInt(prompt("Por favor ingrese el segundo valor ha operar  "));

    suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    división = A / B;

    alert("El resultado de la suma es:  " + suma);
    alert("El resulta de la resta es:  " + resta);
    alert("El resultado de la multiplicación es:  " + multiplicacion);
    alert("El resultado de la divisiós es:  " + división);

}
// Este es un algoritmo de un numero mayor se dos valores
function numeroMayor (){
    var a = 0;
    var b = 0;

    alert("Este es un algoritmo que describe el numero mayor de dos numeros");

    a = parseInt(prompt("Por favor ingrese el primer número "));
    b = parseInt(prompt("Por favor ingrese el segundo número "));

    if ( a > b )
    alert ("El número mayor es  " + a);
    else if ( a < b)
    alert ("El número mayor es:  " + b);
    else 
    alert ("Los números son iguales:  " );

}
//Este es un numero menor de tres valores
function menordetresnumeros (){
    var a = 0;
    var b = 0;
    var c = 0;

    alert("Este es un algoritmo que ejecuta el menor de tres números");

    a = parseInt(prompt("Por favor ingrese el primer número"));
    b = parseInt(prompt("Por favor ingrese el segundo número"));
    c = parseInt(prompt("Por favor ingrese el tercer número"));


    if (( a < b) && ( a < c )){
    alert ("El número menor de los tres números es: " + a);
    }else if (( b < a) && ( b < c)){
    alert ("El número menor de los tres números es: " + b);
    }else if (( c < a) && ( c < b)){
    alert ("El número menor de los tres números es: " + c);
    }else {
    alert ("Los números son iguales: " );
    }

}
// Este es un algoritmo de ingresar un numero y decir si es impar o par
function pareimpar (){
   var w = 0;

    alert("Este es un algoritmo que cuando ingrese un número le diga si es par o impar");

    w = parseInt(prompt("Por favor ingrese el número que desea saber si es par o impar"));

   if (w%2 == 0){
   alert ("El numero es par:  "+ w);
   }else {
    alert ("El número es impar:  "+ w);
   }
}
//Este es un algoritmo que halla el cuadrado de un número
function cuadradonumero (){
    var b = 0;
    var c = 0;
    

    alert("Este es un algoritmo que ejecuta el cuadrado de un número");

    b = parseInt(prompt("Por favor ingrese el número que desea hallar el cuadrado"));

    c = b * b
    alert ("El número elevado al cuadrado es:  " + c);
    
}
//Este es un algoritmo que halla el cuadrado de un numero
function areatriangulo (){
    var b = 0;
    var a = 0;
    var c = 0;

    alert("Este es un algoritmo que halla el area de un triangulo");

    b = parseInt(prompt("Por favor ingrese la base del triangulo"));
    a = parseInt(prompt("Por favor escriba la altura del triangulo"));

    c = (b*a)/2
    alert ("El area del triangulo es:  " + c);
}

function centimetrosametros (){
    var m = 0;
    var c = 0;

    alert("Este es un algoritmo que determina los centimetros de un valor dado en metros");

    m = parseInt(prompt("Por favor ingrese los metros que desea convertir a centimetros"));

    c = m*100
    alert ("Los centimetros son:  " + c )

}


