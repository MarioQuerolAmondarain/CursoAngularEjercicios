/* 
    VERSIÓN QUE REALIZA LA ORDENACIÓN DE MANERA ASCENDENTE SIN TENER EN CUENTA NINGUNA CONDICIÓN
*/
const array = [77, 5, 6, 2, 9, 1, 8];
let arrayOredenado = new Array(array.length);

let menor = array[0];
let menorIndice = 0;
console.log(array);
for(let i = 0; i < array.length; i++)
{
    menor = 999999999;
    for (let j = 0; j < array.length; j++) 
    {
        const n = array[j];
        if(n == -1)
        {
            continue;
        }
        
        if(n % 2 == 0)
        {
            arrayOredenado[j] = n;
            array[j] = -1;
            continue;
        }

        if(n < menor)
        {
            menor = n;
            menorIndice = j;
        }
    }
    array[menorIndice] = -1;
    if(arrayOredenado[i] % 2 == 0)
    {
        i++;
    }
    arrayOredenado[i] = menor;
}
console.log(arrayOredenado);