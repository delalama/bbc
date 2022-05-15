$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


const games = ["#home", "#game01", "#game02", "#game03", "#game04", "#game05"];

function load(option) {
    showGame(option);

    actionDependingOption(option);
}


function actionDependingOption(option) {
    switch (option) {
        case '1':
            showRandomDeveloper();
          break;
        case '5':
            showRandomShortcut();
          break;
        default:
            null;
    }
}

function showGame(game) {

    games.forEach(gameSelector => {
        gameSelector == games[game] ?
            $(games[game]).show() :
            $(gameSelector).hide();
    })

}