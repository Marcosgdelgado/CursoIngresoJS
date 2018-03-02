function Mostrar()
{	
	var numero;
	numero=prompt("Ingrese un numero: ");
	numero=parseInt(numero);
	var contador=0;

	for(i=0; i<numero; i++)
	{
		if(numero % i == 0 	)
		{
			contador==3;
			break;
		}
		if(contador==2)
		{
			alert("Es primo");
		}else
		{
			alert("No es primo");
		}
	}




}//FIN DE LA FUNCIÓN