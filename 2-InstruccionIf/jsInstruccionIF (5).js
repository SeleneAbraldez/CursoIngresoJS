function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value; //tomo la edad  

// Con dos ifs
	/*if (edad > 17) { 
		alert("No ad");
	}

	if (edad < 12 ) {
		alert("No ad");
	} */

// Con dos ifs, anidado
	/*if(edad<18){
		if (edad>12){
	} 
	}else {
		alert("No adole");
	}*/

// Negando
	//if!( edad < 18 && edad > 12)

//Con ||
	if ( edad >= 18 || edad <= 13) { 
		alert("No Adol");
	} 

}//FIN DE LA FUNCIÓN