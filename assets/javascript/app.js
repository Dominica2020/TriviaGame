/* ----------To Do---------
1: On start only containter one is visible
2: On start button click reveal second container and stat timer countdown
3. Create multiple choice quiz where only one anser can be selected
4. On timer ending end quiz and reveal results
5. Reset quiz
*/

//Global Variables
var correct = 0;
var incorrect = 0;
var value = "";
var unanswered = 0;

//Start Game Function with Countdown//
function startButton() {
  $("#start").css("display", "none");
  $("#quiz").css("display", "block");
  $("#results").css("display", "none");

  var sec = 80;
  setInterval(function () {
    document.getElementById("countdown").innerHTML = sec + " Seconds";
    sec--;
    if (sec === 0) {
      $("#quiz").css("display", "none");
      $("#results").css("display", "block");
    }
  }, 1000);

}

//Quiz Functions//
function quizTime() {
  if (value = " ") {
    correct++;
    unanswered = (correct + incorrect - 8) * (-1);
  }
  //HTML Updates
  document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
  document.getElementById("incorrect").innerHTML = "Incorrect Answers: " + incorrect;
  document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
}

function wrongAnswer() {
  if (value = " ") {
    incorrect++;
    unanswered = (correct + incorrect - 8) * (-1);
  }
  //HTML Updates
  document.getElementById("correct").innerHTML = "Correct Answers: " + correct;
  document.getElementById("incorrect").innerHTML = "Incorrect Answers: " + incorrect;
  document.getElementById("unanswered").innerHTML = "Unanswered: " + unanswered;
}



/* Calculation Notes
var x = 2;
var y = 3;
console.log((x + y - 8) * (-1));
*/