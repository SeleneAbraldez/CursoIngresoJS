function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero = 0;
	acumulador = parseInt(acumulador);

	while(respuesta != "no"){
		contador ++;
		numero = prompt("Ingrese el número Nº" + contador + ": ");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar? Ingrese 'no' para salir.");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN 