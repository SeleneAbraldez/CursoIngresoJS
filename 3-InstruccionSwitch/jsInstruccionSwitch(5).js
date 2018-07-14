function mostrar()
{ //codigo ams limpio
	var laHora; 
	var laHora = document.getElementById('hora').value;
	laHora = parseInt(laHora);

	switch(laHora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
		default:
			alert("No valido/No es de mañana");
	}

}