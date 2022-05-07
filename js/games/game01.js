
// STATIC VARS
var lastSelectedFruit = "";
var fruitNames = ["Tim", "Jesús", "Raúl", "Guerman", "Jazzinto", "Rob", "Peter Daems", "Philip", "Jeroen"];

function showRandomFruit() {
    const fruitName = getRandomFruitWithoutRepetition();

    document.getElementById("game01Board").innerHTML = fruitName.toUpperCase();
}


function getRandomFruitWithoutRepetition() {
    if (lastSelectedFruit != "") {
        var indexLastFruit = fruitNames.indexOf(lastSelectedFruit);
        fruitNames.splice(indexLastFruit, 1);
    }

    const randomNum = getRndInteger(0, fruitNames.length);

    if (lastSelectedFruit != "") {
        fruitNames.push(lastSelectedFruit)
    }

    lastSelectedFruit = fruitNames[randomNum];
    
    return fruitNames[randomNum];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

showRandomFruit();