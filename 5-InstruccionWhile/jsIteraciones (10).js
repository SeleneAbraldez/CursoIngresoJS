/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 
3-Cantidad de positivos. 4-Cantidad de negativos. 5-Cantidad de ceros.
6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos).*/
function mostrar()
{

	var contador=0;
	var numero;
	var negativos=0;
	var positivos=0;
	var cantPosi = 0;
	var cantNega = 0;
	var cantCero = 0;
	var resto;
	var cantPares = 0;
	var promPosi = 0;
	var promNega = 0;
	var difere = 0;
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero: ")
		numero = parseInt(numero);

		if(numero<0){ //1, 4
			negativos = negativos + numero;
			cantNega ++;
		} else if (numero>0) { //2, 3
			positivos = positivos + numero;
			cantPosi ++;
		} else { // 5
			cantCero ++;
		}

		resto = numero%2; //6
		if (resto == 0){
			cantPares ++;
		}


		respuesta = prompt("Ingrese 'no' para salir.")
	}

	promPosi = positivos / cantPosi; //7
	promNega = negativos / cantNega; //8

	difere = positivos - negativos; //9

	document.write("1. La suma de numeros negativos es: " + negativos + "<br>2. La suma de numeros positivos es: " + positivos + "<br>3. La cantidad de numeros positivos es: " + cantPosi + "<br>4. La cantidad de numeros negativos es: " + cantNega + "<br>5. La cantidad de ceros es de: " + cantCero + "<br>6. La cantidad de numeros pares es de: " + cantPares + "<br>7. El promedio de numeros positivos es de: " + promPosi + "<br>8. El promedio de numeros negativos es de: " + promNega + "<br>9. La diferenicia entre p y n es de: " + difere);

}//FIN DE LA FUNCIÓN