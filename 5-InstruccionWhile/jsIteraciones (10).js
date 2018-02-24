function Mostrar()
{

	var contador=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var numero;
	var contadorPositivos=contadorNegativos=contadorCeros=contadorPares=0;
	


	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese un numero ");
		numero=parseInt(numero);

		while(isNaN(numero))
		{
			numero=prompt(numero);
			numero=parseInt(numero);

		}
			if(numero>0)
			{
				contadorPositivos++;
				acumuladorPositivo+numero;
			} else if (numero<0)
				{
					contadorNegativos++;
				}else 
					{
						contadorCeros++;
					}


			
	}
}


//FIN DE LA FUNCIÓN
/*1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos*/