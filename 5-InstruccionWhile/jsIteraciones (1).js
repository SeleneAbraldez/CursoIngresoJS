function mostrar()
{
	var contador;
	contador = 0; //siempre se inicializa en 0

	while(contador<10){ //el numero siempre es igual al numeor de repeticiones
		contador ++; //el orden del contador influye en el mensaje, estando despues empieza en 0, antes en 1
		console.log("Hola " + contador);
		//contador = contador + 1;
	}
	console.log(contador);

}//FIN DE LA FUNCIÓN