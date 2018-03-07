function Mostrar()
{
	numeroUno=prompt("Ingrese un numero: ");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese un numero: ");
	numeroDos=parseInt(numeroDos);

	resultado= numeroUno+numeroDos;

	if(resultado>0)
		{
			document.write(resultado+" Es positivo");
		}else if(resultado<0)
		{
			document.write(resultado+" Es negativo");

			}	else
				{
					document.write(resultado+ " Es cero");
				}
			

			
}


/*Realizar el algoritmo que pida dos números por prompt, lo sume e informe si el resultado de la suma
“positivo”,” negativo” o “cero” por document.write.*/ 
