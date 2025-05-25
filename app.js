// numbers
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const oparator = document.querySelector(".oparator");
const plusIcon = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
// btns part
const nextBtn = document.querySelector(".next");
const deleteBtn = document.querySelector(".delete");
// seconds counter
const secondCounter = document.querySelector(".time_question");
// scores part
const score = document.querySelector(".scores");
let isAddition = true;
let timer;
let timeLeft = 15;
///////////////////////////////////////////////////////////////////////
// scores part
score.value = 0;
// number part
function nextQuestion() {
  num1.value = Math.trunc(Math.random() * 99);
  num2.value = Math.trunc(Math.random() * 60);
  result.value = "";

  if (isAddition) {
    plusIcon.style.display = "block";
    minusBtn.style.display = "none";
  } else {
    plusIcon.style.display = "none";
    minusBtn.style.display = "block";
  }
}
nextQuestion();
starterTimer();

nextBtn.addEventListener("click", function () {
  const correctAnswer = isAddition
    ? Number(num1.value) + Number(num2.value)
    : Number(num1.value) - Number(num2.value);

  if (Number(result.value) === correctAnswer) {
    score.value = Math.max(Number(score.value) + 20, 0);
  } else {
    score.value = Math.max(Number(score.value) - 10, 0);
  }
  isAddition = !isAddition;
  nextQuestion();
  starterTimer();
});
// timer
function starterTimer() {
  clearInterval(timer);
  timeLeft = 15;
  secondCounter.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    secondCounter.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      score.value = Math.max(Number(score.value) - 10, 0);
      nextQuestion();
      starterTimer();
    }
  }, 1000);
}
deleteBtn.addEventListener("click", function () {
  result.value = "";
});
