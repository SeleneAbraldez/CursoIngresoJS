/*al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/
function mostrar()
{
	var mesDelAño;
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño) {
		case "Febrero":
			alert("Este mes no tiene mas que 29 dias.")
			break;
		default:
			alert("Este mes tiene 30 o mas dias.")
	}
	
	


}//FIN DE LA FUNCIÓN