/*Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/
function mostrar()
{
	/*var precio;
	var descuento;
	var descuentoDin;
	var precioDes;
	var iva;
	var resultadoFinal;

	precio = prompt("Ingrese precio:");
	descuento = prompt("Ingrese el porcentaje de descuento:");

	descuentoDin = precio * descuento / 100;
	precioDes = precio - descuentoDin;
	iva = precioDes * 21 /100;

	resultadoFinal = precioDes + iva;



	alert ("1-El descuento es de $"+descuentoDin+". 2- El precio con el descuento es de $"+precioDes+". 3- El IVA es de 21%.");
	document.getElementById('elPrecioFinal').value = resultadoFinal;
	*/

	var precio;
	var pDescuento;
	var descuento;
	var precioConDes;
	var ivaPrecio;
	var ivaPrecioConDes;
	var precioFinal

	precio = prompt("Ingrese el precio: ");
	precio = parseInt(precio);
	pDescuento = prompt("Ingrese el porcentaje de descuento: ");
	pDescuento = parseInt(pDescuento);

	descuento = precio * pDescuento / 100; //1
	precioConDes = precio - pDescuento; //2
	ivaPrecio = precio * 21 / 100; // 3 iva del precio original
	ivaPrecioConDes = precioConDes * 21 / 100; //3 iva`precio con descuento
	precioFinal = precioConDes + ivaPrecioConDes; // 4

	alert ("1-El descuento en dinero es de $"+descuento+". 2- El precio con el descuento es de $"+precioConDes+". 3- El IVA del precio original: " + ivaPrecio + ". El IVA del precio con descuento en dinero es de $" + ivaPrecioConDes);
	document.getElementById('elPrecioFinal').value = precioFinal;

}

