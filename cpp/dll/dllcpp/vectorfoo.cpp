#include "vectorfoo.h"

void sort(int *a, int length){
   for (int j = 0; j < length-1; j++) {
         for (int i = 0; i < length-j-1; i++) {
             if (a[i] > a[i+1]) {
                 int b = a[i];
                 a[i] = a[i+1];
                 a[i+1] = b;
             }
         }
     }
}
