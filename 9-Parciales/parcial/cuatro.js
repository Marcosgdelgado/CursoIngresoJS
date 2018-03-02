
function Mostrar()
//ingresamos dos numeros, si son iguales los concatenamos, 
//si el priemro es mayor que el segundo los multiplicamos y si el primero es menos que el segundo lo restamos.
//para concatenar numeros y que no se sumen hacer usar Nº+""+Nº ej: 5+""+5= 55
{
	var numeroUno
	var numeroDos
	var resultado

	
	numeroUno=prompt("Ingrese un numero");
	numeroUno=parseInt(numeroUno);
	
	numeroDos=prompt("Ingrese un numero");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;

	}
	else 
	{
		if (numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
			if (resultado%2==0 && resultado!=0)
			{
				resultado=resultado + " es par";			
			}
		}
		
		else
		{
			resultado=numeroUno-numeroDos;
		}

	}

		document.write("El resultado es " +resultado);
	}










