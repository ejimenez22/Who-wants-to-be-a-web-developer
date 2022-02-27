var playNow = document.getElementById("play");
var questionList = document.getElementById("quiz-questions");
var nextButton = document.getElementById("next");
var questionEl = document.getElementById("questions");
var choicesEl = document.getElementById("buttonContainer");

var currentQuestionIndex = 0;


playNow.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    questionsList()
})


function startQuiz () {
    playNow.classList.add("hide");
    questionList.classList.remove("hide");
    questionsList(currentQuestionIndex);
    //reset ()
}

function questionsList () {
    questionEl.innerText = quizQuestions[currentQuestionIndex].question;
    for (var i = 0; i < 3; i++) {
        var newButton = document.createElement("button");
        newButton.style.backgroundColor = "#8F00FF"
        newButton.style.fontSize = "40px"
        newButton.style.color = "white"
        newButton.innerText = quizQuestions[currentQuestionIndex].choices[i].text;
        document.getElementById("buttonContainer").appendChild(newButton)
        if (quizQuestions[currentQuestionIndex].choices[i].correct)
        {
            newButton.addEventListener ("click", (e) => {
            newButton.style.backgroundColor = "#228B22" })}
            else {
            newButton.addEventListener ("click", (e) => {
                newButton.style.backgroundColor = "#8b0000" 
            })
        }
    }
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
    },
   {
      question: "Flexbox is used for which of the following purposes?",
      choices: [
          {text: "Designing flexible responsive layouts without using float or positioning", correct: true},
          {text: "Automatically setting the height and width of a property", correct: false},
          {text: "Adds a line-break after each element, so they can sit next to other elements", correct: false}
      ]
    },
    {
      question: "True or False: Media Queries allow a deployed website to adapt to multiple viewports?",
      choices: [
          {text: "True", correct: true},
          {text:"False", correct: false},
          {text: "Bro...what are you talking about?", correct: false}
      ]
    },
    {
      question: "Please identify the proper syntax for an Array.",
      choices: [
          {text: "var car = Ford, Chevy, Dodge;", correct: false},
          {text: "var car = 'Ford' 'Chevy' 'Dodge';", correct: false},
          {text: "var car = ['Ford','Chevy','Dodge'];", correct: true}
      ]
    },
    {
      question: "What is the definition of 'THIS'",
      choices: [
          {text: "THIS is a quiz", correct: false},
          {text: "THIS is a programming language", correct: false},
          {text: "THIS is the object from which the method was called", correct: true}
      ]
    }
]
