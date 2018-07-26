function mostrar()
{
	var sexo = prompt("Ingrese f ó m s/mayusculas.");
	while (sexo!="f" && sexo != "m"){
		sexo = prompt("Valor no valido, ingrese f ó m .")
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN