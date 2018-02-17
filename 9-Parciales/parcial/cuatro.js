function Mostrar()
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
		resultado=numeroUno*numeroDos;

	}
	else 
	{
		if (numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
		}
		else
		{
			resultado=numeroUno+numeroDos;
		}

	}

		document.write(resultado);
	}










