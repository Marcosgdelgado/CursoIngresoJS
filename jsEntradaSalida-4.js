/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre= prompt("ingresa tu nombre");
	document.getElementById('elNombre').value=nombre;

}
/* segun de que lado este get del = toma el dato o lo pide
si no tira error, probar cambiandolo de lado
*/
