
function Mostrar()
{
var base;
var altura;
var lado=3;
var resultadoPerimetro;
var resultadoSuperficie;

base=document.getElementById('laBase').value;
base=parseInt(base);

altura=prompt("ingrese altura");
altura=parseInt(altura);

resultadoPerimetro=base*lado;
resultadoSuperficie=altura*base/2;




alert("El perimetro es "+resultadoPerimetro);
alert("La superfcie es "+resultadoSuperficie);
}





//perdir base y altura por triangulo equilatero
//e informar superfcie