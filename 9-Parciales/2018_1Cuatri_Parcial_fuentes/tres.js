/*Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/
function mostrar()
{
	var precio;
	var descuento;
	var resultado;

	precio = prompt("Ingrese el precio: ");
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	precio = parseInt(precio);
	descuento = parseInt(descuento);

	resultado = precio - ((precio * descuento)/100);
	document.getElementById('elPrecioFinal').value = resultado;
}
