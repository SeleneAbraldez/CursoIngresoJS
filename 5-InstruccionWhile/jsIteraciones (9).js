function mostrar()
{
	var numero=0;
	var numMayor=0;
	var numMenor=0;
	var contador=0;
	var respuesta='si';

	while(respuesta!='no'){
		numero = prompt("Ingresar un numero:")
		numero = parseInt(numero);
		if(numero>numMayor){
			numMayor = numero;
		}
		if (numero<numMenor) {
			numMenor = numero;
		}
		respuesta = prompt("Desea continuar? Ingrese 'no' para salir.");
		contador ++;
		if (contador == 1 && respuesta == "no"){ //si se ingresa un unico numero, este es al mismo tiempo el mayor y el menor numero
		numMayor = numero;
		numMenor = numero;		
		}
	} 

	document.getElementById('maximo').value = numMayor;
	document.getElementById('minimo').value = numMenor;

}//FIN DE LA FUNCIÓN