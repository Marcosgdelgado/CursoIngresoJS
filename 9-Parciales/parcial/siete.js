

function Mostrar()
{
	var nota;
	var sexo;
	var acumulador=0;
	var contador=0;
	
	prompt=("Ingrese 'm' para masculino o 'f' para femenino: " );
	for(i=0; i>6; i++)
	{
		while( sexo!='f'&& sexo!='m')
		{
			sexo=prompt("Ingrese sexo");
		}

		while(nota<0||nota>10)
		{
			nota=prompt("ingrese un numero: ");
			nota= +(nota);
		}

		acumulador+=nota;
		if(i==0)
		{
			minimo=nota;
		}
		if(nota>5 %% sexo=='m')
		{
			contador++;
		}
	}
}




/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) 
 el sexo (validar el sexo “f” o “m”) de 100 alumnos, informar por alert:
  a) el promedio de las notas totales. 
  b) la nota más baja. 
  c) la cantidad de varones que su nota haya sido mayor o igual a 6.*/