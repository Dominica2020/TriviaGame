/* ----------To Do---------
1: On start only containter one is visible
2: On start button click reveal second container and stat timer countdown
3. Create multiple choice quiz where only one anser can be selected
4. On timer ending end quiz and reveal results
5. Reset quiz
*/


//Start Game Function with Countdown//
function startButton() {
    $("#quiz").css("display", "block");
    $("#start").css("display", "none");
    
    var sec = 180;
        setInterval(function() {
          document.getElementById("countdown").innerHTML = sec + " Seconds";
          sec--;
          if (sec === 0) {
            document.getElementById("countdown").innerHTML = "TIME'S UP!";
            sec = 180;
            $("#start").css("display", "block");
          }
        }, 1000); 
}

//Quiz Questions & Answers Functions//









  
  

























  /*
  function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  */

 /*
 $("#countdown").text("03:00");
 */

 /* 
 ----Negative Countdown Function----
 $("#countdown").html(003 + ":" + 00);
startTimer();

function startTimer() {
  var presentTime = document.getElementById('countdown').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}

  document.getElementById('countdown').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
*/

/* ---- Countdown 3 ----
var countDown = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDown - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "TIME'S UP!";
  }
}, 1000);
*/

/*
var question1 = ["A", "B", "C", "D"];
var question2 = ["A", "B", "C", "D"];
var question3 = ["A", "B", "C", "D"];
var question4 = ["A", "B", "C", "D"];
var question5 = ["A", "B", "C", "D"];
var question6 = ["A", "B", "C", "D"];
var question7 = ["A", "B", "C", "D"];
var question8 = ["A", "B", "C", "D"];


var questions = {
    number: "1",
    answers: "A"
}
*/