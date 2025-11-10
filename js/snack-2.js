/*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const squadre = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    }
]

function generateRandomNumber(min, max)
{
    const difference = max - min;
    let result;

    result = min + Math.floor(Math.random() * (difference + 1));

    return result;
}

for(let key in squadre)
{
    squadre[key].puntiFatti = generateRandomNumber(0, 33);
    squadre[key].falliSubiti = generateRandomNumber(5, 35);
}

const newSquadre = [];

for(let key in squadre)
{
    let nuovaSquadra =
    {
        nome: "",
        falliSubiti: 0
    }

    nuovaSquadra.nome = squadre[key].nome;
    nuovaSquadra.falliSubiti = squadre[key].falliSubiti;

    newSquadre.push(nuovaSquadra);
}

console.log(newSquadre);