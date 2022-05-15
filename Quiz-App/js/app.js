let qList = [];

let qIndex = 0;

async function getQuestions() {
  let url = './js/questions.json';
  try {
    var res = (await (await fetch(url)).json());

  } catch (error) {
    console.log(error)
  }
  finally {
    qList = res;
  }
}

getQuestions();

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
  } else {
    document.getElementById("prev-btn").style.display = "block";
  }

  if (qIndex == qList.length - 1) {
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("finish-btn").style.display = "block";
  } else {
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("finish-btn").style.display = "none";
  }
  let indicators = document.getElementById("indicators").children;
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
};

const selectAnswer = (_clickedId) => {
  let answers = document.getElementById("answers").children;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].id != _clickedId) {
      answers[i].classList.remove("answered");
    } else {
      answers[i].classList.toggle("answered");
    }
  }
  let clickedAnswerIndex = parseInt(_clickedId.split("-")[1]);
  for (let i = 0; i < qList[qIndex].qAnswers.length; i++) {
    if (i != clickedAnswerIndex) {
      qList[qIndex].qAnswers[i].isAnswered = false;
    }
  }

  let clickedAnswer = qList[qIndex].qAnswers[clickedAnswerIndex];
  if (clickedAnswer.isAnswered) {
    clickedAnswer.isAnswered = false;
    emptyIndicator(qIndex + 1);
  } else {
    clickedAnswer.isAnswered = true;
  }
  for (let i = 0; i < qList[qIndex].qAnswers.length; i++) {
    if (qList[qIndex].qAnswers[i].isAnswered) {
      answerIndicator(qIndex + 1);
    }
  }
};

const answerIndicator = (_Id) => {
  let indicatorId = "indicator-" + _Id;
  let indicatorHtmlEl = document.getElementById(indicatorId);
  indicatorHtmlEl.classList.remove("not-answered");
  indicatorHtmlEl.classList.add("answered");
};

const emptyIndicator = (_Id) => {
  let indicatorId = "indicator-" + _Id;
  let indicatorHtmlEl = document.getElementById(indicatorId);
  indicatorHtmlEl.classList.remove("answered");
  indicatorHtmlEl.classList.add("not-answered");
};

function nextQuestion() {
  qIndex = qIndex + 1;
  showQuestion(qList[qIndex]);
}

function prevQuestion() {
  qIndex = qIndex - 1;
  showQuestion(qList[qIndex]);
}

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
  let resultHtmlEl = `<div class="results">
    <span>Your Success Rate :</span>
    <div class="progress-bar-background">
      <span class="progress" style="width: ${successRate}%">%${successRate}</span>
    </div>
  </div>`;
  appHtmlEl.insertAdjacentHTML("beforeend", resultHtmlEl);
  for (let i = 0; i < qList.length; i++) {
    let questionEl = `<div class="question-section">
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
    for (let j = 0; j < qList[i].qAnswers.length; j++) {
      if (
        qList[i].qAnswers[j].isAnswered == true &&
        qList[i].qAnswers[j].isCorrect == true
      ) {
        className = "correct";
      } else if (
        qList[i].qAnswers[j].isAnswered == true &&
        qList[i].qAnswers[j].isCorrect == false
      ) {
        className = "wrong";
      } else if (qList[i].qAnswers[j].isCorrect == true) {
        className = "correct";
      } else {
        className = "not-anwered";
      }
      let answerHtmlEl = `<button class="${className}">${qList[i].qAnswers[j].text}</button>`;
      answersHtmlEl.insertAdjacentHTML("beforeend", answerHtmlEl);
    }
  }
}


window.onload = () => {
  addIndicators();
  showQuestion(qList[qIndex]);
};