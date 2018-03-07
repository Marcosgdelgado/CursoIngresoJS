/*Realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”) de cada uno de los 50
contenedores (pedir 50 veces) de un deposito por prompt, e informar cual fue el más pesado y cuál fue el
menos pesado.*/
function Mostrar()
{
	var kilos;
	var contenedorMin;
	var contenedorMax;
	var flag=false;

	
	for(var i=0 ; i<3 ; i++)
	{
			kilos=prompt("Ingrese un peso en kilos: ");
			kilos=parseInt(kilos);
		while(isNaN(kilos) || kilos==0)
		{
			kilos=prompt("Por favor, vuelva a ingresar otro peso en kilos: ");
			kilos=parseInt(kilos);
		}

		if(flag==false || kilos>contenedorMax)
		{
			contenedorMax=kilos;
		}
		if(flag==false || kilos<contenedorMin)
		{
			contenedorMin=kilos
			flag=true;
		}

	}

	document.write("Contenedor más pesado: "+contenedorMax+" Kilos"+"<br>"+"Contenedor menos pesado: "+contenedorMin+" Kilos");








}
