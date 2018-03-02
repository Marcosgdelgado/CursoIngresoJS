function Mostrar()
{
	var numero;
	var contador=0;

	 numero=prompt("Ingrese un numero: ");
	 numero=parseInt(numero);

	while(isNaN(numero))
	{
		numero=prompt("ingrese un numero por favor");
		numero=parseInt(numero);
	}
		for(var i=1; i<numero; i++)
		{
			if( i % 2 == 0 )
			{
				contador++;
				console.log(i);
				document.write(i+"<br>");
			}		
			
			
			
		}

}//FIN DE LA FUNCIÓN