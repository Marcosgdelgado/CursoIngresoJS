/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno=1;
	var numeroDos=2;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	
	var resultado= numeroUno+numeroDos;

	var numeroUno=parseInt("1");
	var numeroDos=parseInt("2");


	alert("el resultado es "+resultado);
}

