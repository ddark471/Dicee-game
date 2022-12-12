function player1(player1){
    player1 = Math.ceil(Math.random()*6);

    if(player1 < 1) player1 = 1;
    else if(player1 > 6) player1 = 6;

    return player1;
};

function player2(player2){
    player2 = Math.ceil(Math.random()*6);

    if(player2 < 1) player2 = 1;
    else if(player2 > 6) player2 = 6;

    return player2;
};

window.onload = 
function player1__dice(dice1){
    dice1 = document.querySelectorAll(".player__image1");

    if(player1() == 1){
        dice1[0].classList.remove("inactive");
    }

    else if(player1() == 2){
        dice1[1].classList.remove("inactive");
    }

    else if(player1() == 3){
        dice1[2].classList.remove("inactive");
    }

    else if(player1() == 4){
        dice1[3].classList.remove("inactive");
    }

    else if(player1() == 5){
        dice1[4].classList.remove("inactive");
    }

    else if(player1() == 6){
        dice1[5].classList.remove("inactive");
    }
};

function player2__dice(dice2){
    dice2 = document.querySelectorAll(".player__image2");

    if(player2() == 1){
        dice2[0].classList.remove("inactive");
    }

    else if(player2() == 2){
        dice2[1].classList.remove("inactive");
    }

    else if(player2() == 3){
        dice2[2].classList.remove("inactive");
    }

    else if(player2() == 4){
        dice2[3].classList.remove("inactive");
    }

    else if(player2() == 5){
        dice2[4].classList.remove("inactive");
    }

    else if(player2() == 6){
        dice2[5].classList.remove("inactive");
    }
}

function checker(check){
    if(player1() < player2()){
        check = document.getElementById("round__title").innerHTML="Player2 won";

        return check;
    }

    else if(player1() == player2()){ 
        check = document.getElementById("round__title").innerHTML="Draw";
        return check;
    }

    else{
        check = document.getElementById("round__title").innerHTML="Player1 won";
        return check;
    };
}