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
            <input id="gato" type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="qwrap">
	        <div class="question"> ${currentQuestion.question} </div>
	        <div class="answers"> ${answers.join("")} </div>
	        <div class="solution">${currentQuestion.solution}</div>
        </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

	function showResults() {
	    // gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");
	    const solutions = quizContainer.querySelectorAll(".solution");

	    // keep track of user's answers
	    let numCorrect = 0;
	
	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
			
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;
						
			//show solution
			solutions[questionNumber].style.display = "block";
			
			// if answer is correct
			if (userAnswer === currentQuestion.correctAnswer) {
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[questionNumber].style.color = "#1ccfc9";
				solutions[questionNumber].style.background = "#1ccfc9";
			} else {
				// if answer is wrong or blank
				// color the answers red
				answerContainers[questionNumber].style.color = "tomato";
				solutions[questionNumber].style.background = "tomato";
			}
			

	    });

		// show number of correct answers out of total
		resultsContainer.innerHTML = `<div>${numCorrect} puntos de ${myQuestions.length}</div>`;
		
		//show reset button and hide verify button
		resetButton.style.display = "block";
		submitButton.style.display = "none";
		resultsContainer.style.display = "block";
		
		//disable radio button
		for (var i = 0; i< gatos.length;  i++){
		    gatos[i].disabled = true;
		}
		
		

	  }

  const quizContainer = document.getElementById("quiz");
  
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Erick mientras elaboraba un informe a su jefe sufre una caída, pues la pata de su silla se quebró y se fracturó un dedo de la mano.",
      answers: {
        a: "Sí es un accidente laboral",
        b: "No es un accidente laboral",
      },
      correctAnswer: "a",
      solution: "Se considera un accidente laboral porque Erick sufrió el percance con su silla mientras cumplía una asignación de su jefe."
    },
    {
      question: "Dalia escucha el timbre de su casa, es un vendedor, abre la puerta y se resbala al salir del portón. ",
      answers: {
        a: "Sí es un accidente laboral",
        b: "No es un accidente laboral",
      },
      correctAnswer: "b",
      solution: "No es un caso de accidente laboral porque atender un vendedor no es parte de las funciones de trabajo de Dalia."
    },
    {
      question: "Wendy, quien teletrabaja desde un centro universitario, decidió irse a comprar un refresco a la pulpería más cercana, cuando cruzó la calle sufrió un atropello.",
      answers: {
        a: "Sí es un accidente laboral",
        b: "No es un accidente laboral",
      },
      correctAnswer: "b",
      solution: "No es un caso de accidente laboral porque comprar un refresco en una pulpería cercana no es parte de las funciones de trabajo de Wendy."
    },
    {
      question: "Jorge es investigador y como parte de sus actividades teletrabajables debe trasladarse a un parque nacional para recopilar información. Durante su gira, repentinamente cae un árbol cerca suyo, lo cual lo deja con heridas considerables.",
      answers: {
        a: "Sí es un accidente laboral",
        b: "No es un accidente laboral",
      },
      correctAnswer: "a",
      solution: "Se considera un accidente laboral por que Jorge sufrió la lesión mientras cumplía con su trabajo de campo en un parque nacional."
    }
  ];

	// display quiz right away
	buildQuiz();
	
	// get the results div
	const resultsContainer = document.getElementById("results");
	var gatos = $('input[type="radio"]');
  
	// on submit, show results
	submitButton.addEventListener("click", showResults);
	
	// restart the quiz
	const resetButton = document.getElementById("reset");
	
	
	
	//reset the activity
	resetButton.addEventListener("click", restart);
	
	function restart() {
		// gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");
	    const solutions = quizContainer.querySelectorAll(".solution");
	
	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
			
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;
			
			//show solution
			solutions[questionNumber].style.display = "none";
			//change the color back
			answerContainers[questionNumber].style.color = "#333";
	    });

		//show reset button and hide verify button
		resetButton.style.display = "none";
		submitButton.style.display = "block";
		resultsContainer.style.display = "none";
		
		//disable radio button
		
		for (var i = 0; i< gatos.length;  i++){
		    gatos[i].checked = false;
		    gatos[i].disabled = false; //disable the radio buttons
		}
	}
	
	
	
})();