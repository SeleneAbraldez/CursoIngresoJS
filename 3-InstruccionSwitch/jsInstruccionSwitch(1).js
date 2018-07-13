function mostrar()
{
	var mesDelAño;

	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño){
		case "Enero":
			alert("Que bien que comienza el año!");
			break;
		case "Marzo":
			alert("A clases!");
			break;
		case "Julio":
			alert("Se viene las vacaciones!");
			break;
		case "Diciembre":
			alert("Felices Fiestas!");
			break;
		default:
			alert("Mes no valido");
	}





}//FIN DE LA FUNCIÓN