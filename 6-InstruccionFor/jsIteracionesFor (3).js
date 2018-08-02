function mostrar()
{
	var repeticiones = prompt("Ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);
	repeticiones = repeticiones + 1; //sumo uno porque le saque un numero al no inicializar en 0
	var mensaje;

	for(mensaje = 1; mensaje<repeticiones; mensaje++){ //iniciaizo en uno para que me quede prolijo el mensaje para ver cuantos carteles son, no es muy correcto
		alert ( mensaje + ". Hola UTN FRA");
	}



}//FIN DE LA FUNCIÓN