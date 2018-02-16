function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota

	nota= document.getElementById('FormIngreso').innerHTML;
	nota= Math.floor(Math.random() * 10) + 1;

	if(nota>8)
	{
		alert( nota + " Excelente");
	}
	else 
	{
		if(nota>3)
		{
			alert(nota + " Aprobo");
		}
		else 
		{
			alert(nota + " Vamos, la proxima se puede");
		}
	}
	
	
	/*if(numeroRandom>=9)
	{
		alert(numeroRandom + " Excelente");
	}
	if (numeroRandom>4 && numeroRandom<9)
	{
		alert(numeroRandom +" Aprobo");

	}
	if (numeroRandom<3)
	{
		alert(numeroRandom+" ¡Vamos! la proxima se puede");
		
	}*/
}
	/*if(numeroRandom<4)
	{
		alert(numeroRandom);
		alert("¡Vamos! la proxima se puede");
	}

		if(numeroRandom>4||numeroRandom<9)
		{
			alert(numeroRandom);
			alert("Aprobo");
		}
		if(numeroRandom<9)
		{
			alert(numeroRandom);
			alert("Excelente");
		}
}
	//FIN DE LA FUNCIÓN*/