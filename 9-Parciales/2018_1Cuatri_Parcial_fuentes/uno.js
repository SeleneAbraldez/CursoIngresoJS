/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por 
prompt y que muestre el perímetro por alert.*/
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho: ");
	largo = prompt("Ingrese el largo: ");
	perimetro = ancho * largo;
	alert("El perimetro es: " + perimetro);
}
