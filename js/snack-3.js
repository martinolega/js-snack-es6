/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS
*/

const array1 = [1,2,"Ciao",{name: "Barak",surname: "Obama"},3.14,Math.PI];
let array2;
const min = 2;
const max = 3;

function copyPartialArray(array, min, max)
{
    const result = [];
    if(min < 0)
    {
        min = 0;
    }

    for(i = min; i < array.length && i <= max; i++)
    {
        result.push(array1[i]);
    }

    

    return result;
}

array2 = copyPartialArray(array1, min, max);
console.log(array2);