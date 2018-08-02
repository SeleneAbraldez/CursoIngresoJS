/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{ 
	var nombre;
	var nota;
	var sexo;
	var contador = 1;
	var promedio = 0;
	var notaBajo = 11; //pongo un 11 a sabiendas de que ninguna nota va a superar el once, pero deberia parchearlo con un if de forma mas correcta 
	var sexoBajo;
	var varonAprob = 0;

	while (contador<6){ 
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