function Mostrar()
/*Realizar el algoritmo que permita el ingreso por prompt de edades (validar entre 0 y 100) y el sexo (validar
el sexo “f” o “m”) de 100 personas, informar por alert:
a)
el promedio de edad.
b)
la edad más baja.
c)
la cantidad de varones que su edad sea mayor o igual a 20.*/
{
	var edad;
	var sexo;
	var acumulador=0;
	var edadMinima;
	var promedio;
	var flag=false;
	var contadorEdad=0;
	
	for (var i=0; i<3; i++)
	{
			edad=prompt("Ingrese una edad entre 0 y 100: ");
			edad=parseInt(edad);

			
		while(isNaN(edad) || edad<0 || edad>100)
		{
			edad=prompt("Error. Ingrese una edad entre 0 y 100, por favar:");
			edad=parseInt(edad);
		}acumulador+=edad;

			sexo=prompt("Ingrese un sexo: ");

		while(sexo != 'm' && sexo !='f')
		{
			sexo=prompt("Ingrese un sexo, m o f");
		}
		if(flag==false || edad<edadMinima)
			{
				edadMinima=edad;
					flag=true;
			}
		if(sexo =="m" && edad>=20)	
		{
			contadorEdad++;
		
		}



	}
	promedio=acumulador/i;
	document.write("Promedio de edad: "+promedio+"<br>"+"Edad mas baja: "+edadMinima+"<br>"+"Cantidad de varones mayores a 20: "+contadorEdad);

}
