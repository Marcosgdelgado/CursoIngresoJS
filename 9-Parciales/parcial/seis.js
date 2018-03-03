function Mostrar()
{
	var importe;
	var importeMayor=1;
	var importeMenor=1;
	var contador=0;
	var contadorDia=0;

	
	while(contadorDia<25 )
	{	
		contadorDia++;
		importe=prompt("Ingrese un valor: ");
		importe=parseInt(importe);	
			
	
	 	while(isNaN(importe)|| importe<0)
		{
		importe=prompt("Ingrese un valor, por favor: ");
		importe=parseInt(importe);
		}
		if(contadorDia==1)
		{
			importeMayor=importe;
			importeMenor=importe;
		}else
		{
			if(importe>importeMayor)
			{
				importeMayor=importe;
				
			}else if(importe<importeMenor)
			{
				importeMenor=importe;
				
			}
		}


	}

		document.write("Importe mayor es: $ "+importeMayor+"<br>"+" Importe Menor es: $ "+importeMenor);
		
}
