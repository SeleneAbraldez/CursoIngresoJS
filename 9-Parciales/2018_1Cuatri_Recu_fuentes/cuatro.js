/*(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/
function mostrar()
{	/*
	var num1;
	var num2; 
	var divi;
	var sum;
	var resu;

	num1 = prompt("Ingrese su primer numero;");
	num2 = prompt("Ingrese su segundo numero;");

	if (num1 == num2) {
		resu = num1 + num2;
		alert("Su resultado es: " + resu);
	} else {
		num1 = parseInt(num1);
		num2 = parseInt(num2);

		if (num1 > num2) {
			resu = num1/num2;
			alert("Su resultado es: " + resu);
		} else {
			resu = num1+num2;
			if (resu < 50) {
				alert("La suma es " + resu + " y es menor a 50");
			}  else {
				alert("Su resultado es: " + resu);
			}
		}
	}
*/	
	var num1;
	var num2; 

	num1 = prompt("Ingrese num1: ");
	num2 = prompt("Ingrese num2: ");

	if (num1 == num2) {
		alert(num1+num2);
	} else {
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		if(num1>num2){
			alert(num1/num2);
		} else {
			if (num1+num2 < 50) {
				alert("La suma es " + (num1+num2) + " y es menor a 50.")
			} else {
				alert(num1+num2);
			}
		}
	}



}
