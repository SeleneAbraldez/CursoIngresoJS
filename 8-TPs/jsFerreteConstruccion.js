/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho; 
	var resu;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	resu = (largo * ancho) * 3;
	alert(resu);

}
function Circulo () 
{
	var radio;
	var resu;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);
//investigar si hay forma de poner pi real
	resu = 2*radio*3.14159265359;
	alert(resu);
}
function Materiales () 
{
	var largo;
	var ancho; 
	var cemento;
	var cal;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cemento = largo * ancho * 2;
	cal = largo * ancho * 3;

	alert("Necesita " + cemento+ " bolsas de cemento y " + cal + " bolsas de cal.");

}