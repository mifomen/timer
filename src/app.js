import {setSecName, setMinName, setHourName,renderDifferenseTime } from './utils.js';

const nowTime = new Date();


// document.querySelector('.time-name-hours').textContent=setHourName();
const TimeForKey = new Date(2020, 3, 27, 9, 30, 0,  0);
const TimeForPrint = new Date(2020, 3, 27, 10, 0, 0,  0);

console.log()
const targetDate = new Date();

const currentExamHour = 14;
const currentExamMin = 9;
const timeEnd = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()+2, currentExamHour, currentExamMin, 0, 0); //редактируй ее
// console.log(`timeEnd=${timeEnd}`)
// console.log(`differenceHours(timeEnd)=${differenceHours(timeEnd)}`);

// const timerId = setInterval(() => {
// const nowTimeTime = document.querySelector('.js-current-time');
// nowTimeTime.innerHTML=`${new Date().toLocaleTimeString()}`;

//   const nowTimeDate = document.querySelector('.js-current-date');
//   nowTimeDate.innerHTML=`${new Date().toLocaleDateString()}`;
// }, 1000);


const timerId = setInterval(() => { renderDifferenseTime(timeEnd)} , 1000);
// document.querySelector('.js-time-now-hours').textContent=differenceTimes(timeEnd);
document.addEventListener('DOMContentLoaded',() => {  timerId});
