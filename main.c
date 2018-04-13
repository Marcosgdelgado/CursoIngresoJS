#include <stdio.h>
#include <stdlib.h>
#include "funciones.h"

int main()
{
    char seguir='s';
    int opcion=0;
    float numero_uno;
    float numero_dos;
    float resultado;


    while(seguir=='s')
    {
        printf("1- Ingresar 1er operando (A=x)\n");
        printf("2- Ingresar 2do operando (B=y)\n");
        printf("3- Calcular la suma (A+B)\n");
        printf("4- Calcular la resta (A-B)\n");
        printf("5- Calcular la division (A/B)\n");
        printf("6- Calcular la multiplicacion (A*B)\n");
        printf("7- Calcular el factorial (A!)\n");
        printf("8- Calcular todas las operacione\n");
        printf("9- Salir\n");

        scanf("%d",&opcion);

        switch(opcion)
        {
            case 1: printf("ingrese un numero: ");
                    scanf("%f", &numero_uno);
                break;
            case 2:
                break;

            case 3: printf("Ingrese un numero: ");
                    scanf("%f", &numero_uno);
                    printf("Ingrese un numero: ");
                    scanf("%f", &numero_dos);
                    resultado= numero_uno+numero_dos;
                    printf("La suma total es: %.2f", resultado);
                break;

            case 4:  printf("Ingrese un numero: ");
                    scanf("%f", &numero_uno);
                    printf("Ingrese un numero: ");
                    scanf("%f", &numero_dos);
                    resultado= numero_uno-numero_dos;
                    printf("La resta total es: %.2f", resultado);
                break;

            case 5:  printf("Ingrese un numero: ");
                    scanf("%f", &numero_uno);
                    printf("Ingrese un numero: ");
                    scanf("%f", &numero_dos);
                    while(numero_dos <= 0 || numero_dos>numero_uno )
                    {
                       printf("numero no valido, vuelva a intentar: ");
                       scanf("%f", &numero_dos);

                    }
                    resultado= numero_uno/numero_dos;
                    printf("La division total es: %.2f", resultado);
                break;

            case 6:  printf("Ingrese un numero: ");
                    scanf("%f", &numero_uno);
                    printf("Ingrese un numero: ");
                    scanf("%f", &numero_dos);
                    resultado= numero_uno*numero_dos;
                    printf("La multiplicacion total es: %.2f", resultado);
                break;

            case 7: printf("Ingrese un numero: ");
                    scanf("%2f", &numero_uno);


                    printf("%f", resultado);
                break;
            case 8:
                break;
            case 9:
                seguir = 'n';
                break;
        }


    return 0;

}
}
