function mostrar()
{
 	var edad;
	var estado;

	edad = document.getElementById('edad').value; //tomo la edad
	estado =  document.getElementById('estadoCivil').value; //tomo el estado

	if (edad > 18  &&  estado == "Soltero") { 
		alert("Es solterx y no es menor.");
	} 
	


}//FIN DE LA FUNCIÓN