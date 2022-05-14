$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


const games = ["#home", "#game01", "#game02", "#game03", "#game04"];

function load(option) {
    showGame(option);
}


function showGame(game) {

    games.forEach(gameSelector => {
        gameSelector == games[game] ?
            $(games[game]).show() :
            $(gameSelector).hide();
    })

}