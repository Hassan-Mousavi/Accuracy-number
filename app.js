// numbers
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const oparator = document.querySelector(".oparator");
// btns part
const trueBtn = document.querySelector(".true");
const falseBtn = document.querySelector(".false");
// seconds counter
const secondCounter = document.querySelector(".time_question");
// scores part
const score = document.querySelector(".scores");
///////////////////////////////////////////////////////////////////////
// scores part
score.value = "0";
// number part
const number1 = (num1.value = Math.trunc(Math.random() * 45));
const number2 = (num2.value = Math.trunc(Math.random() * 45));
const totalResult = (result.value = Math.trunc(Math.random() * 45));

if (totalResult === number1 + number2) {
  score.value = 20;
}
