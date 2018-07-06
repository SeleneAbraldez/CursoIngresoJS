/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var resultado;

	sueldo = document.getElementById('sueldo').value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100; //no es necesario parsear porqu ya se esta trabajando con numeros

	resultado = sueldo + aumento;
	document.getElementById('resultado').value = resultado;
}
