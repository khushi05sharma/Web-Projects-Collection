const questions = [

        {
          question: "What is the name of the little mermaid?",
          options: ["Belle", "Ariel", "Jasmine", "Moana"],
          correct: "Ariel",
        },
        {
          question: "What is the name of Mickey Mouse dog?",
          options: ["Pluto", "Goofy", "Max", "Spike"],
          correct: "Pluto",
        },
        {
          question: "In Beauty and the Beast, what is the name of the teapot?",
          options: ["Mrs. Potts", "Lumière", "Cogsworth", "Belle"],
          correct: "Mrs. Potts",
        },
        {
          question: "What kind of animal is Simba in The Lion King?",
          options: ["Tiger", "Lion", "Leopard", "Panther"],
          correct: "Lion",
        },
        {
          question: "What is the name of the snowman in Frozen?",
          options: ["Sven", "Olaf", "Kristoff", "Marshmallow"],
          correct: "Olaf",
        },
        {
          question: "Which Disney princess has a raccoon as a friend?",
          options: ["Pocahontas", "Mulan", "Ariel", "Rapunzel"],
          correct: "Pocahontas",
        },
        {
          question: "What does Dumbo use to fly?",
          options: ["Wings", "A magic hat", "His ears", "A jetpack"],
          correct: "His ears",
        },
        {
          question: "What is the name of the villain in 101 Dalmatians?",
          options: ["Maleficent", "Cruella de Vil", "Ursula", "Jafar"],
          correct: "Cruella de Vil",
        },
        {
          question: "What is the name of the toy cowboy in Toy Story?",
          options: ["Buzz", "Woody", "Jessie", "Bullseye"],
          correct: "Woody",
        },
        {
          question: "Who is the dragon companion in Mulan?",
          options: ["Mushu", "Shan Yu", "Toothless", "Falkor"],
          correct: "Mushu",
        },
      ];
    

      const quizContent = document.getElementById("quiz-content");
  questions.forEach((q, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.className = "question";
  
    const questionTitle = document.createElement("h2");
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionTitle);
  
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
  
    q.options.forEach((option) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = option;
  
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      optionsContainer.appendChild(label);
    });
  
    questionBlock.appendChild(optionsContainer);
    quizContent.appendChild(questionBlock);
  });
  
  // Calculate Score
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    let score = 0;
  
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question-${index}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      }
    });
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You scored ${score} out of ${questions.length}!`;
    resultDiv.classList.remove("hidden");
  });
  

