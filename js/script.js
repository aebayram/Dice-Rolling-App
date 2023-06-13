

function rollDice() {
    //$("#p1").text(`${prompt("1. Oyuncu Adı: ")}`)
    //$("#p2").text(`${prompt("2. Oyuncu Adı: ")}`)

    if (localStorage.getItem("score1") == null) {
        var score1 = 0;
        var score2 = 0;
    }
    else {
        score1 = Number(localStorage.getItem("score1"));
        score2 = Number(localStorage.getItem("score2"));

    }

    let dice1 = Math.ceil(Math.random() * 6)
    let dice2 = Math.ceil(Math.random() * 6)
    $(".img1").attr("src", `images/dice${dice1}.png`);
    $(".img2").attr("src", `images/dice${dice2}.png`);

    if (dice1 > dice2) {
        $("#result").text("🟢 Kazanan player 1" /*+ $("#p1").text()*/);
        score1++;
    }
    else if (dice1 < dice2) {
        $("#result").text("🟢 Kazanan player 2" /*+ $("#p2").text()*/);
        score2++;
    }
    else $("#result").text("🔴 Draw!");

    localStorage.setItem("score1", score1);
    localStorage.setItem("score2", score2);


    $("#score1").text(localStorage.getItem("score1"));
    $("#score2").text(localStorage.getItem("score2"));
}

function reset(){
    localStorage.clear();
    score1=0;
    score2=0;
    $("#score1").text(score1);
    $("#score2").text(score2);
}