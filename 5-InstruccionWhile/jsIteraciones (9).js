function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{	
		numero=prompt("Ingrese un numero ");
		numero=parseInt(numero);
		while (isNaN(numero))
		{
			numero=prompt(	numero);
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
		respuesta=prompt("desea continuar ? ");

	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}



//FIN DE LA FUNCIÓN
// confirm