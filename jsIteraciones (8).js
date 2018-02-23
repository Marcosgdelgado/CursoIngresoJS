function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	var respuesta='si';

	while(respuesta=='si')
	{
		contador++;
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);

		if(numero>1)
		{
			respuesta=numero+numero
		}





		respuesta= prompt("para continuar, si");
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN