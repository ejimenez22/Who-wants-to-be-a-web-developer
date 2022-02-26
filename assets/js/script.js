var playNow = document.querySelector("btn-play");

var playNow = function() {
    playNowEl.addEventListener("click", function() {
        console.log("start");
    }
    )}

// Questions 
var quizQuestions = [
    {
      question: "What is an HTML Iframe used for?",
      choices: ["Frame Photos in your document", "Embed a document within your HTML", "Index your HTML 'p' tag for proper indentation"],
      answer: "Embed a document within your HTML"
    },
    {
      question: "Flexbox is used for which of the following purposes?",
      choices: ["Designing flexible responsive layouts without using float or positioning", "Automatically setting the height and width of a property","Adds a line-break after each element, so they can sit next to other elements"], 
      answer: "Designing flexible responsive layouts without using float or positioning",
    },
    {
        question: "True or False: Media Queries allow a deployed website to adapt to multiple viewports?",
        choices: ["True", "False", "Bro...what are you talking about?"],
        answer: "True"
    },
    {
        question: "Please identify the proper syntax for an Array.",
        choices: ["var car = ford, chevy, dodge;", "var car = 'ford' 'chevy' 'dodge';", "var car = ['Ford','Chevy','Dodge'];"],
        answer: "var car = ['Ford','Chevy','Dodge'];"
    },
    {
        question: "What is the definition of 'THIS'",
        choices: ["THIS is a quiz","THIS is a programming language","THIS is the object from which the method was called"],
        answer: "THIS is the object from which the method was called"
    }
];