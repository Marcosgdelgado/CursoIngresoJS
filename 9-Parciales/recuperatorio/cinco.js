function Mostrar()
{
	mes=prompt("Ingrese un mes: ");

	mes=mes.toLowerCase();
	switch(mes)
	{
		case "diciembre":
			alert("Se vienen las fiestas");
			break;

		case "enero":	
			alert("Comienza el año");
			break;

		default:
			alert("No es Enero, ni Diciembre");	
	}	
}



/*Realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert “Se
vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario informar por alert
“no es enero, ni diciembre”.*/ 

