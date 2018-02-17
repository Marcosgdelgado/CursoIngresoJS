/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero
function comenzar()
{
	
	numeroSecreto=Math.floor(Math.random() * 100)+1;
	console.log(numeroSecreto);
	
	contadorIntentos=0;
}//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );


function verificar()
{
	numero=document.getElementById('numero').value;
	document.getElementById('intentos').value=contadorIntentos;
	console.log(contadorIntentos++);

	if (numeroSecreto==numero)
	{
		alert("usted es el ganador!! y en "+contadorIntentos+" intentos" );
	}
	else
	{
		if(numeroSecreto>numero)
			alert("Falta...");
		else
			alert("Te pasaste...");
	}

	if (contadorIntentos>10)
	{
		alert("Alcanzaste el nº maximo de intentos");
		return;
	}
}
	
	