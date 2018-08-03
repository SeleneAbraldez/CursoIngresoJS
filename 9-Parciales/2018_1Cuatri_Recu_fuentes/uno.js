/*Realizar el algoritmo que pida la base y la altura de un triángulo 
equilátero, informar la superficie y el perímetro en una sola ventana alert.*/

function mostrar()
{
	/*var base;
	var altura;
	var superficie;
	var perimetro;

	base = prompt("Ingrese la base del triangulo equilatero: ");
	base = parseInt(base);
	altura = prompt("Ingrese la altura del triangulo equilatero: ");
	altura = parseInt(altura);

	superficie = base * altura;
	perimetro = (base + altura)*2;


	alert("La superficie del triangulo es de " + superficie + " y el perimetro es de " + perimetro);
	*/

	var base; 
	var altura;
	var superficie;
	var perimetro;

	base = prompt ("Ingrese la base de un triangulo equilatero: ");
	base = parseInt(base);
	altura = prompt ("Ingrese la altura de un triangulo equilatero: ");
	altura = parseInt(altura);

	superficie = (base * altura) / 2;
	perimetro = base * 3;

	alert("superficie del triangulo: " + superficie + ". Perimetro del triangulo: " +perimetro);

}
