let Answer = {
  text: "",
  isCorrect: false,
  isAnswered: false,
}

let Question = {
  qId: 0,
  qPhrase: "",
  qAnswers: [{...Answer}],
};

let qList = [];

let qIndex = 0;

const getQuestions = () => {
  let question1 = {
    ...Question,
    qId: 1,
    qPhrase: "There are 30 people in a group. If all shake hands with one another, how many handshakes are possible ?",
    qAnswers: [{text: "870" , isCorrect: false}, {text: "435", isCorrect: true} ,{text: "30", isCorrect: false},{text: "29", isCorrect: false}],
  };
  
  let question2 = {
    ...Question,
    qId: 2,
    qPhrase: "In Cricket League, in first round every team plays a match with every other team. 9 teams participated in the Cricket league. How many matches were played in the first round ?",
    qAnswers: [{text: "36", isCorrect: true}, {text: "72" , isCorrect: false} ,{text: "9", isCorrect: false},{text: "91", isCorrect: false}],
  };

  let question3 = {
    ...Question,
    qId: 3,
    qPhrase: "How many combinations are possible while selecting four letters from the word ‘SMOKEJACK’ with the condition that ‘J’ must appear in it ?",
    qAnswers: [{text: "81", isCorrect: false}, {text: "82" , isCorrect: false} ,{text: "32", isCorrect: false},{text: "41", isCorrect: true}],
  };

  let question4 = {
    ...Question,
    qId: 4,
    qPhrase: "In a room there are 2 green chairs, 3 yellow chairs and 4 blue chairs. In how many ways can Raj choose 3 chairs so that at least one yellow chair is included?",
    qAnswers: [{text: "3", isCorrect: false}, {text: "30" , isCorrect: false} ,{text: "64", isCorrect: true},{text: "84", isCorrect: false}],
  };

  let question5 = {
    ...Question,
    qId: 5,
    qPhrase: "On a railway line there are 20 stops. A ticket is needed to travel between any 2 stops. How many different tickets would the government need to prepare to cater to all possibilities?",
    qAnswers: [{text: "760", isCorrect: false}, {text: "190" , isCorrect: false} ,{text: "380", isCorrect: true},{text: "72", isCorrect: false}],
  };

  let question6 = {
    ...Question,
    qId: 6,
    qPhrase: "In Daya’s bag there are 3 books of History, 4 books of Science and 2 books of Maths. In how many ways can Daya arrange the books so that all the books of same subject are together?",
    qAnswers: [{text: "9", isCorrect: false}, {text: "6" , isCorrect: false} ,{text: "8640", isCorrect: false},{text: "1728", isCorrect: true}],
  };

  let question7 = {
    ...Question,
    qId: 7,
    qPhrase: "A locker in bank has 3 digit lock. Mahesh forgot his password and was trying all possible combinations. He took 6 seconds for each try. The problem was that each digit can be from 0 to 9. How much time will be needed to by Mahesh to try all the combinations?",
    qAnswers: [{text: "90 minutes", isCorrect: false}, {text: "120 minutes" , isCorrect: false} ,{text: "60 minutes", isCorrect: false},{text: "100 minutes", isCorrect: true}],
  };

  let question8 = {
    ...Question,
    qId: 8,
    qPhrase: "Mayur travels from Mumbai to Jammu in 7 different ways. But he is allowed to return to Mumbai by any way except the one he used earlier. In how many ways can he complete his journey?",
    qAnswers: [{text: "49", isCorrect: false}, {text: "42" , isCorrect: true} ,{text: "48", isCorrect: false},{text: "6", isCorrect: false}],
  };

  let question9 = {
    ...Question,
    qId: 9,
    qPhrase: "Without repetition, using digits 2, 3, 4, 5, 6, 8 and 0, how many numbers can be made whichlie between 500 and 1000?",
    qAnswers: [{text: "70", isCorrect: false}, {text: "147" , isCorrect: false} ,{text: "60", isCorrect: false},{text: "90", isCorrect: true}],
  };

  let question10 = {
    ...Question,
    qId: 10,
    qPhrase: "A trekking group is to be formed having 6 members. They are to be selected from 3 girls, 4 boys and 5 teachers. In how many ways can the group be formed so that there are 3 teachers and 3 boys or 2 girls and 4 teachers?",
    qAnswers: [{text: "55", isCorrect: true}, {text: "90" , isCorrect: false} ,{text: "27", isCorrect: false},{text: "144", isCorrect: false}],
  };

  let question11 = {
    ...Question,
    qId: 11,
    qPhrase: "If  Suraj doesn’t want three vowels together, then in how many, can he arrange letters of theword 'MARKER'?",
    qAnswers: [{text: "500", isCorrect: false}, {text: "720" , isCorrect: false} ,{text: "240", isCorrect: true},{text: "360", isCorrect: false}],
  };

  let question12 = {
    ...Question,
    qId: 12,
    qPhrase: "A bank has 6 digit account number with no repetition of digits within a account number. Thefirst and last digit of the account numbers is fixed to be 4 and 7. How many such account numbers are possible?",
    qAnswers: [{text: "10080", isCorrect: false}, {text: "5040" , isCorrect: false} ,{text: "890", isCorrect: false},{text: "1680", isCorrect: true}],
  };

  let question13 = {
    ...Question,
    qId: 13,
    qPhrase: "In a class, there are 15 students. During a Christmas party all of them shook hands with eachother only once. How many handshakes took place in the class?",
    qAnswers: [{text: "120", isCorrect: false}, {text: "210" , isCorrect: false} ,{text: "105", isCorrect: true},{text: "55", isCorrect: false}],
  };

  let question14 = {
    ...Question,
    qId: 14,
    qPhrase: "The name of the horizontal line in the cartesian plane which determines the position of a point is called:",
    qAnswers: [{text: "Origin", isCorrect: false}, {text: "X-axis" , isCorrect: true} ,{text: "Y-axis", isCorrect: false},{text: "Quadrants", isCorrect: false}],
  };

  let question15 = {
    ...Question,
    qId: 15,
    qPhrase: "The name of the vertical line in the cartesian plane which determines the position of a point is called:",
    qAnswers: [{text: "Origin", isCorrect: false}, {text: "X-axis" , isCorrect: false} ,{text: "Y-axis", isCorrect: true},{text: "Quadrants", isCorrect: false}],
  };

  let question16 = {
    ...Question,
    qId: 16,
    qPhrase: "The section formed by horizontal and vertical lines determining the position of the point in acartesian plane is called:",
    qAnswers: [{text: "Origin", isCorrect: false}, {text: "X-axis" , isCorrect: false} ,{text: "Y-axis", isCorrect: false},{text: "Quadrants", isCorrect: true}],
  };

  let question17 = {
    ...Question,
    qId: 17,
    qPhrase: "Points (1, 2), (-2, -3), (2, -3);",
    qAnswers: [{text: "First quadrant", isCorrect: false}, {text: "Do not lie in the same quadrant" , isCorrect: true} ,{text: "Third quadrant", isCorrect: false},{text: "Fourth quadrant", isCorrect: false}],
  };

  let question18 = {
    ...Question,
    qId: 18,
    qPhrase: "In ? ABC, right-angled at B, AB = 24 cm, BC = 7 cm. The value of tan C is:",
    qAnswers: [{text: "12/7", isCorrect: false}, {text: "24/7" , isCorrect: true} ,{text: "20/7", isCorrect: false},{text: "7/24", isCorrect: false}],
  };

  let question19 = {
    ...Question,
    qId: 19,
    qPhrase: " (Sin 30°+cos 60°)-(sin 60° + cos 30°) is equal to:",
    qAnswers: [{text: "0", isCorrect: false}, {text: "1+2√3" , isCorrect: false} ,{text: "1-√3", isCorrect: true},{text: "1+√3", isCorrect: false}],
  };

  let question20 = {
    ...Question,
    qId: 20,
    qPhrase: "The value of tan 60°/cot 30° is equal to:",
    qAnswers: [{text: "0", isCorrect: false}, {text: "1" , isCorrect: true} ,{text: "2", isCorrect: false},{text: "3", isCorrect: false}],
  };

  qList.push(question1);
  qList.push(question2);
  qList.push(question3);
  qList.push(question4);
  qList.push(question5);
  qList.push(question6);
  qList.push(question7);
  qList.push(question8);
  qList.push(question9);
  qList.push(question10);
  qList.push(question11);
  qList.push(question12);
  qList.push(question13);
  qList.push(question14);
  qList.push(question15);
  qList.push(question16);
  qList.push(question17);
  qList.push(question18);
  qList.push(question19);
  qList.push(question20);
}

let answerList = [];

const showQuestion = (_question) => {
  let qPharesHtmlEl = document.getElementById("question");
  let answersHtmlEl = document.getElementById("answers");

  let newQuestionHTML = `<h3>Question ${_question.qId}</h3>
    <article>${_question.qPhrase}</article>`;
  let newAnswersHtmlEl = "";

  for (let i = 0; i < _question.qAnswers.length; i++) {
    let answerClass = "";
    if (_question.qAnswers[i].isAnswered) {
      answerClass = "answered";
    }    
    let answerHtmlEl = `<button class="${answerClass}" id="answer-${i}" onclick="selectAnswer(this.id)">${_question.qAnswers[i].text}</button>`;
    newAnswersHtmlEl += answerHtmlEl;
  }

  qPharesHtmlEl.innerHTML = newQuestionHTML;
  answersHtmlEl.innerHTML = newAnswersHtmlEl;

  document.getElementById("question-number").innerHTML = _question.qId;

  if (qIndex == 0) {
    document.getElementById("prev-btn").style.display = "none";
  }
  else {
    document.getElementById("prev-btn").style.display = "block";
  };

  if (qIndex == qList.length - 1) {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("finish-btn").style.display = "block";
  }
  else {
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("finish-btn").style.display = "none";
  };
  let indicators = document.getElementById("indicators").children
  for (let i = 0; i < indicators.length; i++) {
    if (indicators[i].classList.contains("selected")) {
      indicators[i].classList.remove("selected");
    }
  }

  let indicator = document.getElementById(`indicator-${_question.qId}`);
  if (!indicator.classList.contains("selected")) {
    indicator.classList.add("selected");
  }
};

const addIndicators = () => {
  let qIndicators = document.getElementById("indicators");
  for (let i = 0; i < qList.length; i++) {
    let indicatorHtmlEl = `<button id="indicator-${qList[i].qId}" onclick="jumpToQuestion(this.id)" class="not-answered">${qList[i].qId}</button>`;
    qIndicators.insertAdjacentHTML("beforeend", indicatorHtmlEl);
  }
  document.getElementById("question-qty").innerHTML = qList.length;
};

const jumpToQuestion = (_Id) => {
  let clickedIndex = parseInt(_Id.split("-")[1] - 1);
  qIndex = clickedIndex;
  showQuestion(qList[qIndex]);
}

const selectAnswer = (_clickedId) => {
  let answers = document.getElementById("answers").children;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].id != _clickedId) {
      answers[i].classList.remove("answered");   
    }
    else {
      answers[i].classList.toggle("answered");
    }
  };
  let clickedAnswerIndex = parseInt(_clickedId.split("-")[1]);
  for (let i = 0; i < qList[qIndex].qAnswers.length; i++) {
    if (i != clickedAnswerIndex) {
      qList[qIndex].qAnswers[i].isAnswered = false;
    }
  };
  
  let clickedAnswer = qList[qIndex].qAnswers[clickedAnswerIndex];
  if (clickedAnswer.isAnswered) {
    clickedAnswer.isAnswered = false;
    emptyIndicator(qIndex + 1);
  }
  else {
    clickedAnswer.isAnswered = true;
  }
  for (let i = 0; i < qList[qIndex].qAnswers.length; i++) {
    if (qList[qIndex].qAnswers[i].isAnswered) {
      answerIndicator(qIndex + 1);
    }
  }
}

const answerIndicator = (_Id) => {
  let indicatorId = "indicator-" + _Id;
  let indicatorHtmlEl = document.getElementById(indicatorId);
  indicatorHtmlEl.classList.remove("not-answered");
  indicatorHtmlEl.classList.add("answered");
}

const emptyIndicator = (_Id) => {
  let indicatorId = "indicator-" + _Id;
  let indicatorHtmlEl = document.getElementById(indicatorId);
  indicatorHtmlEl.classList.remove("answered");
  indicatorHtmlEl.classList.add("not-answered");
}

function nextQuestion() {
  qIndex = qIndex + 1;
  showQuestion(qList[qIndex]);
};

function prevQuestion() {
  qIndex = qIndex - 1;
  showQuestion(qList[qIndex]);
};

const calculateResult = () => {
  let totalQuestions = qList.length;
  let correctAnswers = 0;
  for (let i = 0; i < qList.length; i++) {
    for (let j = 0; j < qList[i].qAnswers.length; j++) {
      if (qList[i].qAnswers[j].isAnswered == true) {
        if (qList[i].qAnswers[j].isCorrect == true) {
          correctAnswers++;
        }
      }
    }
  }
  return correctAnswers;
};

function finishTest() {
  let totalQuestions = qList.length;
  let correctAnswers = calculateResult();
  let successRate = (correctAnswers / totalQuestions) * 100;
  let appHtmlEl = document.getElementById("main-app");
  appHtmlEl.innerHTML = "";
  let titleHtmlEl = `<h2>Quiz Results</h2>`;
  appHtmlEl.insertAdjacentHTML("beforeend", titleHtmlEl);
  let resultHtmlEl = 
  `<div class="results">
    <span>Your Success Rate :</span>
    <div class="progress-bar-background">
      <span class="progress" style="width: ${successRate}%">%${successRate}</span>
    </div>
  </div>`;
  appHtmlEl.insertAdjacentHTML("beforeend", resultHtmlEl);
  for (let i = 0 ; i < qList.length ; i++) {
    let questionEl = 
    `<div class="question-section">
      <div class="question" id="question">
        <h3>Question ${qList[i].qId}</h3>
        <article>${qList[i].qPhrase}</article>
      </div>
      <div class="answers d-flex flex-column" id="answers-${qList[i].qId}"></div>
    </div>`;
    appHtmlEl.insertAdjacentHTML("beforeend", questionEl);
    let answersHtmlEl = document.getElementById(`answers-${qList[i].qId}`);
    console.log(qList);
    let className;
    for (let j = 0 ; j < qList[i].qAnswers.length ; j++) {
      if (qList[i].qAnswers[j].isAnswered == true && qList[i].qAnswers[j].isCorrect == true) {
        className = "correct";
      }
      else if (qList[i].qAnswers[j].isAnswered == true && qList[i].qAnswers[j].isCorrect == false) {
        className = "wrong";
      }
      else if (qList[i].qAnswers[j].isCorrect == true) {
        className = "correct"
      }
      else {
        className = "not-anwered"
      }
      let answerHtmlEl = `<button class="${className}">${qList[i].qAnswers[j].text}</button>`;
      answersHtmlEl.insertAdjacentHTML("beforeend", answerHtmlEl);
    }
  }
};

window.addEventListener("load", (event) => {
  getQuestions();
  addIndicators();
  showQuestion(qList[qIndex]);
});

