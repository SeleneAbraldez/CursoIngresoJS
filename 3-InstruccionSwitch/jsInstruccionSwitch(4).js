function mostrar()
{ //Ejericio corregido, me faltaba punto y coma, break
	var mesDelAño;
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño) {
		case "Febrero":
			alert("28 dias.")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "noviembre":
			alert("30 dias.");
			break;
		default:
			alert("31 dias.")
	}

}//FIN DE LA FUNCIÓN