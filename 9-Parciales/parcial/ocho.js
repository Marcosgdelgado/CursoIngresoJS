function Mostrar()
//ingresar tres datos hasta que el cliente quiera 
//los datos son: nombre del animal, peso del animal(mayor a 0) y temperatura del habitat(entre -40 a +40).
//informar: nombre del animal mas pesado, nombre del animal de la temp mas baja, 
//la cantidad de temp pares que se ingresaron, promedio de peso de todos los animales, temp max y min.
{
	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitat;
	var maxPeso;
	var minTemperatura;
	var temperaturaPar;
	var respuesta="si";
	var contador;
	

	
	while(respuesta!="no")
	{
		contador++;
		nombreAnimal=prompt("Ingrese nombre del animal: ");
	
		pesoAnimal=prompt("Ingrese peso del animal: ");
		pesoAnimal=parseInt(pesoAnimal);

		temperaturaHabitat=prompt("Ingrese temperatura del habitad: ");
		temperaturaHabitat=parseInt(temperaturaHabitat);

		while(isNaN(pesoAnimal)|| pesoAnimal>0)
		{
			pesoAnimal=prompt("Ingrese peso por favor");
			pesoAnimal=parseInt(pesoAnimal);
		}
		while(isNaN(temperaturaHabitat)|| temperatuda<-41 || temperatuda>40)
		{
			temperaturaHabitat=prompt("Ingrese una temperatuda por favor");
			temperaturaHabitat=parseInt(temperaturaHabitat);
		}
	
		
		if(contador==1)
		{
			nombrePesado=nombre;
			pesopesado=peso;
			minTemperatura=temperatuda;
			nombrefrio=nombre;
			temperatudamax=temperatuda;
		}
		else
		{
			if()
		}

		

		respuesta=prompt("Desea continuar ?");
	}

	document.write(nombreAnimal+ "El peso maximo es "+pesoAnimal);
}
