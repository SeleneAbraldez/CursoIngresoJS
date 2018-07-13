/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al 
mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz"
 se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento 
es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca 
un 5%.
E.	Si el importe final con descuento suma más de $120  se debe 
sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantLamp;
 	var marca;
 	var precioLamp;
 	var precioFinal;
 	var IIBB;


 	cantLamp = document.getElementById('Cantidad').value; 
 	marca = document.getElementById('Marca').value; 
 	precioLamp = cantLamp * 35;

 	if (cantLamp > 5 ) { // A
 		precioFinal = precioLamp - ((precioLamp * 50) / 100);
 	} else {
 		if (cantLamp == 5) { // B
 			if (marca == "ArgentinaLuz") { // B -Arg
 				precioFinal = precioLamp - ((precioLamp * 40) / 100);
 			} else { // B -resto
 				precioFinal = precioLamp - ((precioLamp * 30) / 100);
 			 }
 		} else { 
 			if (cantLamp == 4) { // C
 				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") { // C -Ar/Fe
 					precioFinal = precioLamp - ((precioLamp * 25) / 100);
 				} else { // C -resto
 					precioFinal = precioLamp - ((precioLamp * 20) / 100);
 				} 
 			} else { 
 				if (cantLamp == 3 ) { // D
 					if (marca == "ArgentinaLuz") { // D -Ar
 						precioFinal = precioLamp - ((precioLamp * 15) / 100);
 				  	} else { 
 				 		if (marca == "FelipeLamparas") { // D-Fel
 							precioFinal = precioLamp - ((precioLamp * 10) / 100);
 						 } else {
							precioFinal = precioLamp - ((precioLamp * 5) / 100); // D -resto
				 	 	}
 				  	} 
 				} else {
 					precioFinal = precioLamp;
 				} 
 			} 
 		}  
 	 } 
 	 
 	 if (precioFinal > 120) {
 	 	IIBB = (precioLamp * 10) /100 ;
 	 	alert("Usted pago "+ IIBB +" de IIBB.");
 	 	precioFinal = precioFinal + IIBB;
 	 }



 	document.getElementById('precioDescuento').value = precioFinal; 

}
