//Variables//
var myQuestions = [
    {
        question: "Past captain and keeper of the Gryffindor Quidditch team: Oliver",
        answers: {
            a: "Wells",
            b: "Wonks",
            c: "Wood",
            d: "Wilson"
        },
        correctAnswer: "c"
    },
    {
        question: "Best friends with Harry Potter and Hermione Granger: Ronald",
        answers: {
            a: "Weasel",
            b: "Weasley",
            c: "Willis",
            d: "Walters"
        },
        correctAnswer: "b"
    },
    {
        question: "Moaning Myrtle's real name Myrtle:",
        answers: {
            a: "Warren",
            b: "Wonks",
            c: "Williams",
            d: "wilson"
        },
        correctAnswer: "a"
    },
    {
        question: "Founders of Weasley Wizard Whezzes, Fred and George:",
        answers: {
            a: "Wonka",
            b: "Willis",
            c: "Walters",
            d: "Weasley"
        },
        correctAnswer: "d"
    },
    {
        question: "Peter Pettigrew's nickname:",
        answers: {
            a: "Warty",
            b: "Witty",
            c: "Watery",
            d: "Wormtail"
        },
        correctAnswer: "d"
    },
    {
        question: "Female house elf who belonged to Bartemius Crouch Sr., later worked in the Hogwarts kitchen:",
        answers: {
            a: "Wispy",
            b: "Whitney",
            c: "Willy",
            d: "Winky"
        },
        correctAnswer: "d"
    }
];
var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

//Event listener for executing game 
document.getElementById("startBtn").onclick = function initGame() {
    document.getElementById("startBtn").remove();

  ///Timer 
  var timeLeft = 30;
  var elem = document.getElementById("timer");
  var timerId = setInterval(countdown, 1000);
    
  function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
            alert("TIME IS UP");
    } else {
        elem.innerHTML = "Time Remaining: " + timeLeft;
        timeLeft--;
        }
    }
    ///
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        function showQuestions(questions, quizContainer) {
    
            var output = [];
            var answers;

            // loop through each question...
            for (var i = 0; i < questions.length; i++) {

                answers = [];

                // loop to add radio buttons
                for (letter in questions[i].answers) {

                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                    );
                }

                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }

            quizContainer.innerHTML = output.join('');
        }

        function showResults(questions, quizContainer, resultsContainer) {

            var answerContainers = quizContainer.querySelectorAll(".answers");

            // keep track of user's answers
            var userAnswer = "";
            var numCorrect = 0;


            for (var i = 0; i < questions.length; i++) {

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                // tally correct
                if (userAnswer === questions[i].correctAnswer) {
                    numCorrect++;
                }
            }

            // correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }

        // show questions 
        showQuestions(questions, quizContainer);

        // show results
        submitButton.onclick = function () {
            showResults(questions, quizContainer, resultsContainer);
        }

    }

}




