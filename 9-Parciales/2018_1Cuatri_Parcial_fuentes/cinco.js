function mostrar()
{
	var planeta;

	planeta=prompt("Ingresar un planeta s/mayusculas s/tildes");

	switch(planeta){
		case "tierra":
			alert("Acá vivimos.")
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "neptuno":
			alert("Acá hace más frio");
			break;
		case "venus":
		case "mercurio":
			alert("Aca hace más calor.");
			break;

		default:
			alert("Planeta no valido");
	}
}
