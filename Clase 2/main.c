#include <stdio.h>
#include <stdlib.h>

int main()
{
    char nombre[20];
    char localidad[20];
    printf("ingrese nombre: ");
    //scanf("%s", &nombre);
    gets(nombre);

    printf("ingrese su localidad: ");
    scanf("%s", &localidad);

    printf("Su nombre es %s y vive en: %s \n\n ", nombre, localidad);
    return 0;
}
