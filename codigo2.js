/*2- Calcular el interés que tiene una cuenta de ahorros a fin de año, sabiendo que
- La cuenta genera un interés del 15% anual, lo que equivale a 1,25% mensual
- El monto inicial se ingresa en el mes de enero y mensualmente se ingresan 250,00 Bs
- El cálculo se requiere hasta el mes de diciembre
*/

//Declaracion de las variables a utilizar
var capital= 3000;
var i = 15;
var t = 12;
var im = 1.25;

//Declaracion de la operacion a ejecutar
var interesimple = capital * im * 12;

//Muestra al usuario del resultado de la operacion a traves del document.write
document.write("<h1> Usuario, tomando en cuenta el interes que tiene su cuenta de ahorros sabiendo que: </h1>");
document.write("<p>- La cuenta genera un interés del 15% anual, lo que equivale a 1,25% mensual </p>");
document.write("<p>- El monto inicial se ingresa en el mes de enero y mensualmente se ingresan 250,00 Bs </p>");
document.write("<p>- El cálculo se requiere hasta el mes de diciembre </p>")
document.write("<p>- El interes simple que se obtuvo hasta el mes de diciembre es de: "+ interesimple + ("Bs"))