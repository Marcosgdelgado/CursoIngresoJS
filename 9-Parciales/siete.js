

function Mostrar()
{
	var nota;
	var sexo;
	var acumulador=0;
	var contador=0;
	var sacarMinimo=0;
	var minimo;
	


	for (var i=0 ; i<3; i++)
	{	
		nota=prompt("Ingreso nota: ");
		nota= +(nota);
		
		while(isNaN(nota) || nota<0||nota>10)
		{
			nota=prompt("ingrese un numero: ");
			nota= +(nota);
		}
		
		sexo=prompt("Ingrese 'm' para masculino o 'f' para femenino: " );
		while( sexo!='f'&& sexo!='m')
		{
			sexo=prompt("Ingrese sexo");
		}
		
		acumulador+=nota;
		
		
		if(sacarMinimo==0)
		{
			sacarMinimo++;
			minimo=nota;
		}
		if(minimo>nota)
		{
			minimo=nota;
		}
		if(nota>5 && sexo=='m')
		{
			contador++;
		}
		
	}

	document.write("Promedio de notas: "+acumulador/i+"<br>"+ "Nota mas baja: "+minimo +"<br>"+ "Cantidad de varones con nota mayor a 6: "+contador);
}




/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
 el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
  a) el promedio de las notas totales. 
  b) la nota más baja. 
  c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/
  //while(isNaN(nota) || nota<0||nota>10)
		//{
		//	nota=prompt("ingrese un numero: ");
		//	nota= +(nota);
		//}
//Puedo declarar un var promedio y hacer promedio= acumulador/i.
	//si quisiera saber el promedio de los varones
	// hacer If(contador!=0){document.write("Promedio de notas: "+acumulador/i+"<br>"+ "Nota mas baja: "+minimo +"<br>"+ "Cantidad de varones con nota mayor a 6: "+contador);}
	//else{ alert("no hay alumnos para calcular el promedio")}