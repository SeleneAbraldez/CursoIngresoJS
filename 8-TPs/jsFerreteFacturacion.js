/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = (precioUno+precioDos+precioTres);
	alert(resultado);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado = (precioUno+precioDos+precioTres)/3;
	alert(resultado);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
 
	//no estoy segura de entender la consigna del todo, interpreto precio final = suma de los tres

	resultado =(precioUno+precioDos+precioTres)+(precioUno+precioDos+precioTres)*21/100;
	alert(resultado);
}