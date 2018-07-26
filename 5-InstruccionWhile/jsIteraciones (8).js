function mostrar()
{
	var numero;
	
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';



	while(respuesta!="no"){
		contador ++;
		numero = prompt("Ingrese numero Nº" + contador + ":");
		numero = parseInt(numero);
		if(numero<0){
			negativo = negativo * numero;
		} else {
			positivo = positivo + numero;
		 }
		respuesta = prompt("Desea continuar? Ingrese 'no' para salir")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN