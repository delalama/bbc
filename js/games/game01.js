
// STATIC VARS
var lastSelectedFruit = "";
var developerNames = ["Tim", "Jesús", "Raúl", "Guerman", "Jazzinto", "Rob", "Peter Daems", "Philip", "Jeroen"];

function showRandomDeveloper() {

    $(".game01Div").fadeOut();

    setTimeout(function () {
        const developerName = getRandomDeveloper();

        document.getElementById("game01Board").innerHTML = developerName.toUpperCase();
        $("#game01Board").show();
        
        $(".game01Div").fadeIn();

    }, 400);

}


function getRandomDeveloper() {
    if (lastSelectedFruit != "") {
        var indexLastFruit = developerNames.indexOf(lastSelectedFruit);
        developerNames.splice(indexLastFruit, 1);
    }

    const randomNum = getRndInteger(0, developerNames.length);

    if (lastSelectedFruit != "") {
        developerNames.push(lastSelectedFruit)
    }

    lastSelectedFruit = developerNames[randomNum];
    
    return developerNames[randomNum];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
