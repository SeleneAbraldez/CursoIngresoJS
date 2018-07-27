/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


function mostrar()
{ /*
	var nombre;
	var edad;
	var sexo;
	var contador = 1;


	while (contador<4){ 
		nombre = prompt(contador + ". Ingresar nombre:");

		edad = prompt(contador + ". Ingresar edad: ");
		while(edad<0 || edad >100){
			edad = prompt(contador + ". Invalido, ingresar edad valida: ");
		}
		edad = parseInt(edad);

		sexo = prompt(contador + ". Ingresar sexo, 'f' o 'm': ");
		while(sexo!= "m" && sexo !="f"){
			sexo = prompt(contador + ". Invalido, ingresar sexo valido 'f' o 'm': ");
		}
		contador++;
	} */

	
	var nombre;
	var nota;
	var sexo;
	var contador = 1;
	var promedio = 0;
	var notaBajo;
	var sexoBajo;
	var varonAprob = 0;

	while (contador<4){ 
		nombre = prompt(contador + ". Ingresar nombre:");

		nota = prompt(contador + ". Ingresar nota: ");
		while(nota<0 || nota >10){
			nota = prompt(contador + ". Invalido, ingresar nota valida: ");
		}
		nota = parseInt(nota);
		promedio = promedio + nota; //1

		sexo = prompt(contador + ". Ingresar sexo, 'f' o 'm': ");
		while(sexo!= "m" && sexo !="f"){
			sexo = prompt(contador + ". Invalido, ingresar sexo valido 'f' o 'm': ");
		}

		if (nota<notaBajo){
			notaBajo = nota;
			sexoBajo = sexo;
		}

		if (sexo == "m" & nota>5){
			varonAprob ++;
		}




		contador++;
	}

	alert("1. El promedio de las notas es de: " + promedio + "\n 2. La nota mas baja es: "+  notaBajo + ". El sexo de la persona con la nota mas baja es: " + sexoBajo + "\n 3. La cantidad de varones aprobados es de: " + varonAprob);
	

}
