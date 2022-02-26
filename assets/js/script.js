var playNow = document.querySelector("btn-play");
var firstQuestion = document.querySelector("html-q");

var playNow = function() {
   playNow.addEventListener(MouseEvent, ("click"));
   firstQuestion();
   firstAnswers();
}

var firstQuestion = function() {
    firstQuestion = document.getElementById("question");
}

var firstAnswers = function() {
    firstAnswers = document.getElementById("html-a");
}