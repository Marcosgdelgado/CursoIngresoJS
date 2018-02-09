/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{	var num1;
	var num2;
	var suma;

	num1= document.getElementById('numeroUno').value;
	num2= document.getElementById('numeroDos').value;
	num1= parseInt(num1);
	num2= parseInt(num2);

	suma= num1+num2;
	alert("la suma es " +suma);
}

/*var numeroUno=1;
	var numeroDos=2;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	

	var numeroUno=parseInt("1");
	var numeroDos=parseInt("2");
	var resultado= numeroUno+numeroDos;


	alert("el resultado es "+resultado);*/