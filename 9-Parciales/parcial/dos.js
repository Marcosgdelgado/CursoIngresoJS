function Mostrar()
{
  
    var a;
    var b;
    var resultado;
    
 
  	prompt("Ingrese un importe");
	a=document.getElementById('importeFinal').value;
	a=parseInt(a);
    
    b=0.21;
    resultado= a*b;
	document.getElementById('importeFinal').value=resultado;
	parseInt(resultado);
}