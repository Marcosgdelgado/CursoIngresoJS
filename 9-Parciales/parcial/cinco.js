function Mostrar()

{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;

	numeroUno=prompt("Ingrese un numero:");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese un numero:");
	numeroDos=parseInt(numeroDos);

	numeroTres=prompt("Ingrese un numero:");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos&numeroTres)
	{
		resultado=numeroUno;
	}
	
	else if(numeroDos>numeroUno&numeroDos>numeroTres)
	{

		resultado=numeroDos;
		
	} 
		else
		{
			resultado=numeroTres;
		}
	
		alert("El mayor es: "+resultado);
}





/*{
	var dia;
	dia=prompt("Ingrese día: ");

	switch(dia)
	{
		case "Sabado":
		case "Domingo":
			alert("Es fin de semana!!");
				break;

	}
}*/
