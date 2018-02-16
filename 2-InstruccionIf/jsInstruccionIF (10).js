function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom

	numeroRandom= document.getElementById('FormIngreso').innerHTML;
	numeroRandom= Math.floor(Math.random() * 10) + 1;

	if(numeroRandom>=9)
	{
		alert(numeroRandom);
		alert("Excelente");
	}
	if (numeroRandom>4 && numeroRandom<9)
	{
		alert(numeroRandom);
		alert("Aprobo");

	}
	if (numeroRandom<3)
	{
		alert(numeroRandom);
		alert("¡Vamos! la proxima se puede");
	}
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