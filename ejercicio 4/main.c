#include <stdio.h>
#include <stdlib.h>

int main()
{   int numeroUno;
    int numeroDos;
    float resultado;

    printf("Ingrese un numero: ");
    scanf("%d", &numeroUno);

    printf("Ingrese un numero: ");
    scanf("%d", &numeroDos);

    if (numeroUno==numeroDos)
    {
        printf("El resultado es: %d %d",numeroUno,numeroDos);
    }

    else if(numeroUno>numeroDos)
    {
            if(numeroDos !=0){

            resultado= (float)numeroUno/numeroDos;

               printf("El resultado es: %.2f", resultado);
               }else{

               printf("No se puede dividir por 0");
                    }

    }  else
    {
        resultado=numeroUno+numeroDos;
        printf("El resultado es: %.2f", resultado);

        if(resultado<50)
        {
            printf(" Y es menor a 50");
        }
    }


    return 0;
}
