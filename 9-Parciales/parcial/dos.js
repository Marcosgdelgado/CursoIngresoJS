function Mostrar()
{
  var importe;
  var descuento;
  var resultado;

  importe=prompt("ingrese importe");
  importe=parseInt(importe);

  descuento=prompt("ingrese un descuento");
  descuento=parseInt(descuento);

  resultado=importe*descuento;
  resultado=resultado/100;
  resultado=importe-resultado;

  document.getElementById('importeFinal').value=resultado;
}





