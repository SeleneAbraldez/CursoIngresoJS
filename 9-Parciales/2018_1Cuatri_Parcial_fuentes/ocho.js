/*Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)*/

function mostrar()
{
	var letra;
	var numero;
	var respuesta = "si";
	var pares = 0;
	var impares = 0;
	var ceros = 0;
	var promPosi = 0;
	var contadorPosi = 0;
	var sumNega = 0;
	var letraMax;
	var numMax=-101;
	var letraMin;
	var numMin=101;


	while(respuesta != "no"){
		letra = prompt("Ingresar una letra:");

		numero = prompt("Ingresar un numero entre -100 y 100:"); 
		while (numero<-100 || numero>100){
			numero = prompt ("Numero no valido, ingresar numero entre -100 y 100:");
		}
		numero = parseInt(numero);

		if(numero>0){ //a
			pares ++;
			promPosi = promPosi + numero; //d
			contadorPosi ++;
		} else if (numero<0) { //b
			impares ++;
			sumNega = sumNega + numero; //e
		} else { //c
			ceros ++;
		}

		if(numero>numMax){
			numMax = numero;
			letraMax = letra;
		}

		if (numero<numMin) {
			numMin = numero;
			letraMin = letra;
		};

		respuesta = prompt("¿Desea continuar? Ingrese 'no' para salir")
	}


	document.write("<br>a) La cantidad de números pares es de " + pares + "<br>b) La cantidad de números impares es de " + impares + "<br>c) La cantidad de ceros es de " + ceros + "<br>d) El promedio de todos los números positivos ingresados es de " + promPosi/contadorPosi + "<br>e) La suma de todos los números negativos es de " + sumNega + "<br>f) El número y la letra del máximo: " + numMax + ", " + letraMax + " y el mínimo: " + numMin + ", " + letraMin);

}

/*
PRUEBA
a) La cantidad de números pares es de 3
b) La cantidad de números impares es de 1
c) La cantidad de ceros es de 2
d) El promedio de todos los números positivos ingresados es de 10
e) La suma de todos los números negativos es de -50
f) El número y la letra del máximo: 20, g y el mínimo: -50, d
*/