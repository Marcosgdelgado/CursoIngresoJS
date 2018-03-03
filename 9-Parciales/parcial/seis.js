
//Agregamos contador de dia con mayor ingreso de importe.


function Mostrar()
{
	var importe;
	var importeMayor;
	var importeMenor;
	var diaMaximo;
	var diaMinimo;
	var contador=0;

	
	while(contador<5 )
	{	
		contador++;
		importe=prompt("Ingrese un valor: ");
		importe=parseInt(importe);	
			
	//for(var cont=0; cont<7; cont++)
	 	while(isNaN(importe)|| importe<0)
		{
		importe=prompt("Ingrese un valor, por favor: ");
		importe=parseInt(importe);
		}
		if(contador==1)
		{
			diaMaximo=contador;
			importeMayor=importe;
			importeMenor=importe;
			diaMinimo=contador;
		}else
		{
			if(importe>importeMayor)
			{
				diaMaximo=contador;
				importeMayor=importe;
				
			}else if(importe<importeMenor)
			{				
				importeMenor=importe;
				diaMinimo=contador;
				
			}
		}


	}

		document.write("Importe mayor es: $ "+importeMayor+"<br>"+" Importe Menor es: $ "+importeMenor+"<br>"+"Dia mayor importe: "+diaMaximo+"<br>"+"Dia menor importe: "+diaMinimo);
		
}
