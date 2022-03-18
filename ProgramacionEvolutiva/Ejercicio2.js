class Individuo
{
    parteEntera; // [] 16 bits
    parteNoEntera; // [] 16 bits
    fenotipo;
    aptitud;
    
    constructor(parteEntera, parteNoEntera)
    {
        
        this.parteEntera = parteEntera;
        this.parteNoEntera = parteNoEntera;
        this.fenotipo = 0;
        this.calcularFenotipo();
    }

    calcularFenotipo() 
    {
        this.fenotipo = parseFloat(parseInt(this.parteEntera,2) + "." + parseInt(this.parteNoEntera,2));
    }

    calcularAptitud(funcion)
    {
        this.aptitud = eval(funcion.replaceAll("x",this.fenotipo));
    }
}   

function crearPoblacionInicial()
{
    let poblacion = [];
    
    for (let i = 0; i < 100; i++)
    {
        let nuevoIndividuo;
        let parteNoEntera = "";
        let parteEntera = "";

        for (let x = 0; x < 16; x++)
        {
            let numeroPseudoAleatorio1 = (Math.random() > 0.5)? 1 : 0;
            parteNoEntera += numeroPseudoAleatorio1;
            
            
            let numeroPseudoAleatorio2 = (Math.random() > 0.5)? 1 : 0;
            parteEntera += numeroPseudoAleatorio2;
            
        }
        
        nuevoIndividuo = new Individuo(parteEntera, parteNoEntera);
        poblacion.push(nuevoIndividuo);
    }
    
   return poblacion;
}


function shuffleArray(inputArray)
{
    inputArray.sort(()=> Math.random() - 0.5);
}

function cruzar(poblacion)
{
    shuffleArray(poblacion);

    let length = poblacion.length;
    for (let x = 0; x < length; x++)
    {
        if(x % 2 != 0) continue;
         
        let papa = poblacion[x];
        let mama = poblacion[x+1];

        let mitadPapaEntera = papa.parteEntera.substring(papa.parteEntera.length/2, 0);
        let mitadMamaEntera = mama.parteEntera.substring(mama.parteEntera.length/2);
        
        let mitadPapaNoEntera = papa.parteNoEntera.substring(papa.parteNoEntera.length/2, 0);
        let mitadMamaNoEntera = mama.parteNoEntera.substring(mama.parteNoEntera.length/2);

        let parteEntera = mitadMamaEntera + mitadPapaEntera;
        let parteNoEntera = mitadMamaNoEntera + mitadPapaNoEntera;

        let parteEnteraArray = parteEntera.split("");
        shuffleArray(parteEnteraArray);
        parteEntera = parteEnteraArray.join("");

        let parteNoEnteraArray = parteNoEntera.split("");
        shuffleArray(parteNoEnteraArray);
        parteEntera = parteNoEnteraArray.join("");

        hijo = new Individuo(parteEntera,parteNoEntera);
        poblacion.push(hijo);
    }
}

function evaluar(poblacion, funcion) 
{
    for(let i = 0; i < poblacion.length; i++)
    {
        poblacion[i].calcularAptitud(funcion);
    }
}

function mutar(poblacion)
{
    poblacion.forEach(individuo => 
    {
        random = Math.random();
        if(random <= 0.2)
        {
            let bitCambiar = parseInt(Math.random()*14);
            individuo.parteEntera[bitCambiar] = (individuo.parteEntera[bitCambiar] == 0)? 1 : 0;
        }   
        
        if(random <= 0.1)
        {
            bitCambiar = parseInt(Math.random()*14+1);
            individuo.parteNoEntera[bitCambiar] = (individuo.parteNoEntera[bitCambiar] == 0)? 1 : 0;
        }
        
    });
}

function seleccionNatural(poblacion)
{
    var i, k, aux;
    for (k = 1; k < poblacion.length; k++) 
    {
        for (i = 0; i < (poblacion.length - k); i++) 
        {
            if (poblacion[i].aptitud < poblacion[i + 1].aptitud) 
            {
                aux = poblacion[i];
                poblacion[i] = poblacion[i + 1];
                poblacion[i + 1] = aux;
            }
        }
    }
    poblacion.splice(100, 50);
    return poblacion;
}


function algoritmoGenetico(poblacion,funcion)
{
    contador = 0;
    do {
        cruzar(poblacion);
        mutar(poblacion); 
        evaluar(poblacion, funcion);
        seleccionNatural(poblacion);
        superIndividuo = poblacion[poblacion.length-1];
        
        contador++; 
    } while(contador < 50);

    return superIndividuo;
}

let funcion = "- x * x";

let c = 0;
let index;
for (index = 0; index < 100; index++) 
{
    let poblacion = crearPoblacionInicial();
    superIndividuo = algoritmoGenetico(poblacion, funcion);
    
    if(superIndividuo.aptitud == 0)
    {
        c++;
    }
    else
    {
        console.log(superIndividuo.aptitud);
    }
}
console.log("0 => " + c + "/" + index);