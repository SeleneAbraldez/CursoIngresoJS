function mostrar()
{
	var edad;
	edad = document.getElementById('edad').value; //tomo la edad  

// Con dos ifs, anidado
	/*if(edad<18){
		if (edad>12){
			alert("Adole");
		}
	}*/

//Con &
	if ( edad < 18 && edad > 12) { 
		alert("Adol");
	} 

}