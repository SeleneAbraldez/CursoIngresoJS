function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero = 0;

	while(contador<5){
		contador ++;
		//acumulador = parseInt(acumulador) + parseInt(prompt("Ingrese el número Nº" + contador + ":")); //sin poner una variable mas, pero sin parsear en linea, que seria lo correcto
		numero = prompt("Ingrese el número Nº" + contador + ":");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN