var difficulty;
var targetNumber;
var player1Input = $('player1');
var player2Input = $('player2');
var player3Input = $('player3');
var player4Input = $('player4');
var min = 1;
var max;
$(document).ready(function(){

//append text to message-field displaying game-modes selected
    $('#easyMode').on('click', function(){
      $('.message-field').empty();
      $('.message-field').append('<p>You have selected "Easy Mode", click Start begin!<p>');
      difficulty = "easy";
    });
    $('#mediumMode').on('click', function(){
      $('.message-field').empty();
      $('.message-field').append('<p>You have selected "Medium Mode", click Start begin!<p>');
      difficulty = "medium";
    });
    $('#hardMode').on('click', function(){
      $('.message-field').empty();
      $('.message-field').append('<p>You have selected "Hard Mode", click Start begin!<p>');
      difficulty = "hard";
    });

    $('#startButton').on('click', function(){
      gameSelector();
    });

gamePlay();

});//end of document.ready

//selecting game-mode and setting parameter
function gameSelector(){
  switch (difficulty) {
    case "easy":
      min;
      max = 10;
      random(min,max);
        console.log("Select a number between 1-10");
      break;
    case "medium":
      min;
      max = 100;
        console.log("Select a number between 1-100");
      break;
    case "hard":
      min;
      max = 10,000;
        console.log("Select a number between 1-10,000");
      break;

    default:
  }
};

//retrieving players' inputs and complarin
function gamePlay(){
  $('#submitButton').on('click', function(){

  player1Input = $('#player1').val();

  });


};
