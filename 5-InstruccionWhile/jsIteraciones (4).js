function mostrar()
{
	var numero = prompt("Ingrese un número entre 0 y 10.");
	while(numero <0 || numero >10){
		numero = prompt("Incorrecta, ingrese un número entre 0 y 10.");
	}
	document.getElementById('Numero').value = numero;
	
}//FIN DE LA FUNCIÓN