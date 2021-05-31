/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        if(questionNumber == 0 ){
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <img src="${currentQuestion.src}" />
            <div class="answers"> ${answers.join("")} </div>`
          );
        }
        else{output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );}
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers black
          answerContainers[questionNumber].style.color = "black";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
   
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the above code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  /////////////// Write the MCQ below in the exactly same described format ///////////////
  
  
    const myQuestions = [
      {
        question: "The figure in image003, represents a ___________.",  ///// Write the question inside double quotes
        src :"images/postQ1.PNG",
        answers: {
          a: "1:2 mux",                  ///// Write the option 1 inside double quotes
          b: "1:2 demux",                  ///// Write the option 2 inside double quotes
          c: "1:2 decoder",                  ///// Write the option 3 inside double quotes
          d: "none of these"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "c"                ///// Write the correct option inside double quotes
      },
  
      {
       question: "In figure image003, when control input A = 0,",  ///// Write the question inside double quotes
        answers: {
          a: "Y0 = 0, Y1 = 0",                  ///// Write the option 1 inside double quotes
          b: "Y0 = 0, Y1 = 1",                  ///// Write the option 2 inside double quotes
          c: "Y0 = 1, Y1 = 0",                  ///// Write the option 3 inside double quotes
          d: "Y0 = 1, Y1 = 1"                   ///// Write the option 4 inside double quotes
        },
        correctAnswer: "b"                ///// Write the correct option inside double quotes
      },                                  ///// To add more questions, copy the section below 
                                                            ///// this line
      {
        question: "In figure image003, when control input A = 1,",
        answers: {
          a: "Y0 = 0, Y1 = 0",
          b: "Y0 = 0, Y1 = 1",
          c: "Y0 = 1, Y1 = 0",
          d: "Y0 = 1, Y1 = 1"
        },
        correctAnswer: "c"
      },
  
      {
        question: "In figure image003, what value of A will result in Y0 = Y1=0?",
        answers: {
          a: "A = 0",
          b: "A = 1",
          c: "A = x",
          d: "Not possible"
        },
        correctAnswer: "d"
      },
  
      
      {
          question: "Higher order demux/decoders can be built using lower order demux/decoders. State True or False.",
          answers: {
            a: "True",
            b: "False",
           // c: "Option 3",
            //d: "Option 4"
          },
          correctAnswer: "a"
      }
    
      /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
          till closing curly braces comma ( }, )
  
          and paste it below the curly braces comma ( below correct answer }, ) of above 
          question
  
      Copy below section
  
      {
        question: "This is question n?",
        answers: {
          a: "Option 1",
          b: "Option 2",
          c: "Option 3",
          d: "Option 4"
        },
        correctAnswer: "c"
      },
  
      Copy above section
  
      */
  
  
  
  
    ];
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the below code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////
  
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  
  
  /////////////////////////////////////////////////////////////////////////////
  
  /////////////////////// Do not modify the above code ////////////////////////
  
  /////////////////////////////////////////////////////////////////////////////