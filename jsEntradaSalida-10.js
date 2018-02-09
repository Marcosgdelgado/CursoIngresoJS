/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var num1;
	var resultado;

	num1=document.getElementById('importe').value;

	num1=parseInt(num1);

	resultado=num1*0.25;
	resultado=num1-resultado;

	document.getElementById('resultado').value=resultado;
}
