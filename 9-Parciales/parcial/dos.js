function Mostrar()
{
  
    var importe;
    var resultado;

    importe=prompt("Ingrese importe:");
    importe=parseInt(importe);
    
    resultado=importe*0.21;
    resultado=importe+resultado;
    

	document.getElementById('importeFinal').value=resultado;
	
}