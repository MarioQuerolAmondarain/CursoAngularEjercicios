let array = [3, 4, 1, 5];

for(let i = 0; i < array.length; i++)
{
    let indice = 1;
    for(let j = 0; j < array.length - i; j++)
    {
        if(array[j] % 2 == 0)
            indice++;
        if(array[j] > array[j+indice])
        {
            let aux = array[j];
            array[j] = array[j+indice];
            array[j+indice] = aux;
        }
    }
}
console.log(array);