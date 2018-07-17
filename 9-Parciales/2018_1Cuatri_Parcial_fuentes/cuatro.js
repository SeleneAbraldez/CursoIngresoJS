/*(IF)Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/
function mostrar()
{
	var num1;
	var num2;
	var resu;

	num1 = prompt("Igrense su primer numero");
	num2 = prompt("Igrense su segundo numero");

	if(num1==num2){
		resu = num1+num2;
	}else {
		num1=parseInt(num1);
		num2=parseInt(num2);
		if (num1>num2){
			resu = num1-num2;
		} else {
			resu= num1+num2;
			if (resu>10) {
				alert("La suma es " + resu + " y supera al 10.");
			}
		} 
	}  alert(resu);
//cuando lo hicimos en clase habia entendido que tenia que ser UN solo prompt, pero el enunciado dice que ademas de mostrar el resultado se muestra ese mensaje. 
//en el caso de que realmente sea con un solo prompt, y que no pueda tener mas de dos alerts, se me ocurre poner un if mas, pero debe haber una forma mejor de hacerla, investigar..
}
