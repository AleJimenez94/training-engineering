const typeChart = {
    "fire" : {
        "grass": 2,
        "water": 0.5,
        "electric": 1
    },
    "grass" : {
        "fire": 0.5,
        "water": 2,
        "electric": 1
    },
    "water" : {
        "fire": 2,
        "grass": 0.5,
        "electric": 0.5
    },
    "electric" : {
        "fire": 1,
        "grass": 1,
        "water": 2
    }
}

let pikachu = {
    name: "Pikachu",
    type: "electric",
    attack: 50,
    defense: 50
}
let charmander = {
    name: "Charmander",
    type: "fire",
    attack: 80,
    defense: 30
}
let squirtle = {
    name: "Squirtle",
    type: "water",
    attack: 30,
    defense: 80
}
let bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    attack: 60,
    defense: 40
}

function getEffectiveness(typeAtk,typeDef) {
    if (typeAtk == typeDef) {
        return effectiveness = 0.5;
    }
    else {
        return typeChart[typeAtk][typeDef]
    }
}

function damage(pokemonATK, pokemonDEF) {
    let attack = pokemonATK.attack;
    let defense = pokemonDEF.defense;
    let typeAtk = pokemonATK.type;
    let typeDef = pokemonDEF.type;
    let effectiveness = getEffectiveness(typeAtk, typeDef);
    
    return Math.round(50*(attack/defense)*effectiveness);
}

let result = damage(charmander, squirtle);
console.log(result);