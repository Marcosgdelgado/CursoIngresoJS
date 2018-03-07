function Mostrar()
{
	var importe;
	var resultado;

	importe=prompt("Ingrese un importe: ");
	importe=parseInt(importe);

	resultado=importe*0.25;
	resultado=importe-resultado;

	document.getElementById('importeFinal').value=resultado;
  
}



//Realiazar el algoritmo que lea un importe de un producto por prompt y muestre el importe final
//por ID descontando un (25%) por fin de temporada.