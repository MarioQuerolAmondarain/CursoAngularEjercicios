console.log(rotateLeft(4, [1, 2, 3 , 4, 5]));

function rotateLeft(d: number, arr: number[]): number[] 
{
    let numero: number;
    for(let i = 0; i < d; i++)
    {
        numero = arr.shift();
        arr.push(numero);
    }
    return arr;
}