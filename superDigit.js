

{
    let n = "148";
    let k = 3;

    let suma = 0;
    for(let i = 0; i < n.length; i++)
    {
        suma += parseInt(n[i]);
    }
    console.log(superDigitDeVerdad(suma*k));
}

function superDigitDeVerdad(n)
{
    console.log(n);
    if(Math.trunc(n/10) == 0)
    {
        return n;
    }

    let suma = 0;
    let aux = 0;
    while((Math.trunc(n/10)) != 0 || n%10 != 0)
    {
        aux = n%10;
        suma += aux;
        n = Math.trunc(n/10);
    }
    return superDigitDeVerdad(suma);
}