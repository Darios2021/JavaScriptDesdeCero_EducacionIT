/*
    Operadores Lógicos - Se utilizan para crear condiciones
        => Operador de igualdad(==)/desigualdad(!=) 
            => Siempre que lo usemos sobre datos de distinto tipo, JS realiza el casteo
        => Operador de igualdad estricta(===)/desigualdad estricta(!==)
            => Siempre que lo usemos sobre datos de distinto tipo, le avisamos a JS que no queremos que castee
        => Operadores de Comparación - Permiten crear una única condición compuesta por varias condiciones individuales   
            => AND (&&) - La condición es true si todas sus condiciones son true
            => OR (||) - La condición es true si al menos una de sus condiciones es true
            => NOT (!) - Invierte el valor obtenido en la condición

    Condiciones son true o false
        -> Si la respuesta a la pregunta es si. La condición devuelve/retorna/es true
        -> Si la respuesta a la pregunta es no. La condición devuelve/retorna/es false

    Condiciones - Son preguntas que se responden por si o por no
        -> ¿Es la variable n6 igual a la variable n7? - si
            -> n6 == n7 - true
        -> ¿Es la variable n6 estrictamente igual a la variable n7? - no
            -> n6 === n7 - false    
        -> ¿Es 7 mayor que 3? - Si
            -> 7 > 3 - true
        -> ¿Es 2 menor o igual que 0? - no
            -> 2 <= 0 - false
        -> ¿Es n6 igual que n7? y ¿Es n6 estrictamente distinto de n7? - si
            -> n6 == n7 && n6 !== n7 - true
                -> ¿Es n6 igual que n7? - si  
                    -> n6 == n7 - true
                -> ¿Es n6 estrictamente distinto de n7? - si
                    -> n6 !== n7 - true
        -> ¿Es n6 igual que n7? o ¿Es n6 estrictamente igual de n7? - si
            -> n6 == n7 || n6 === n7 - true
                -> ¿Es n6 igual que n7? - si  
                    -> n6 == n7 - true
                -> ¿Es n6 estrictamente igual de n7? - no
                    -> n6 === n7 - false
        -> ¿Tiene la variable algo almacenado? - La existencia o no de un valor almacenado dentro de una variable es una condición            
            -> Falsies (condición false)
                -> undefined
                -> null
                -> false
                -> 0
                -> -0
                -> ""
                -> NaN
            -> Trusties (condición true) - Todo aquel valor que no es un Falsie

    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO 
        => JS resuelve con Casteo Implícito   
        
    Estructuras de Control de Flujo - Usan condiciones para saber si realizan/repiten una acción    
        => Condicionales - Las condiciones se plantean con la intención de obtener un true
            -> Permiten indicar CUÁNDO se realiza una acción. Para ello es necesario responder a la pregunta de la condición
            -> if/else
                -> Si sólo vamos a escribir una sentencia, podemos ignorar las llaves
                -> Es posible ignorar el else
                    -> else === bloque alternativo (¿Qué sucede si la condición no es true?)
                -> if/else if/else 
                    -> Permite el planteo de varias evaluaciones   
                    -> Permite ignorar el else
                    -> El orden de las condiciones altera el producto 
            -> operador ternario
                -> No se puede realizar más de una sentencia
                -> No se puede ignorar el else
                -> Permite almacenar el resultado en variable
            -> switch
                -> Evalúa un dato previamente procesado del que se conocen los posibles valores
        => Bucles - Usan el valor de la condición para saber si deben o no repetir un código. Siempre que la condición sea true, repiten el código
            -> for
            -> while - Suele utilizarse para validaciones
            -> do-while
*/

var n1 = 1; //tipo de dato: number - valor: 1
var n2 = "1"; //tipo de dato: string - valor: 1

//if/else
/* if(condición){
    //Esto es la acción a realizarse cuando el valor de la condición es true (la respuesta a la pregunta es si)
    //Esto se realiza si la condición es true
}else{
    //Esto es la acción a realizarse cuando el valor de la condición es false (la respuesta a la pregunta es no)
    //Esto se realiza si la condición es false
} */

if (n1 == n2) {
  console.log("Condicional if - condición true");
  console.log("La condición es true");
} else {
  console.log("Condicional if - condición false");
  console.log("La condición es false");
}

if (n1 == n2) {
  console.log("Condicional if - condición true. La condición es true");
} else {
  console.log("Condicional if - condición false. La condición es false");
}

if (n1 == n2)
  console.log("Condicional if - condición true. La condición es true");
else console.log("Condicional if - condición false. La condición es false");

var unDato = 0;
//¿Hay algo almacenado en la variable unDato? - Para responder esta pregunta JS mira la lista de Falsies. Si el valor se encuentra em esa lista, responde false. Sino responde true
if (unDato) console.log("Pepe");
else console.log("Dato Falsie");

//¿Es el dato almacenado la variable unDato 0?
if (unDato === 0) console.log("Pepe");
else console.log("Dato Falsie");

/*
    Programa - Realizar la suma de dos números y mostrar el resultado en pantalla. Si el usuario no ingresa números válidos, mostrarle un cartel que diga que no se puede realizar la suma
        => 1.- Obtener los números
            -> var num1 = prompt("Ingrese el primer número");
            -> var num2 = prompt("Ingrese el segundo número");
        => 2.- Evaluar los valores ingresados   
            -> num1 = parseFloat(num1);
            -> num2 = parseFloat(num2); 
            -> Pregunta: ¿num1 y num2 son distintos de NaN?
                -> !Number.isNaN(num1) && !Number.isNaN(num2)
                -> Respuesta Si
                    => 3.- Realizar lavar edad = prompt("Ingrese su edad");
// edad = parseInt(edad); operación
                        -> var resultado = num1 + num2;
                    => 4.- Mostrar el resultado
                        -> document.write("El resultado de la suma es: " + resultado);
                -> Respuesta No 
                    => 3.- Mostrar cartel de error
                        -> document.write("No se ingresaron valores válidos para realizar la operación")        

    Number.isNaN(dato) - ¿Es el valor de dato NaN? 
        -> Si en el paréntesis pasamos un valor NaN JS responde true. Caso contrario, responde false.        

var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
  var resultado = num1 + num2;
  document.write("El resultado de la suma es: " + resultado);
} else {
  document.write("No se ingresaron valores válidos para realizar la operación");
}
*/

/*
    Programa - Mostrar en pantalla un saludo si y sólo si la persona responde quiere ver el saludo
        => 1.- Preguntar si quiere ser saludado
            -> var mostrar = confirm("¿Quiere ver el saludo?");
        => 2.- Evaluar la respuesta
            -> Pregunta: El usuario, ¿me pidió que le muestre el saludo?
                -> condición 1 - mostrar === true
                -> condición alternativa - mostrar 
                    -> ¿Hay algo almacenado en la variable mostrar? (JS revisa lista de falsies)
                -> Repuesta Si
                    => 3.- Saludar
                        -> document.write("Hola, cómo estás?");

var mostrar = confirm("¿Quiere ver el saludo?");
if (mostrar) document.write("Hola, cómo estás?");
*/

/*
    Programa - Pedir a un usuario que ingrese su edad. Si el valor ingresado es mayor o igual que 18, mostrar el mensaje "Es adulto"; si el valor ingresado es menor o igual que 17 y mayor o igual que 13, mostrar el mensaje "Es adolescente". Si el valor ingresado es menor que 12, mostrar el mensaje "Es un niño". Si se ingresa un número negativo mostrar el mensaje "No nato". Si se ingresa un número mayor a 120 mostrar el mensaje "Hola Mirtha"
        => 1.- Pedir la edad
            -> var edad = prompt("Ingrese su edad");
            -> edad = parseInt(edad);
        => 2.- Evaluar la edad para almacenar el mensaje correspondiente
            -> var mensaje;
            -> Pregunta 1: edad Mirtha
                -> edad > 120
                    => Respuesta Si
                        => 3.- Almacenar el mensaje;
                            -> mensaje = "Hola Mirtha";
                    => Respuesta No
                        -> Pregunta 2: edad mayor o igual que 18
                            -> edad >= 18
                                => Respuesta Si
                                    => 3.- Almacenar el mensaje;
                                        -> mensaje = "Es adulto";
                                => Respuesta No    
                                    -> Pregunta 3: edad mayor o igual que 13 y edad menor o igual que 17
                                        -> edad >= 13 && edad <= 17 
                                            => Respuesta Si
                                                => 3.- Almacenar el mensaje;
                                                    -> mensaje = "Es adolescente";
                                            => Repuesta No 
                                                    -> Pregunta 4: edad menor a 12 y mayor igual que 0
                                                        -> edad <= 12 && edad >= 0
                                                        -> alternativa edad < 13
                                                        => Respuesta Si
                                                            => 3.- Almacenar el mensaje;
                                                                -> mensaje = "Es un niño";
                                                        Respuesta No
                                                            => 3.- Almacenar el mensaje;
                                                                -> mensaje = "No nato";
        => 4.- Mostrar el mensaje almacenado
            -> document.write(mensaje);
*/

// var edad = prompt("Ingrese su edad");
// edad = parseInt(edad);

//if/else if/else
// var mensaje;

// if (edad > 120) mensaje = "Hola Mirtha";
// else if (edad >= 18) mensaje = "Es adulto";
// else if (edad >= 13 && edad <= 17) mensaje = "Es adolescente";
// else if (edad <= 12 && edad >= 0) mensaje = "Es un niño";
// else mensaje = "No nato";

// document.write(mensaje);

//operador ternario - condición ? true : false;
/* var mensaje =
  edad > 120
    ? "Hola Mirtha"
    : edad >= 18
    ? "Es adulto"
    : edad >= 13 && edad <= 17
    ? "Es adolescente"
    : edad <= 12 && edad >= 0
    ? "Es un niño"
    : "No nato";
document.write(mensaje); */

/*
    Proceso 
        -> Secuencia de pasos lógicos que permite obtener un dato

    Programa - Pedir al usuario el ingreso de un número entre el 0 y el 6. Usar ese número para indicar un día de la semana, asumiendo que 0 representa al Domingo y 6 representa al Sábado. Asegurarse que el número no sea menor que 0 ni mayor que 6 y que tenga como tipo de dato number.    
        -> 1.- Obtener el número
            -> var dia = prompt("Ingrese un número entre el 0 y el 6");
            -> El número debe ser un dato de tipo number
                -> dia = parseInt(dia);
                -> Evaluar que existe un número
                    -> if - condición Number.isNaN(dia)
                        -> true - (no tengo un número)
                            -> Volver a pedir el ingreso del número y volver a convertir
                                -> dia = prompt("No es un número entre el 0 y el 6. Ingrese un número entre el 0 y el 6")
                                -> dia = parseInt(dia);
            -> Evitar que el número no sea menor que 0 y ni mayor que 6
                -> if - condición dia >= 0 && dia <= 6
                    -> Respuesta Si - Continuar
                    -> Respuesta No 
                        -> Volver el a pedir el número, convertirlo y asegurarse que tenemos un número
        -> 2.- Mostrar el día según el valor del número
*/

//Procesar un dato
/* var dia = prompt("Ingrese un número entre el 0 y el 6"); //"diez"
dia = parseInt(dia); //NaN

//Validación - Realizar la secuencia de pasos lógicos necesarios para asegurar que contamos con dato necesario para nuestro programa

//¿La variable dia almacena un NaN?
while (Number.isNaN(dia) || !(dia >= 0 && dia <= 6)) {
  dia = prompt(
    "No es un número entre el 0 y el 6. Ingrese un número entre el 0 y el 6"
  ); //"10"
  dia = parseInt(dia); //10
}

console.log(dia);  */ //dia almacena un dato previamente procesado con siete posibles valores (0, 1, 2, 3, 4, 5, 6)

/* switch (key) {
    key => dato previamente procesado
    value => uno de los posibles valores
    case value:
        
        break;

    default:
        //Algo que se realiza en caso de que no obtengamos un valor declarado en los value (idem else). Es opcional
        break;
} */

/* switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miércoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábado");
    break;
} */

/*
    Ejemplo de Objeto Date
*/
var objDate = new Date(); //JS, necesito que me guardes en la variable objDate el elemento que me permite trabajar con el calendario de la computadora del usuario
console.log(objDate);
var dia = objDate.getDay();
console.log(dia);

switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miércoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábado");
    break;
}
