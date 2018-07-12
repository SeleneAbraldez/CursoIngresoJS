function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value; //tomo la edad  
//MUCHOS IF
	/*if (edad > 17) { 
		alert("Mayor de edad");
	}

	if ( edad < 18 && edad > 12) { 
		alert("Adolescente");
	} 

	if ( edad < 13) { 
		alert("Niño");
	} */

	if (edad > 17) { 
		alert("Mayor de edad");
	}else { 
		if ( edad < 18 && edad > 12) { 
			alert("Adolescente");
		}else { 
			alert("Niño");
		}
	}
}//FIN DE LA FUNCIÓN