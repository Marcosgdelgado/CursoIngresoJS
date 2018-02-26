function Mostrar()
{
	var numero
	numero = prompt("ingrese un numero");
	numero = parseInt(numero);

	while(isNaN(numero))
	{
		numero= prompt(numero);
		numero = parseInt(numero);
	}

	for(numero=0 ; numero<100 ; numero++)
	{
		document.write(numero);
		
	}



}//FIN DE LA FUNCIÓN