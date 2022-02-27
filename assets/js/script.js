var playNow = document.getElementById("play");
var questionList = document.getElementById("quiz-questions");
var nextButton = document.getElementById("next");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("buttonContainer");
//var choice1 = document.getElementById("choice1");
//var choice2 = document.getElementById("choice2");
//var choice3 = document.getElementById("choice3");

var currentQuestionIndex = 0;


playNow.addEventListener("click", startQuiz)


function startQuiz () {
    playNow.classList.add("hide");
    questionList.classList.remove("hide");
    questionsList(currentQuestionIndex);
}

function questionsList () {
    questionEl.innerText = quizQuestions[0].question;
    var choicesArray = quizQuestions[0].choices;
    for (var i = 0; i < choicesArray.length; i++) {
        var newButton = document.createElement("button");
        newButton.innerText = choicesArray[0].text;
        newButton.innerText = choicesArray[1].text;
        newButton.innerText = choicesArray[2].text;
        }
        document.getElementById("buttonContainer").appendChild(newButton)
        console.log(choicesArray, newButton)
    }


// Questions 
var quizQuestions = [
    {
      question: "What is an HTML Iframe used for?",
      choices: [
          {text:"Frame Photos in your document", correct: false},
          {text: "Embed a document within your HTML", correct: true},
          {text: "Index your HTML 'p' tag for proper indentation", correct: false}
      ]
    }
   // {
     // question: "Flexbox is used for which of the following purposes?",
      //choices: ["Designing flexible responsive layouts without using float or positioning", "Automatically setting the height and width of a property", "Adds a line-break after each element, so they can sit next to other elements"], 
      //answer: "Designing flexible responsive layouts without using float or positioning",
    //},
    //{
      //  question: "True or False: Media Queries allow a deployed website to adapt to multiple viewports?",
        //choices: ["True", "False", "Bro...what are you talking about?"],
        //answer: "True"
    //},
    //{
      //  question: "Please identify the proper syntax for an Array.",
        //choices: ["var car = Ford, Chevy, Dodge;", "var car = 'Ford' 'Chevy' 'Dodge';", "var car = ['Ford','Chevy','Dodge'];"],
        //answer: "var car = ['Ford','Chevy','Dodge'];"
    //},
    //{
      //  question: "What is the definition of 'THIS'",
        //choices: ["THIS is a quiz", "THIS is a programming language", "THIS is the object from which the method was called"],
        //answer: "THIS is the object from which the method was called"
    //}
]
