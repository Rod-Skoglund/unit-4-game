// *************************************************
// Class - Coding Bootcamp MW 
// Assignment #4 - Crystal Collector Game
// Author: Rod Skoglund
// File: game.js
// *************************************************

// Declare Variables
var randomTarget;
var blueGemValue;
var redGemValue;
var greenGemValue;
var yellowGemValue;
var crystalsArr = ["blue", "red", "green", "yellow"];
var crystalValueArray = [0, 0, 0, 0];
var currentWinCount = 0;
var currentLossesCount = 0;
var currentUserScore = 0;
var gemImgArr = ["assets/images/blue-crystal.jpg", "assets/images/red-crystal.jpg", "assets/images/green-crystal.jpg", "assets/images/yellow-crystal.jpg"]


// Define links to page elements
// var currentTarget = document.getElementById("target");
// var winCount = document.getElementById("wins");
// var lossesCount = document.getElementById("losses");
// var userScore = document.getElementById("score");

function debugScript() {
    // console.log("activeWord = " + activeWord);
    // console.log("usedLetters = " + usedLetters);
    // console.log("winCount = " + winCount);
    // console.log("remainingGuesses = " + remainingGuesses);
    // console.log("correctLetterCount = " + correctLetterCount);
    // console.log("newGame = " + newGame);
    // console.log("wordToDisplay = " + wordToDisplay);
    // console.log("activeGuess = " + activeGuess);
    // console.log("incorrectGuess = " + incorrectGuess);
    // console.log("activeWord.length = " + activeWord.length);
    // console.log("notAlreadyGuessed = " + notAlreadyGuessed);
    console.log("*****************************");
}

$(document).ready(function() {    

    //initialize target and gem values
    function initializeRandomValues() {
        randomTarget = Math.floor((Math.random() * 120) + 19);
        currentUserScore = 0;

        for (var i = 0; i < crystalsArr.length; i++) {
            var tempRandom = Math.floor((Math.random() * 12) + 1);
            //Ensure the numbers are unique
            if (crystalValueArray.indexOf(tempRandom) == -1) {
                crystalValueArray[i] = tempRandom;
            }
            else {
                i--;
            }
        }
    }

    //Get initial random values
    initializeRandomValues();
    console.log("randomTarget = " + randomTarget);
    console.log("crystalValueArray[0] = " + crystalValueArray[0]);
    console.log("crystalValueArray[1] = " + crystalValueArray[1]);
    console.log("crystalValueArray[2] = " + crystalValueArray[2]);
    console.log("crystalValueArray[3] = " + crystalValueArray[3]);

    //initialize Target Display
    var TargetDiv = $(".empty-div-target");
    // var newTargetDiv = $("<div>" + randomTarget + "</div>");
    newTargetDiv = $("<div>");
    newTargetDiv.text(randomTarget);
    TargetDiv.append(newTargetDiv);
    TargetDiv.attr("class", "target");
    
    //initialize Win-Loss Display
    var WinLossDiv = $(".empty-win-lose");
    var newWinP = $("<p>");
    var newWinCountSpan = $("<span>");

    newWinP.text("Wins: ");
    newWinCountSpan.text(currentWinCount);
    newWinP.append(newWinCountSpan);

    WinLossDiv.append(newWinP);
    WinLossDiv.attr("class", "win-lose");

    var newLossP = $("<p>");
    var newLossCountSpan = $("<span>");

    newLossP.text("Losses: ");
    newLossCountSpan.text(currentLossesCount);
    newLossP.append(newLossCountSpan);

    // var newLossDiv = $("<div><p>Losses: " + currentLossesCount + "</p></div>");
    WinLossDiv.append(newLossP);
    WinLossDiv.attr("class", "win-lose");

    //initialize User Score Display
    var userScoreDiv = $(".empty-div-score");
    // var newScoreDiv = $("<div>" + currentUserScore + "</div>");
    newScoreDiv =$("<div>");
    newScoreDiv.text(currentUserScore);
    userScoreDiv.append(newScoreDiv);
    userScoreDiv.attr("class", "score");
    
    //initialize gemstones display
    for (var k = 0; k < crystalsArr.length; k++) {
        var gemImage = $("<img>");
        gemImage.addClass("gemstones-img");
        gemImage.attr("gemColor", crystalsArr[k]);
        gemImage.attr("src", gemImgArr[k]);
        console.log("gemImage.attr('gemColor') = " + gemImage.attr("gemColor"));
        $(".empty-gemstones").append(gemImage);
    }

    function updateDisplay() {
        //update display
        newTargetDiv.text(randomTarget);
        newWinCountSpan.text(currentWinCount);
        newLossCountSpan.text(currentLossesCount);
        newScoreDiv.text(currentUserScore);
        console.log("currentUserScore = " + currentUserScore);
        // if (userState) {
        //     alert("Congrats, You Win. Press OK to start a new game.");
        // }
        // else {
        //     alert("Sorry, You lose. Press OK to start a new game.");
        // }
    }    

    //Process gem selection event

    //on gem click
    $(".gemstones-img").on("click", function() {
        var GemColorSelected = $(this).attr("gemColor");
        console.log("gem selectted = " + GemColorSelected);
        
        //add specific gem value to user score
        currentUserScore += crystalValueArray[crystalsArr.indexOf(GemColorSelected)];
        console.log("currentUserScore = " + currentUserScore);

        //update user score display
        newScoreDiv.text(currentUserScore);

        if (currentUserScore >= randomTarget) {
            if (currentUserScore === randomTarget) {
                currentWinCount++;
                updateDisplay();
                updateDisplay();
                updateDisplay();
                updateDisplay();
                console.log("before alert currentUserScore = " + currentUserScore);
                console.log("before alert currentUserScore = " + currentUserScore);
                console.log("before alert currentUserScore = " + currentUserScore);
                // newScoreDiv.text(currentUserScore);
                alert("Congrats, You Win. Press OK to start a new game.");
            }
            else {
                currentLossesCount++;
                console.log("before alert currentUserScore = " + currentUserScore);
                updateDisplay();
                updateDisplay();
                updateDisplay();
                updateDisplay();
                console.log("before alert currentUserScore = " + currentUserScore);
                console.log("before alert currentUserScore = " + currentUserScore);
                console.log("before alert currentUserScore = " + currentUserScore);
                // newScoreDiv.text(currentUserScore);
                alert("Sorry, You lose. Press OK to start a new game.");               
            }
            
            initializeRandomValues();
            console.log("randomTarget = " + randomTarget);
            console.log("crystalValueArray[0] = " + crystalValueArray[0]);
            console.log("crystalValueArray[1] = " + crystalValueArray[1]);
            console.log("crystalValueArray[2] = " + crystalValueArray[2]);
            console.log("crystalValueArray[3] = " + crystalValueArray[3]);
            // updateDisplay();

        }

    })
        
        //if user score >= target
            //if user score = target
                //increment current win count
                //update win count display
                //alert user that they won and that a new game will start when they press OK
            //else
                //increment current losses count
                //update losses count display
                //alert user that they lost and that a new game will start when they press OK
            //end if user score - target
                //get new random values (target and all four gems)
            //set user score to 0
            //update disply to show new target and user score of 0
        //end if - user score = target
    // end gem click

    

});
    