setTimeout(function () {
    //random number generator function
    function diceRandom() {
        var x = Math.floor(Math.random() * 6) + 1;
        return x;
    }
    //generate two random numbers
    var p1 = diceRandom();
    var p2 = diceRandom();
    //display the dice according to the number generated
    document.querySelector(".img1").setAttribute("src", "./images/dice" + p1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + p2 + ".png");
    //display who won the round
    if (p1 > p2) {
        document.getElementById("heading").innerHTML = "Player 1 Wins 🚩";
    }
    else if (p2 > p1) {
        document.getElementById("heading").innerHTML = "🚩 Player 2 Wins";
    }
    else {
        document.getElementById("heading").innerHTML = "Draw";
    }
}, 500);