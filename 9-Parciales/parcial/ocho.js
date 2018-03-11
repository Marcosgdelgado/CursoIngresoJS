function Mostrar()
//ingresar tres datos hasta que el cliente quiera 
//los datos son: nombre del animal, peso del animal(mayor a 0) y temperatura del habitat(entre -40 a +40).
//informar: nombre del animal mas pesado, nombre del animal de la temp mas baja, 
//la cantidad de temp pares que se ingresaron, promedio de peso de todos los animales, temp max y min.
{
	var nombre;
	var peso;
	var temperatura;
	var temperaturaMinima=0;
	var pesoMaximo=0;
	var seguir=true;
	var flag=false;
	var acumuladorPeso=0;
	var promedio;
	var contador=0;
	var temperaturaPar=0;
	var temperaturaMaxima=0;
	var animalPesado;
	var animalFrio;
	while(seguir==true)

	{
		nombre=prompt("Ingrese nombre de animal: ");
		peso=prompt("Ingrese peso de animal: ");
		peso=parseInt(peso);
		temperatura=prompt("Ingrese temperatura de habitat entre -40° y 40°: ");
		temperatura=parseInt(temperatura);
		contador++;
		
		while(isNaN(peso) || peso<0)
			{
				peso=prompt("Ingrese un peso por favor: ");
				peso=parseInt(peso);
			} 
		while(isNaN(temperatura) || temperatura<-40 || temperatura>40)
			{
				temperatura=prompt("Ingrese una temperatura entre -40° y 40°, por favor: ");
				temperatura=parseInt(temperatura);
			}	
				acumuladorPeso+=peso;
		
		if(temperatura%2==0 && temperatura<0 && temperatura==0)
		{
			temperaturaPar++;
		}		
		
		if(flag==false || peso>pesoMaximo )
			{
				pesoMaximo=peso;
				animalPesado=nombre;
				
				
			}

		if(flag==false || temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
				animalFrio=nombre;
				
			}
		if(flag==false || temperatura>temperaturaMaxima)
			{
				temperaturaMaxima=temperatura;
				flag=true;
			}		




		seguir=confirm("Desea continuar ?");
	}	

		promedio=acumuladorPeso/contador;
	document.write("Nombre del animal mas pesado: "+animalPesado+" "+pesoMaximo+"kg"+ "<br>"+ "Nombre del animal con temperatura mas baja: "+animalFrio+" "+temperaturaMinima+"°"+"<br>"+"Temperatura Maxima: "+temperaturaMaxima+"°"+"<br>"+"Promedio de pesos ingresados: "+promedio);
	document.write("<br>"+"Cantidad de temperaturas par: "+temperaturaPar);
}



/*
{
	var numero;
	var seguir=true;
	var cantPares=0;
	var contador=0;
	var acumulador=0;
	var flag=false;
	var maximo;
	var minimo;
	var promedio;

	while(seguir==true)
	{	
		numero=prompt("Ingrese un numero"),
		numero=parseInt(numero);

		while(numero<=0)
		{
			numero=prompt("ingrese un numero");
			numero=parseInt(numero);

		}

		if(numero%2==0)
		{
			cantPares++;
		}

		acumulador+=numero;
		if(flag==false|| numero<minimo)
		{
			minimo=numero;
			
		}
		if(flag==false || numero>maximo)
		{
			maximo=numero;
			flag=true;
			
		}
		contador++;
		
		seguir=confirm("desea ingresar otro?");


	}

	promedio=acumulador/contador;

	document.write("promedio: "+ promedio+"<br>");
	document.write("sumatoria: "+acumulador+"<br>");
	document.write("maximo: "+maximo+"<br>"+ "minimo: "+minimo);
}
*/ 