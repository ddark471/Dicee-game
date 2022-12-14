
let player1 = Math.floor(Math.random()*6)+1;
let player2 = Math.floor(Math.random()*6)+1;

let dice1 = 'images/dice' + player1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', dice1);

let dice2 = 'images/dice' + player2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', dice2);

window.onload = function checker(check){
    if(player1 < player2){
        check = document.getElementById("round__title").innerHTML="Player2 won";

        return check;
    }

    else if(player1 == player2){ 
        check = document.getElementById("round__title").innerHTML="Draw";
        return check;
    }

    else{
        check = document.getElementById("round__title").innerHTML="Player1 won";
        return check;
    };
};

