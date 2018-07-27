/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoC;
	var sueldoB;
	var numLegajo;
	var nacionalidad;

	edad = prompt("Ingresar edad:");
	while (edad<18 || edad>90){
		edad = prompt("Edad no valida, ingresar edad entre 18 y 90 inclusive:");
	}
	document.getElementById('Edad').value = edad;

	sexo = prompt("Ingresar sexo, 'M' o 'F':");
	while (sexo != "M" && sexo != "F"){
		sexo = prompt("Sexo no valido, ingresar 'F' o 'M'");
	}
	document.getElementById('Sexo').value = sexo;

	estadoC = prompt("Ingresar numero para Estado Civil, 1-Solterx, 2-Casadx, 3-Divorciadx y 4-Viudx:"); //INTENTAR CON SWITCH! SE PUDOOO
	while(estadoC != 1 && estadoC != 2 && estadoC != 3 && estadoC != 4){
		estadoC = prompt("Estadp Civil no valido, ingresar numero para Estado Civil, 1-Solterx, 2-Casadx, 3-Divorciadx y 4-Viudx:");
	}
	switch(estadoC){
		case 1:
			document.getElementById('EstadoCivil').value = "Solterx";
		case 2:
			document.getElementById('EstadoCivil').value = "Casadx";
		case 3:
			document.getElementById('EstadoCivil').value = "Divorciadx";
		default:
			document.getElementById('EstadoCivil').value = "Viudx";
	}
	//document.getElementById('EstadoCivil').value = estadoC;

	sueldoB = prompt ("Ingrese su Sueldo Bruto, no menor a 8000:")
	while(sueldoB<8000){
		sueldoB = prompt("Invalido, ingrese su Sueldo Bruto, no menor a 8000:");
	}
	document.getElementById('Sueldo').value = sueldoB;

	numLegajo = prompt ("Ingresar su numero de legajo numérico de 4 cifras, sin ceros a la izquierda:");
	while(numLegajo<999 || numLegajo > 9999){
		numLegajo = prompt("Invalido, ngresar su numero de legajo numérico de 4 cifras, sin ceros a la izquierda:");
	}	
	document.getElementById('Legajo').value = numLegajo;

	nacionalidad = prompt("Ingrese letra de nacionalidad, “A” para argentinx, “E” para extranjerx, “N” para nacionalizadx:"); //INTENTAR SWITCH VV
	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N"){
		nacionalidad = prompt("Invalido, ingrese letra de nacionalidad, “A” para argentinx, “E” para extranjerx, “N” para nacionalizadx:");
	}
	switch(nacionalidad){
		case 1:
			document.getElementById('Nacionalidad').value = "Argentinx";
		case 2:
			document.getElementById('Nacionalidad').value = "Extranjerx";
		default:
			document.getElementById('Nacionalidad').value = "Nacionalizadx";
	}
	//document.getElementById('Nacionalidad').value = nacionalidad;
 
}
