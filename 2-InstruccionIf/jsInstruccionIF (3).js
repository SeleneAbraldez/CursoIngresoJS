function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value; //tomo la edad  

//Con dos ifs
	/*if (edad >= 18) { 
		alert("Mayor de edad");
	}

	if (edad < 18) {
		alert("Menor de edad");
	} */

//Con bloque else 
	if (edad > 17) { 
		alert("Mayor de edad");
	} else {
		alert("Menor de edad");
	}

}//FIN DE LA FUNCIÓN