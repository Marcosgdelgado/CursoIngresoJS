function Mostrar()
{
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById('alrgo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	resultado=largo*2+ancho*2;

	resultado=resultado*3;
	
	alert("se necesitan "+resultado+" metros de alambre");


}
