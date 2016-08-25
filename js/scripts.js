var currentscore = 0;
var currentscore1 = 0;
var totalscore = 0;
var totalscore2 = 0;
var turn = 0;
var score = 0;
var score1 = 0;

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

function Player() {
  this.totalScore = 0;
}

var playerOne = new Player();
var playerTwo = new Player();

function update() {
    var d0 = $("#die0");
    var d1 = $("#die1");


        d0 = roll();
        d1 = roll();
        die0.innerHTML = d0;
        die1.innerHTML = d1;
          $("#pic").show();
        // score = d0 + d1;
        // score += currentscore + d1 + d0;
        // console.log(score);

        if (d0 === 1 || d1 === 1) {
            totalscore = 0;
          // $("#stopit").show();



        } else  {
            currentscore = d0 + d1;
            score += d1 + d0;
              // $("#pic").show();
              // $("#stopit").hide();
        }
        if(d0 === 1 || d1 === 1){
          $(".diceOne").hide();
          $(".diceTwo").show();
          // $("#stopit").show();
        } else if (d0 > 1 || d1 > 1){
          $(".diceOne").show();
          $(".diceTwo").hide();
          // $("#stopit").hide();
        }
}
function update1() {
    var d2 = $("#die2");
    var d3 = $("#die3");

        d2 = roll();
        d3 = roll();
        die2.innerHTML = d2;
        die3.innerHTML = d3;

        // score1 += d2 + d3;
        // console.log(score1);

        if (d2 === 1 || d3 === 1) {
            totalscore2 = 0;
            // $("#stopit").show();
            // $("#pic").hide();

        } else  {
            currentscore1 = d2 + d3;
            score1 += d2 + d3;
            // $("#pic").show();
            // $("#stopit").hide();


        }
        if(d2 === 1 || d3 === 1){
          $(".diceTwo").hide();
          $(".diceOne").show();
          // $("#stopit").show();

        }else if (d2 > 1 || d3 > 1){
          $(".diceTwo").show();
          $(".diceOne").hide();
          // $("#stopit").hide();

        }

}


$(document).ready(function(){
  $("#roll").click(function(event){
    event.preventDefault();




    totalscore += currentscore;
    $("#totalscore").text(totalscore);
    currentscore = 0;


  });
    $("#roll1").click(function(event){
      event.preventDefault();
    totalscore2 += currentscore1;
    $("#totalscore2").text(totalscore2);
    currentscore1 = 0;


  });

  $("#hold").click(function(event){
    event.preventDefault();

    console.log("hold: " + totalscore);
    console.log("totalscore: " + totalscore);
    $("#score").text(score);
    if(score >= 100){
      alert("You Win!");
    }
    console.log("totalscore2: " + totalscore2);
    $("#score1").text(score1);
    if(score1 >= 100){
      alert("You Win!");
    }
    console.log(totalscore2);
    if(turn === 1)
    {
      playerTwo.totalScore += currentscore1;
      currentscore1 = 0;
      turn = 0;
    }
  });
});
