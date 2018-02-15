function Mostrar()
{
var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);


if (edad<13)
{
	alert("niño");
}
else
{
	if(edad>17)
	{
		alert("mayor");

	}
	else
	{
		alert("adolescente");
	}
}
/*if(edad>=18)
{
alert("Es mayor");
} 
if(edad<=17&&edad>=13)
{
	alert("Es adolescente");
}
else
{	alert("Es niño");
}*/

}

//FIN DE LA FUNCIÓN
/*el codigo funciona, pero creo que se puede resumir.*/
/*programa falla cuando ingreso una edad mayor a 18*/
/*if(edad>=18)
{
alert("Es mayor");
} 
if(edad<=17&&edad>=13)
{
	alert("Es adolescente");
}
else
{	alert("Es niño");
}*/
/* if(edad>=18)
{
alert("Es mayor");
} 
if(edad<=17&&edad>=13)
{
	alert("Es adolescente");
}
if(edad<13)
{	alert("Es niño");
}
USAR TRES IF COMO ALTERNATIVA*/
