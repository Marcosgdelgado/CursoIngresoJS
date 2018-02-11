function Mostrar()
{
var edad

edad=document.getElementById('edad').value;
edad=parseInt(edad);


if(edad>=18)
{
alert("Es mayor");
} 
if(edad<=17&&edad>=13)
{
	alert("Es adolescente");
}
else
{alert("Es niño");
}



}//FIN DE LA FUNCIÓN
/*el codigo funciona, pero creo que se puede resumir.*/
