import {currentExamHourFromForm,currentExamMinFromForm,renderDifferenseTime,setTimeForExams } from './utils.js';

// console.log(`${currentExamHourFromForm} ${currentExamMinFromForm}`)

const currentExamHour = currentExamHourFromForm; //change it is final hour to final exams
const currentExamMin = currentExamMinFromForm; //change it is final minutes to final exams

const startTimer = (a,b) => {
  const timerId = setInterval(() => {
    renderDifferenseTime(setTimeForExams(a,b));
    const nowTimeTime = document.querySelector('.js-current-time');
    nowTimeTime.innerHTML=`${new Date().toLocaleTimeString()}`;

    const nowTimeDate = document.querySelector('.js-current-date');
    nowTimeDate.innerHTML=`${new Date().toLocaleDateString()}`;
  } , 1000);
}
// document.addEventListener('DOMContentLoaded',() => timerId);


document.querySelector('.choose-time').addEventListener('click', () => {
  startTimer(currentExamHour,currentExamMin);
});
