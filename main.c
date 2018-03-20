#include <stdio.h>
#include <stdlib.h>

int main()
{
    float base;
    float altura;
    float perimetro;
    float area;
    printf("Ingrese la base y la altura de un triangulo equilatero: ");

    scanf("%f", &base);
    scanf("%f", &altura);
    printf("la base es: %.2f \n y la altura es: %.2f",base, altura);
    perimetro=base*altura/2;
    area=base*3;
    printf("El area es: \n el perimetro es:",area,perimetro);


    return 0;
}
/*Realizar el algoritmo que pida la base y la altura de un triángulo equilátero, informar la superficie y el perímetro en una sola ventana alert.*/
