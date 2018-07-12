function mostrar()
{
	var edad;
	var estado;

	edad = document.getElementById('edad').value; //tomo la edad
	estado =  document.getElementById('estadoCivil').value; //tomo el estado

	if (edad < 18  &&  estado != "Soltero") { 
		alert("Es muy pequeñx para NO ser solterx.");
	} 

}//FIN DE LA FUNCIÓN