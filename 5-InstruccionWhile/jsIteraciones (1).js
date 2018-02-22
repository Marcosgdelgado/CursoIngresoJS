function Mostrar()
{
	//alert('iteración while');
var contador;
contador=10;

while(contador<0)
{
	contador=contador++;
	document.write("<br> "+ contador);
	
}
	document.write("<br>sali "+ contador);
}//FIN DE LA FUNCIÓN

/* condicion del while siempre negativa o encontrar la verdadera e invertirla, pensar usando "mientras".
el contador siempre iniciado en 0
el contador del while siempre un numero mayor al contador while(contador<10)
contador++; = contador=contador+1
primero declarar contador, segundo ponerle un valor y tercero
*/
