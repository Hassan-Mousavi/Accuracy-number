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
///////////////////////////////////////////////////////////////////////
// scores part
score.value = 0;
// number part
function nextQuestion() {
  num1.value = Math.trunc(Math.random() * 70);
  num2.value = Math.trunc(Math.random() * 60);
  console.log(Number(num1.value) + Number(num2.value));
  console.log(Number(result.value));
  if (Number(num1.value) + Number(num2.value) === Number(result.value)) {
    score.value = 20;
    console.log(score.value);
  }
}
nextQuestion();

nextBtn.addEventListener("click", function () {
  if (plusIcon.classList.toggle("hidden")) {
    plusIcon.style.display = "none";
    minusBtn.style.display = "block";
  } else {
    minusBtn.classList.toggle("hidden");
    minusBtn.style.display = "none";
    plusIcon.style.display = "block";
  }
  nextQuestion();
});
// timer
secondCounter.textContent = setTimeout(function () {
  const sec = new Date().getSeconds();
}, 9000);
