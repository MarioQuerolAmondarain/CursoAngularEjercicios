const array = [77, 5, 6, 2, 9, 1, 8];
let arrayOredenado = [];
arrayOredenado[array.length-1] = undefined;


let menor = array[0];
let menorIndice = 0;
console.log("Array deosdenado");
console.log(array);
for(let i = 0; i < array.length; i++)
{
    menor = 99999;
    for (let j = 0; j < array.length; j++) 
    {
        const n = array[j];
        if(n === -1)
        {
            continue;
        }
     
        if(n%2 == 0)
        {
            arrayOredenado[j] = n;
            array[j] = -1;
            console.log(arrayOredenado);
            continue; 
        }

        if(n < menor)
        {
            menor = n;
            menorIndice = j;
        }
    }
    array[menorIndice] = -1;
    if(arrayOredenado[i] % 2 == 0 && !!arrayOredenado[i])
    {
        i++;
    }
    arrayOredenado[i] = menor;
}
console.log("Array ordenado");
console.log(arrayOredenado);