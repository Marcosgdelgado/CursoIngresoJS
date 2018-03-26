#include <stdio.h>
#include <stdlib.h>

int main()
{
    float precio;
    float descuento;
    float resultado;
    float resultadoDos;
    float iva;
    float precioFinal;

    printf("Ingrese un precio: ");
    scanf("%f", &precio);

    printf("Ingrese un descuento: ");
    scanf("%f", &descuento);

    resultado= precio*descuento/100;

    resultadoDos=precio - resultado;

    iva= resultadoDos * .21;

    precioFinal= resultadoDos+ iva;

    printf("El descuento es: %.2f", resultado);
    printf("\nEl precio con descuento es %.2f", resultadoDos);
    printf("\nEl iva es %.2f", iva);
    printf("\nEl precio final es %.2f", precioFinal);

    return 0;
}
