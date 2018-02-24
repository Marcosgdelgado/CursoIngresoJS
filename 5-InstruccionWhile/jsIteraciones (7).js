function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	
	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt(numero);
			numero=parseInt(numero);

		}

		if (contador==0)
		{
			contador++;
			maximo=numero;
			minimo=numero;
		}
			else
			{
				if(numero>maximo)
				{
					maximo=numero;
				} else if(numero<minimo)
					{
						minimo=numero;
					}
			}		

		acumulador+=numero;
		//acumulador=acumulador+numero;

		respuesta= prompt("para continuar, si");
	}




	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN