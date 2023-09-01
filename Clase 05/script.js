/*
    Variable - Espacio de Memoria que puede cambiar a lo largo de la ejecución del programa
        -> Caja que tiene una etiqueta que permite identificarla
            -> Declarar variable === Crear la caja
                -> var nombreVariable;
                    -> var === Crear el espacio de memoria
        -> Guardar algo dentro de la caja creada
            -> Asignar variable === Guardar en la caja
                -> nombreVariable = valor a guardar;    
        -> Declarar y asignar todo junto
            -> var unNombre = "algo";

    Dato - Valor representativo que tiene un significado de uso (¿Qué puedo hacer?)
    Valor - Que elemento/cantidad es ese dato (Aquello que se utiliza para realizar la acción posible para el tipo de dato)

    Tipos de Dato de Variables
        => Herramientas que tienen los Lenguajes de Programación para que la máquina sepa que vamos a necesitar para lograr el resultado
        => Number - Representa números (1, 1.5, -50, etc...)
            -> Valor especial que las variables de tipo number toman cuando no tienen un número
        => String - Representa texto ("hola", "un párrafo elaborado", "a", "1")
        => Boolean - Representa verdadero/falso
        => undefined - Representa la creación de una variable sin tipo de dato ni valor
        => null - Representa una variable que tiene tipo de dato asignado pero no tiene valor
            -> JS - null === error

    C# - Lenguaje de Programación Fuertemente Tipado con Tipado Estático
    
    string nombreVariable;
        -> Tipo de dato  - string
        -> Valor - no existe (null)
*/

var unaVariable;
/*
    ¿Cuándo JS asigna el Tipo de Dato de una variable? 
        -> Cuando asignas un valor

    La variable unaVariable tiene asignado un valor
        -> JS entonces NO le asigna un Tipo de Dato
        -> Valor: no tiene valor porque no le asignamos valor. (undefined)
*/

console.log(unaVariable);
unaVariable = "un valor";
console.log("Valor: " + unaVariable, "Tipo de dato: " + typeof unaVariable);
unaVariable = 5;
console.log("Valor: " + unaVariable, "Tipo de dato: " + typeof unaVariable);
var h5 = document.querySelector("h5");
/*
    ¿Cuándo JS asigna el Tipo de Dato de una variable? 
        -> Cuando asignas un valor

    La variable h5 tiene asignado un valor
        -> JS entonces le asigna un Tipo de Dato
        -> Valor: no tiene valor porque en el HTML no hay una etiqueta h5. (null)
*/

/*
    Operadores de Variables
        => Matemáticos
            -> +
                => Concatenar(juntar) datos de tipo string
                => Sumar datos de tipo number
            -> -, *, /, %
                => Realizan la operación correspondiente con datos de tipo number
        => Asignación - Almacenan datos en Espacios de Memoria
            -> = 
            -> Combinación del operador = y los matemáticos 
                -> Realizan la operación correspondiente al operador y almacenan el resultado dentro de la variable
                -> +=, -=, *=, /= y %=
        => Incremento(++)/Decremento(--)
            -> Suman(++)/resta(--) 1 al valor almacenado un una variable y almacena el resultado en la misma
            -> pre
                -> Primero realiza la suma/resta y guarda el resultado en la variable. Después usa el valor almacenado en la variable
            -> post
                -> Primero usa el valor almacenado en la variable. Después realiza la suma/resta y guarda el resultado en la variable
        => Lógicos
            -> Se utilizan para realizar condiciones

    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO    
        => Casteo implícito
            -> Cuando queremos trabajar con variables de distinto, JS en lugar de darnos un error, convierte por nosotros el tipo de dato de alguna de las variables para poder tener los mismos tipos de datos y realizar la operación correspondiente
                -> number + string
                    => number -> string 
                        => string + string = concatenar
                -> string (-,*,/,%) number
                    => string -> number
                        => number (-,*,/,%) number = realiza la operación matemática correspondiente
        => Casteo explícito
            -> Implica que el programador fuerza el tipo de dato de una variable
                -> parseInt(string) - Toma el dato de string y lo convierte en dato de tipo number. Ignora cualquier decimal que exista. No redondea
                    -> parseInt("1.5") -> 1
                -> parseFloat(string) - Toma el dato de string y lo convierte en dato de tipo number. Incluye todos los decimales existentes
                    -> parseFloat("1.5") -> 1.5
                -> Number(string) - idem parseFloat    
*/

/*
    Operadores Matemáticos
*/

var texto1 = "Hola "; //Tipo de Dato - string
var texto2 = "Mundo!"; //Tipo de Dato - string
console.log(texto1 + texto2); //Hola Mundo!

var unNum = 1; //Tipo de Dato - number
var otroNum = 1; //Tipo de Dato - number
console.log(unNum + otroNum); //2

var n1 = 1; //Tipo de Dato: number - Valor: 1
var n2 = "1"; //Tipo de Dato: string - Valor: 1
console.log(n1 + n2);
console.log(n1 - n2);

console.log("El resultado de la suma es: " + n1 + n2);
console.log("El resultado de la suma es: " + (n1 + Number(n2)));
var resultado = "El resultado de la suma es: " + (n1 + Number(n2));
console.log("Tipo de dato: " + typeof resultado);

console.log("El resultado de la resta es: " + n1 - n2);
var number = Number("El resultado de la resta es: " + n1);
console.log("Tipo de dato: " + typeof number, "Valor: " + number);
console.log("El resultado de la resta es: " + (n1 - n2));

/*
    Herramientas Básicas de JS
        => Entrada de datos 
            -> prompt(stringDescripción); 
                -> Permite que el usuario ingrese datos de tipo string
            -> confirm(stringDescripción);
                -> Permite que el usuario ingrese datos de tipo boolean
        => Salida de datos  
            -> console.log();
            -> document.write();
        => Conversión de tipo de datos
            -> parseInt();
            -> parseFloat();
            -> Number();

    Programa - Permitir que el usuario realice la suma de 2 números
        -> 1.- Pedir los números
            -> Crear variable para almacenar el primer número que le pedimos al usuario
                -> var num1 = prompt("Ingrese el primer número");
            -> Crear variable para almacenar el segundo número que le pedimos al usuario
                -> var num2 = prompt("Ingrese el segundo número");    
        -> 2.- Realizar la operación
            -> Convertir los datos de tipo string en datos de tipo number y almacenar el resultado
                -> opción 1 - var resultadoSuma = Number(num1) + Number(num2);
                -> opción 2 
                    -> num1 = Number(num1);
                    -> num2 = Number(num2);
                    -> var resultadoSuma = num1 + num2;
        -> 3.- Mostrar el resultado
            -> document.write("El resultado es: " + resultadoSuma);


var num1 = prompt("Ingrese el primer número");
var num2 = prompt("Ingrese el segundo número");
var resultadoSuma = Number(num1) + Number(num2);
document.write("El resultado es: " + resultadoSuma);
*/

/*
    Operadores de Asignación
*/

var frase = "Soy un ";
var palabra = "texto";
/* var fraseCompleta = frase + palabra;
console.log(fraseCompleta);
frase = frase + palabra; */
frase += palabra; //frase = frase + palabra;
console.log(frase);

var elNum = 5;
elNum += 10; //elNum = elNum + 10;
console.log(elNum);

var algo = "Un texto";
algo -= 10;
console.log(algo);

var otraCosa = 5;
otraCosa += "10";
console.log(otraCosa);

/*
    Operadores 
*/

var n4 = 1;
console.log(n4); //Sentencia - Mostrar qué hay guardado en la variable n4 (requiere el uso del valor almacenado en la variable n4)

//pre incremento(++)/decremento - Primero realiza la operación, después usa el dato
console.log(++n4); //2

var n5 = 1;

//post incremento(++)/decremento - Primero usa el dato, después realiza la operación
console.log(n5++); //1
console.log(n5); //2

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
        -> ¿Tiene la variable unDato algo almacenado? - La existencia o no de un valor almacenado dentro de una variable es una condición            

    NO SE PUEDE OPERAR CON VARIABLES DE DISTINTO TIPO 
        => JS resuelve con Casteo Implícito   
        
    Estructuras de Control de Flujo - Usan condiciones para saber si realizan/repiten una acción    
*/

var n6 = 1; //Tipo de dato number
var n7 = "1"; //Tipo de dato string

console.log("¿Es igual la variable n6 a la variable n7?", n6 == n7);
console.log(
  "¿Es estrictamente igual la variable n6 a la variable n7?",
  n6 === n7
);
console.log(
  "¿Es n6 igual que n7? y ¿Es n6 estrictamente distinto de n7?",
  n6 == n7 && n6 !== n7
);
console.log(
  "¿Es n6 igual que n7? y ¿Es n6 estrictamente igual de n7?",
  n6 == n7 && n6 === n7
);
console.log(
  "¿Es n6 igual que n7? o ¿Es n6 estrictamente igual de n7?",
  n6 == n7 || n6 === n7
);
console.log(!(n6 == n7) || n6 === n7); //false
console.log(!n6 == n7 && n6 !== n7);

var unDato;
//¿Existe un dato almacenado en la variable unDato? - no (false)

// if(condición){
//     //Si la condición dió true hago esto
// } else{
//     //Si la condición dió false hago esto
// }

if (unDato) console.log("La variable tiene un valor almacenado");
else console.log("La variable no tiene un valor almacenado");

if (!unDato)
  console.log(
    "Estoy haciendo esto porque hay un valor almacenado en la variable"
  );
