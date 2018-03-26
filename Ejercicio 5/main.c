#include <stdio.h>
#include <stdlib.h>

int main()
{
   int nota;
    printf("Ingrese una nota: ");
    scanf("%d", &nota);

    switch(nota)
    {
        case 0:
        case 1:
        case 2:
        case 3:
            printf("%d la proxima sera",nota);
            break;
        case 4:
        case 5:
        case 6:
            printf("%d raspando", nota);
            if (nota<5){printf(" debes esforzarte mas");
            }
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            printf("%d aprobo",nota);
            if(nota>8){
                printf(" muy bien");
            }
            break;
            default:
            printf("Ese numero no es valido");
            break;
    }




    return 0;
}
//diferencia entre swich de java y c, no puedo
