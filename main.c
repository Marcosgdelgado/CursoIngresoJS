#include <stdio.h>
#include <stdlib.h>

int main()
 {
     char nombre [5][20];
     int sueldo [5][15];
     char sexo [5][1];

     for (int i=0; i<5; i++){
        printf("Ingrese nombre por favor: ");
        gets(nombre[i]);

        printf("ingrese sueldo: ");
        scanf("%d", &sueldo[i]);

        printf("ingrese sexo: ");
        gets(sexo[i]);
     }

 }



