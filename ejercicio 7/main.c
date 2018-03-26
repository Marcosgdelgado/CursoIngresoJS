#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int main()
{
    int nota;
    char sexo;
    int edad;
    int i;
    int acumulador=0;
    float porcentaje;
    int notaBaja;
    char sexoBajo;
    int contadorVarones=0;
    int flag=0;
    int edadMinima;
    char sexoJoven;
    int notaJoven;
    int edadMujer;
    char notaMujer;
    int flagMujer=0;


    for (i=0; i<5; i++)
    {
        printf("\nIngrese sexo m o f: ");
        fflush(stdin);
        scanf("%c", &sexo);

        sexo= tolower(sexo);

        while(sexo!='f' && sexo!='m'){
            printf("Ingrese un sexo correcto: ");
            scanf("%c", &sexo);
            sexo= tolower(sexo);
        }

        printf("\nIngrese nota: ");
        scanf("%d", &nota);

        while(nota<=0 && nota>=10 ){
            printf("Ingrese una nota correcta: ");
            scanf("%d", &nota);
        }

        printf("\ningrese una edad: ");
        scanf("%d", &edad);
        while(edad<=0){
            printf("La edad no puede ser negativa. ");
        }

        acumulador+=nota;

        if(nota<notaBaja || flag== 0){
            notaBaja=nota;
            sexoBajo=sexo;
        }

        if(sexo=='m'&& nota>=6 && edad>17 )
        {
            contadorVarones++;
        }
         if(edad < edadMinima || flag == 0 ){
            edadMinima=edad;
            notaJoven=nota;
            sexoJoven=sexo;
            flag=1;

         }
         if(sexo=='f'&& flagMujer ==0)
         {
             edadMujer= edad;
             notaMujer=nota;
             flagMujer=1;
         }





    }
    porcentaje=(float) acumulador/i;
    printf("\nEl porcentaje es: %.2f", porcentaje);
    printf("\nla nota mas baja %d y sexo %c",notaBaja ,sexoBajo);
    printf("\nCantidad de varones mayores a 18 con nota mayor a 6: %d",contadorVarones);
    printf("\nEdad: %d y nota: %d de la primer mujer ingresada",edadMujer ,notaMujer);




    return 0;
}
