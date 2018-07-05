/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// w3s -> var person = prompt("Please enter your name", "Harry Potter");

	var nombre; //variable guarda nombre alert muestra

	/*nombre = "Selene"; -nombre estatico
	alert(nombre);*/

	nombre = prompt("Ingrese su nombre", "Nombre");
	alert("Su nombre es: " + nombre); 
}

