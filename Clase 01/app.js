//En este archivo el navegador no va a entender de etiquetas HTML. Aca solo entiende JS

document.write("Hola desde JavaScript escrito dentro del archivo script.js"); //Sentencia (orden que el navegado recibe) - Navegador, quiero que en la ventana me muestres la frase "Hola desde..."

/*
    Variable - Espacio de memoria que almacena datos que pueden cambiar a lo largo de la ejecución del programa (la máquina realiza las acciones que le ordenamos)
        => Crear una caja que tiene una etiqueta para identificarla
            -> Declaración - Se usa la Palabras Reservada var
        => La caja va a guardar un dato
            -> Asignación - Se usa el nombre de la etiqueta seguido de un = valor a almacenar

    Nomenclaturas de Variables
        -> camelCase - JS por convención usa este para declarar variables
        -> UpperCamelCase
        -> snake_case
        -> UPPER_SNAKE   
        -> Los nombres deben comenzar con letras, $ o _
        -> Sólo pueden tener letras, $, _ y números
        -> Son key sensitive
            -> otravariable es distinto de otraVariable
        -> No deben ser palabras reservadas (No se pueden llamar var)
        -> Se recomienda que los nombres sean descriptivos    
*/

/*
    Declaración de variable
*/
var unaVariable; //Sentencia - Navegador quiero que armes una caja (var) y a esa caja le pongas la etiqueta unaVariable

/*
    Asignación de variable
*/
unaVariable = "Un Dato"; //Sentencia - Navegador, existe una caja que tiene la etiqueta unaVariable. Adentro, guarda "Un Dato" (= "Un Dato")

/*
    Declaración y Asignación de variable en una sola sentencia
*/
var otraVariable = "Otro dato"; //Sentencia - Navegador quiero que armes una caja (var) que tenga la etiqueta otraVariable y le guardes "Otro dato" (= "Otro dato")

/*
    Dato - Valor representativo que tiene un significado de uso

    Tipos de Dato
        => Herramientas que tienen los Lenguajes de Programación para que la máquina sepa que vamos a necesitar para lograr el resultado
        => Number - Representa números (1, 1.5, -50, etc...)
        => String - Representa texto ("hola", "un párrafo elaborado", "a", "1")
        => Boolean - Representa verdadero/falso
        => undefined - Representa la creación de una variable sin tipo de dato ni valor
        => null - Representa una variable que tiene tipo de dato asignado pero no tiene valor
            -> JS - null === error
*/

console.log("Hola desde el archivo script.js"); //Sentencia - Navegador, quiero que en la consola me muestres "Hola...."

var datoNumber = 1;
console.log(datoNumber); //Sentencia - Navegador, quiero que en la consola me muestres qué hay guardado en la caja con la etiqueta datoNumber
console.log(typeof datoNumber); //Sentencia - Navegador, quiero que en la consola me muestres cuál es el tipo de dato de la variable datoNumber (cuál es el tipo de dato del valor almacenado en la variable)
console.log("Valor: " + datoNumber + " - Tipo de dato: " + typeof datoNumber);

var datoString = "1";
console.log("Valor: " + datoString + " - Tipo de dato: " + typeof datoString);

var datoBoolean = true;
console.log("Valor: " + datoBoolean + " - Tipo de dato: " + typeof datoBoolean);

var datoUndefined;
console.log(datoUndefined);
datoUndefined = "Un valor"; //Sentencia - En la variable datoUndefined, guarda el dato de tipo string "Un valor"
console.log(
  "Valor: " + datoUndefined + " - Tipo de dato: " + typeof datoUndefined
);
datoUndefined = 1; //Sentencia - En la variable datoUndefined, guarda el dato de tipo string "Un valor"
console.log(
  "Valor: " + datoUndefined + " - Tipo de dato: " + typeof datoUndefined
);
datoUndefined = false; //Sentencia - En la variable datoUndefined, guarda el dato de tipo string "Un valor"
console.log(
  "Valor: " + datoUndefined + " - Tipo de dato: " + typeof datoUndefined
);

//Sentencia - Andá al documento html y buscá la etiqueta h2. Crea una variable con la etiqueta h2 y guardá ese elemento ahí.
var h2 = document.querySelector("h2");
console.log(h2);