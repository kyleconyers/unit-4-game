// console.log("test")

// possible target numbers
// possible gem numbers
// computer chooses target
// computer chooses gem numbers for EACH GEM
// once computer selects gem value, it cant be chosen again

// 
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//      console.log(computerGuess);



var wins = 0;
var losses = 0;
var currentGemTotal = 0;

var targetOptions = [21,24,27,30,33,36,39,42,45,]
// var targetOptions = [0]
var currentGemTotal = 0;

var targetResult = targetOptions[Math.floor(Math.random() * targetOptions.length)];
  console.log(targetResult);

var gemOptions = [3,7,8,11,16,17,]
// var gemOptions = [1]
var diamondResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(diamondResult);

var rubyResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(rubyResult);
  
var topazResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(topazResult);

var emraldResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(emraldResult);

var targetPrint = targetResult;
console.log(targetPrint)


$( document ).ready(function() {
  console.log( "ready!" );


//
//  function 
// var $=jQuery;

reloadPage = function(){

 targetOptions = [21,24,27,30,33,36,39,42,45,]
// var targetOptions = [0]



 targetResult = targetOptions[Math.floor(Math.random() * targetOptions.length)];
  console.log(targetResult);

 gemOptions = [3,7,8,11,16,17,]
// var gemOptions = [1]
 diamondResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(diamondResult);

 rubyResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(rubyResult);
  
topazResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(topazResult);

 emraldResult = gemOptions[Math.floor(Math.random() * gemOptions.length)];
console.log(emraldResult);

 targetPrint = targetResult;
console.log(targetPrint)

currentGemTotal = 0;
$(".countbox").text(currentGemTotal)
$(".targetbox").text(targetResult)
}

//cumulative gem score
// continue adding cumulative gem score 
//when button clicked, adds number to score count number
//number combine
//if number surpasses chosen number, add number to losses
//if number equals target number, add to wins

$(".wins").text(wins);
$(".targetPrint").text(targetResult);



// $(".clear").on("click", function() {
  
$(".diamond").click(function(){
 currentGemTotal += diamondResult;
 $(".countbox").text(currentGemTotal);
 console.log(currentGemTotal)
 if (currentGemTotal == targetResult){
  wins++;
   
   $(".wins").text(wins);
   $(reloadPage);
 }
 if (currentGemTotal > targetResult){
  losses++;
   
   $(".losses").text(losses);
   $(reloadPage);
 }
 });   


 $(".ruby").click(function(){
  currentGemTotal += rubyResult;
 $(".countbox").text(currentGemTotal);  
 console.log(currentGemTotal)
 if (currentGemTotal == targetResult){
  wins++;
   
   $(".wins").text(wins);
   $(reloadPage);
 }
 if (currentGemTotal > targetResult){
  losses++;
   
   $(".losses").text(losses);
   $(reloadPage);
 }
 });
 

 $(".topaz").click(function(){
  currentGemTotal += topazResult;
 $(".countbox").text(currentGemTotal);  
 console.log(currentGemTotal)
 if (currentGemTotal == targetResult){
  wins++;
   
   $(".wins").text(wins);
   $(reloadPage);
 }
 if (currentGemTotal > targetResult){
  losses++;
   
   $(".losses").text(losses);
   $(reloadPage);
 }
 });
 

 $(".emrald").click(function(){
  currentGemTotal += emraldResult;
  $(".countbox").text(currentGemTotal);
 console.log(currentGemTotal)
   if (currentGemTotal == targetResult){
 wins++;
  
  $(".wins").text(wins);
  $(reloadPage);
}
 if (currentGemTotal > targetResult){
  losses++;
   
   $(".losses").text(losses);
   $(reloadPage);
 }
 
});





  //  $(".wins").text("1");
  // console.log(currentGemTotal)
  // console.log(wins)





});

//  $(".diamond").on("click," function(){
//    (".wins").text(wins)

//  });

// if (currentGemTotal > targetResult){
//   losses++;
//   $("losses").text(losses);
// }


// $(".crystal-image").on("click", function() {

  
//   alert("You clicked a crystal!");

// });







// if (userGuess == computerGuess){
//   wins++;
//   userScore.innerHTML = wins;
//   guesses_so_far_element.innerHTML = "";
//   guessesLeft_count = 9;
//   guessesLeftElement.innerHTML = guessesLeft_count;
//   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//   console.log(computerGuess);
// }
// else if(guessesLeft_count == 0){
//   losses_count++;
//   lossesElement.innerHTML = losses_count;
//   guessesLeft_count = 9;
//   guessesLeftElement.innerHTML = guessesLeft_count;
//   guesses_so_far_element.innerHTML = "";



// }
 

// var currentGemTotal = 

// if(currentGemTotal == targetOptions){
//   wins++;
// }







// function newFunction(targetPrint, targetResult) {
//   function initializeGame() {
//     targetPrint = targetResult;
//     targetPrint.append(targetResult);
//     console.log(targetPrint);
//   }
//   return targetPrint;
// }
//  // Creates an array that lists out all of the options (a-z).
//  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//  // console.log(computerChoices[1]);

 


//  // , "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
//  // players letter Guess
//  var userGuess = document.getElementById("userGuess");
//  // the letters guessed so far
//  // var num_games = document.getElementById("guesses_so_far_element");
 
//  // games won by user, starts at 0
//  var userScore = document.getElementById("userScore");
//  var wins = 0;
//  // games won by computer, starts at 0
//  var lossesElement = document.getElementById("lossesElement");
//  var losses_count = 0;
//  // number of changes player has left to guess the letter, starts at 9
//  var guessesLeftElement = document.getElementById("guessesLeft");
//  var guessesLeft_count = 9;
//  // the letters the player has guessed so far
//  // var guesses_so_far_element = document.getElementById("guesses_so_far_element");
//  // e
//  // 
 
//  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//   console.log(computerGuess);
 

//  // This function is run whenever the user presses a key.
//  document.onkeyup = function(event) {
 
//    // Determines which key was pressed.
//    var userGuess = event.key;
//    var guesses_so_far_element = document.getElementById("guesses_so_far_element");
//    guesses_so_far_element.append(userGuess + " ");
//    guessesLeft_count--;
//    guessesLeftElement.innerHTML = guessesLeft_count;


   
//    if (userGuess == computerGuess){
//      wins++;
//      userScore.innerHTML = wins;
//      guesses_so_far_element.innerHTML = "";
//      guessesLeft_count = 9;
//      guessesLeftElement.innerHTML = guessesLeft_count;
//      computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//      console.log(computerGuess);
//    }
//    else if(guessesLeft_count == 0){
//      losses_count++;
//      lossesElement.innerHTML = losses_count;
//      guessesLeft_count = 9;
//      guessesLeftElement.innerHTML = guessesLeft_count;
//      guesses_so_far_element.innerHTML = "";



//    }
   
   



//  };


