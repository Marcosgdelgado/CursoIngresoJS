function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	 while(sexo!='f' && sexo!='m')
	 {
	 	sexo=prompt("Error, ingrese sexo correcto");
	 }

	 	if(sexo=='f')
	 	{
	 			sexo="femenino";
	 	}else
	 	{
	 		sexo="masculino";
	 	}



	document.getElementById('Sexo').value="su sexo es "+sexo;

}//FIN DE LA FUNCIÓN