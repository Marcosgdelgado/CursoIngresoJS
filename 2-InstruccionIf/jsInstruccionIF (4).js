function Mostrar()
{
//tomo la edad  
var edad 

edad=document.getElementById('edad').value;
edad=parseInt(edad);


if(edad<=17&&edad>13)
{
	alert("Es adolesente ");
}

else
{
	alert("no es adolesente");
}



}//FIN DE LA FUNCIÓN