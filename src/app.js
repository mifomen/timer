import {setSecName, setMinName, setHourName, differenceTimes} from './utils.js';

const nowTime = new Date();


// document.querySelector('.time-name-hours').textContent=setHourName();
const TimeForKey = new Date(2020, 3, 27, 9, 30, 0,  0);
const TimeForPrint = new Date(2020, 3, 27, 10, 0, 0,  0);

const targetDate = new Date();

const currentExamHour = 14;
const currentExamMin = 9;
const timeEnd = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), currentExamHour, currentExamMin, 0, 0); //редактируй ее


const timerId = setInterval(() => {
  const nowTimeTime = document.querySelector('.js-current-time');
  nowTimeTime.innerHTML=`${new Date().toLocaleTimeString()}`;

  const nowTimeDate = document.querySelector('.js-current-date');
  nowTimeDate.innerHTML=`${new Date().toLocaleDateString()}`;
}, 1000);


document.addEventListener('DOMContentLoaded',() => {  differenceTimes();});
