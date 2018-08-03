/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/
function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var contador = 0;
	var respuesta = "si";
	var tempPares;
	var pesado;
	var tempPesa;
	var nombrePesa;


	while(respuesta != "no") {
		contador++;

		nombre = prompt(contador + ". Ingresar nombre: ");

		peso = prompt(contador + ". Ingresar peso: ");
		peso = parseInt(peso);	
		while(isNaN(peso) || peso<1 || peso >1000){
			peso = prompt(contador + ". Invalido, ingresar peso valida: ");
			peso = parseInt(peso);
		}

		temperatura = prompt(contador + ". Ingresar temperatura: ");
		temperatura = parseInt(temperatura);	
		while(isNaN(temperatura) || temperatura<-30 || temperatura >30){
			temperatura = prompt(contador + ". Invalido, ingresar temperatura valida: ");
			temperatura = parseInt(temperatura);
		}

		if (temperatura%2==0){ //a
			tempPares++;
		}

		if (contador == 1){ //b
			pesado = peso;
			tempPesa = temperatura;
			nombrePesa = nombre;
		} else {
			if(peso>pesado){
				pesado = peso;
				tempPesa = temperatura;
				nombrePesa = nombre;
			}
		}




		respuesta = prompt("Desea continuar? Ingrese 'no' para salir.");
	}

	alert("a) La cantidad de temperaturas pares es de: " + tempPares + "\n b) El nombre y temperatura del animal más pesado: " + nombrePesa + ", " + tempPesa + "\n c) La cantidad de animales que viven a menos de 0 grados : " + + "\n d) El promedio del peso de todos los animales :" + + "\n f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero: " + pesoMaxBajo + ", " + pesoMinBajo);
}
