function Mostrar()
//ingresar tres datos hasta que el cliente quiera 
//los datos son: nombre del animal, peso del animal(mayor a 0) y temperatura del habitat(entre -40 a +40).
//informar: nombre del animal mas pesado, nombre del animal de la temp mas baja, 
//la cantidad de temp pares que se ingresaron, promedio de peso de todos los animales, temp max y min.
/*{
	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitat;
	var maxPeso;
	var minTemperatura;
	var temperaturaPar;
	var respuesta="si";
	var contador=0;
	var temperaturaPar;
	var temperatudaMin;
	

	for(i=0; ; i++)
	{
		while(respuesta!="no")
		{			
			nombreAnimal=prompt("Ingrese nombre del animal: ");
	
			pesoAnimal=prompt("Ingrese peso del animal: ");
			pesoAnimal=parseInt(pesoAnimal);

			temperaturaHabitat=prompt("Ingrese temperatura del habitad: ");
			temperaturaHabitat=parseInt(temperaturaHabitat);

			while(isNaN(pesoAnimal) && pesoAnimal>0)
			{
				pesoAnimal=prompt("Ingrese peso por favor");
				pesoAnimal=parseInt(pesoAnimal);
			}
				while(isNaN(temperaturaHabitat) || temperaturaHabitat<-41 || temperaturaHabitat>40)
				{
					temperaturaHabitat=prompt("Ingrese una temperatura por favor");
					temperaturaHabitat=parseInt(temperaturaHabitat);
				}
	
		
					if(contador==0)
					{
						contador++;
						pesoAnimal=nombreAnimal;
						pesopesado=peso;
						minTemperatura=temperaturaHabitat;
						nombrefrio=nombre;
						temperatudamax=temperatuda;
					}
				else
			{
				if()
			}

		

			respuesta=prompt("Desea continuar ?");
		}

	}	
		document.write(nombreAnimal+ "El peso maximo es "+pesoAnimal+" La temperatura de su habitat es: "+temperaturaHabitat);
	
}*/
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
			flag=true;
		}

		contador++;
		seguir=confirm("desea ingresar otro?");


	}

	promedio=acumulador/contador;

	document.write("promedio: "+ promedio+"<br>");
	document.write("sumatoria: "+acumulador+"<br>");
	document.write("maximo: "+maximo+ "minimo: "+minimo+"<br>");




















}