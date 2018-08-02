/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.*/
function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador = 0;
	var promedio = 0;
	var notaBajo = 11; //pongo un 11 a sabiendas de que ninguna nota va a superar el once, pero deberia parchearlo con un if de forma mas correcta 
	var sexoBajo;
	var varonAprob = 0;
	var joven = 131; //idem l 14
	var sexoJoven;
	var notaJoven;
	var mujer = 0;
	var notaMujer;
	var edadMujer; 
	var mensajeMujer = "Lo siento, no se ha ingresado ninguna mujer..."; // mensaje default si no se cumple el while

	while (contador<5){ 
		contador++;

		nota = prompt(contador + ". Ingresar nota: ");
		while(nota<0 || nota >10){
			nota = prompt(contador + ". Invalido, ingresar nota valida: ");
		}
		nota = parseInt(nota);
		promedio = promedio + nota; //a

		edad = prompt(contador + ". Ingresar edad: ");
		while (edad<0 || edad>130){
			edad = prompt("Ingresar edad valida: ");
		}

		sexo = prompt(contador + ". Ingresar sexo, 'f' o 'm': "); 
		while(sexo!= "m" && sexo !="f"){
			sexo = prompt(contador + ". Invalido, ingresar sexo valido 'f' o 'm': ");
		}

		if (nota<notaBajo){ //b
			notaBajo = nota;
			sexoBajo = sexo;
		}

		if (sexo == "m" && edad >18 && nota>5){ //c
			varonAprob ++;
		}

		if(edad<joven){ //d
			sexoJoven = sexo;
			notaJoven = nota;
		}

		while(mujer == 0 && sexo == "f"){
			notaMujer = nota;
			edadMujer = edad;
			mensajeMujer = edadMujer + ", " + notaMujer;
			mujer ++;
		}

	}

	alert("a. El promedio de las notas es de: " + promedio/(contador) + "\n b. La nota mas baja es: "+  notaBajo + ". El sexo de la persona con la nota mas baja es: " +sexoBajo + "\n 3. La cantidad de varones mayores aprobados es de: " + varonAprob + "\n d. El sexo y la edad del mas joven: " + sexoJoven + ", " + notaJoven + "\n d. La edad y la nota de la primera mujer ingresada : " + mensajeMujer); 
}

	
