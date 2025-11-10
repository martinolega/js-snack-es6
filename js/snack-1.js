/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore.
*/

const racingBikes = [
    {
        name: "firstBike",
        weight: 100
    },
    {
        name: "secondBike",
        weight: 50
    },
    {
        name: "thirdBike",
        weight: 80
    },
    {
        name: "fourthBike",
        weight: 30
    }
];

const lightestBike = {
    name: "",
    weight: racingBikes[1].weight
}

for(let key in racingBikes)
{
    if(racingBikes[key].weight <= lightestBike.weight)
    {
        lightestBike.name = racingBikes[key].name;
        lightestBike.weight = racingBikes[key].weight;
    }
}

console.log("La bici più leggera è " + lightestBike.name);