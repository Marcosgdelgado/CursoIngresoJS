function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch (mesDelAño)
{
	case "Julio":

	case "Agosto":
	 		alert("Abrigrate que hace frio");
	 		break;

	case "Enero":
	
	case "Febrero":

	case "Marzo":

	case "Junio":
			alert("Ya paso el frio! ahora viene el calor!");
			break; 		
}


}//FIN DE LA FUNCIÓN