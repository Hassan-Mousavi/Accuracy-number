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
score.value = "0";
// number part
const number1 = (num1.value = Math.trunc(Math.random() * 60));
const number2 = (num2.value = Math.trunc(Math.random() * 60));
// const totalResult = (result.value = Math.trunc(Math.random() * 45));

nextBtn.addEventListener("click", function () {
  plusIcon.classList.toggle("minus");
  // minusBtn.classList.toggle("plus");
  minusBtn.style.display = "block";
  plusIcon.style.display = "none";
});
