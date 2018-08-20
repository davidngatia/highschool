function check(){
var question1= document.quiz.question1.value;
var question2= document.quiz.question2.value;
var question3= document.quiz.question3.value;
var correct=0;

if (question1 === "JAVASCRIPT") {
correct++;
}

if (question2 === "ECMAscript") {
correct++;
}

if (question3 === "1995") {
correct++;
}

var messages = ["Exellent!", "Good trial", "Try again!"];

var range;

if (correct < 1)
{
range = 2;
}
if (correct > 0 && correct < 3){
range = 1;
}
if (correct > 2){
range = 0;
}

document.getElementById("message").innerHTML= messages[range];
document.getElementById("number_correct").innerHTML = "Your score is: " + correct + " correct ";
document.getElementById("after_submit").style.visibility = "Visible";
}
