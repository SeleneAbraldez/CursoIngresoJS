/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

/*
function mostrar()
{ 
	var nombre;
	var nota;
	var sexo;
	var contador = 1;
	var promedio = 0; //acumulador
	var notaBajo = 11; //pongo un 11 a sabiendas de que ninguna nota va a superar el once, pero deberia parchearlo con un if de forma mas correcta 
	var sexoBajo;
	var varonAprob = 0;

	while (contador<6){ 
		nombre = prompt(contador + ". Ingresar nombre:");
		nota = prompt(contador + ". Ingresar nota: ");
		nota = parseInt(nota);
		while(isNaN(nota)||nota<0 || nota >10){
			nota = prompt(contador + ". Invalido, ingresar nota valida: ");
			nota = parseInt(nota);
		}
		
		promedio = promedio + nota; //1

		sexo = prompt(contador + ". Ingresar sexo, 'f' o 'm': "); 
		while(sexo!= "m" && sexo !="f"){
			sexo = prompt(contador + ". Invalido, ingresar sexo valido 'f' o 'm': ");
		}

		if (nota<notaBajo){ //2
			notaBajo = nota;
			sexoBajo = sexo;
		}

		if (sexo == "m" & nota>5){ //3
			varonAprob ++;
		}

		contador++;
	}

	alert("1. El promedio de las notas es de: " + promedio/(contador-1) + "\n 2. La nota mas baja es: "+  notaBajo + ". El sexo de la persona con la nota mas baja es: " + sexoBajo + "\n 3. La cantidad de varones aprobados es de: " + varonAprob); 
	//uso contador - 1 para el promedio porque inicialice oontador en 1 para que quede bonito el orden, si huebira utilizado solo para fines pra<cticos y no esteticos, el -1 no iria. Tambien podria poner el contador ++ al principio y ahorrarme este comnentario, pero recien ahora me di cuenta y me da fiaca cambiarlo :D
}
*/



//EJERICTACION EN CLASE
/*1. Sexo de la peor nota:
2. Nombre de la persona mas vieja:
3. Nota de la persona mas chica: 
TEST 
Jose m 33 9
mara f 22 6
fer f 16 10
ger m 18 1
sus f 56 2
mirta f 99 8 */

function mostrar()
{ 
	var nombre;
	var nota;
	var sexo;
	var edad;
	var notaBaja; //version correcta con if, no incialiando de forma pichanga
	var sexoBaja;
	var vieje; //sim
	var nombreVieje; 
	var chique; //sim
	var notaChique;
	var contador = 0;
	//var personas;

	//personas = prompt("Numero de peronas a ingresar: ");

	while (contador<6){ 

		contador++;
		nombre = prompt(contador + ". Ingresar nombre:");

		sexo = prompt(contador + ". Ingresar sexo, 'f' o 'm': "); 
		while(sexo!= "m" && sexo !="f"){
			sexo = prompt(contador + ". Invalido, ingresar sexo valido 'f' o 'm': ");
		}

		edad = prompt(contador + ". Ingrese edad:");
		edad = parseInt(edad);
		while(isNaN(edad) || edad<0 || edad >120){
			edad = prompt(contador + ". Ingrese edad valida: ")
			edad = parseInt(edad);
		}

		nota = prompt(contador + ". Ingresar nota: ");
		nota = parseInt(nota);	
		while(isNaN(nota) || nota<0 || nota >10){
			nota = prompt(contador + ". Invalido, ingresar nota valida: ");
			nota = parseInt(nota);
		}
				
		if(contador==1){
			notaBaja = nota;
			sexoBaja = sexo;
		} else {
			if (nota<notaBaja){ //1
				notaBaja = nota;
				sexoBaja = sexo;
		 	}
		}

		if(contador==1){
			vieje = edad;
			nombreVieje = nombre;
		} else {
			if (edad>vieje){
				vieje = edad;
				nombreVieje = nombre;
			}
		}

		if(contador==1){
			chique = edad;
			notaChique = nota;
		} else {
			if (edad<chique){
				chique = edad;
				notaChique = nota;
			}
		}
	}

	alert("\n 1. La nota mas baja es: "+  notaBaja + ". El sexo de la persona con la nota mas baja es: " + sexoBaja + "\n 2. El nombre de la persona mas vieja es: " + nombreVieje + "\n 3. La nota de la persona mas chica: " + notaChique); 
} 
// TEST RESULTADO 1 m 2 mirta 3 10