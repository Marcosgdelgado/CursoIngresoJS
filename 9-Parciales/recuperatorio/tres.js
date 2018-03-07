function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;


	precioUno=document.getElementById('precioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('precioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('precioTres').value;
	precioTres=parseInt(precioTres);

	resultado=precioUno+precioDos+precioTres;

	promedio=resultado/3;

	alert("El precio total es: "+resultado);
	alert("El promedio de los precios es: "+promedio);
}
