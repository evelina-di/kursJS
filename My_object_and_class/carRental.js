import Car from "./script.js";

const toyota = new Car(
    "Yaris",
    "white",
    3,
    5,
    false,
    false
);

const fiat = new Car(
    "Punto",
    "black",
    5,
    5,
    false,
    true
);

const opel = new Car(
    "Astra",
    "Silver",
    3,
    5,
    false,
    true
);

console.log("The car availabe:", opel);
console.log("The car availabe:", fiat);
console.log("Is the engine on in Toyota?", toyota.engineOn);
