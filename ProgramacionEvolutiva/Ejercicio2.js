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
        // if(x % 2 != 0) continue;
         
        let papa = poblacion[x];
        random = parseInt(Math.random()*(length-1));
        let mama = poblacion[random];

        let mitadPapaEntera = papa.parteEntera.substring(papa.parteEntera.length/2, 0);
        let mitadMamaEntera = mama.parteEntera.substring(mama.parteEntera.length/2);
        
        let mitadPapaNoEntera = papa.parteNoEntera.substring(papa.parteNoEntera.length/2, 0);
        let mitadMamaNoEntera = mama.parteNoEntera.substring(mama.parteNoEntera.length/2);

        let parteEntera = mitadMamaEntera + mitadPapaEntera;
        let parteNoEntera = mitadMamaNoEntera + mitadPapaNoEntera;
        
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
        if(random <= 0.2)// 20% de mutabilidad
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

function seleccionNatural()
{
    /*
        Ordenar por aptitud y así eliminar los cincuenta peores  
    */ 
    var i, k, aux;
    // Algoritmo de burbuja
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
    // console.log(poblacion);
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
        
        // console.log(poblacion);
        console.log(superIndividuo.aptitud);
        contador++; 
    } while(contador < 50);

    // console.log(superIndividuo);
}

let funcion = "- x * x"; 
let poblacion = crearPoblacionInicial();
algoritmoGenetico(poblacion, funcion);

//console.log(poblacion);