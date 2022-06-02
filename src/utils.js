const PARSE_INT = 10;

const setHourName = (intInput) => {
  // const lastCiftIntInpit = intInput % 10;
  if (intInput === 1 || intInput === 21 ) {
    return 'Час';
  }
  if (intInput >= 2 && intInput <= 4  || intInput >= 22  && intInput <= 24) {
    // console.log('часа')
    return 'Часа';
  }
  if (intInput === 0 || intInput >= 5 && intInput <= 20 ) {
    return 'Часов';
  }
};

const setMinName = (intInput) => {
  if (intInput === 1) {
    return 'Минута';
  }
  if (intInput ===0 || intInput >= 5 && intInput <= 59 ) {
    return 'Минут';
  }
  if (intInput >= 2 && intInput <= 4 ) {
    return 'Минуты';
  }
};

const setSecName = (intInput) => {
  if (intInput === 1) {
    return 'Секунда';
  }
  if (intInput ===0 || intInput >= 5 && intInput <= 59 ) {
    return 'Секунд';
  }
  if (intInput >= 2 && intInput <= 4 ) {
    return 'Секунды';
  }
};

const setDayName = (inputTime) => {
  if (inputTime === 1) {
    return 'День';
  }
  if ( inputTime >= 2 && inputTime <= 4 ) {
    return 'Дня';
  }
  if ( inputTime >= 5 && inputTime <= 100 ) {
    return 'Дней';
  }
  return 'Дня';
};

const setNameStepExam = (inputTime) => {
  const getHours = inputTime.getHours();
  const getMin = inputTime.getMinutes();

  if (  getHours === 10 && getMin >= 1 && getMin<= 12 ) {
    return 'До начала экзамена и передачи статуса';
  }

  if ( getHours >= 2 && getHours <= 9 && getMin>= 0 && getMin <= 31 ) {
    return 'До получения ключа';
  }

  if ( getHours >= 10 && getHours <= 15 && getMin >= 12 && getMin <= 30 ) {
    return 'До экзамены успешно завершены и передачи статуса';
  }

  if ( getHours >= 14 && getHours <= 15 && getMin >= 0 && getMin <= 59 ) {
    return 'До статуса материалы переданы в РЦОИ';
  }

  if ( getHours >= 10 && getHours <= 14 && getMin >= 0 && getMin <= 59 ) {
    return 'До завершения экзамена';
  }

  return 'До следующего экзамена получения ключа';
};

const hideElement = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).classList.add('vh');
  }
};

const showElement = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).classList.remove('vh');
  }
};
const setTimeForExams = (hour,min) => {

  // const currentExamHour = hour; //change it is final hour to final exams
  // const currentExamMin = min; //change it is final minutes to final exams

  const targetDate = new Date();
  const getHours = targetDate.getHours();
  const getMin = targetDate.getMinutes();

  if ( getHours === 10 && getMin >= 0 && getMin<= 12 ) {
    const TimeForPrint = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 10, 0, 0,  0 );
    return TimeForPrint;
  }
  if ( getHours >= 4 && getHours <= 9 && getMin>= 1 && getMin <= 30 ) {
    const TimeForKey = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 9, 31, 0,  0 );
    return TimeForKey;
  }
  if ( getHours >= 10 && getHours <= 14 && getMin >= 0 && getMin <= 59 ) {
    const timeEnding = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), hour, min, 0, 0);
    return timeEnding;
  }
  return  new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate(), 10, 0, 0, 0);
};

const renderDifferenseTime = (endingExamsTime) => {

  const currentTime = new Date();
  if ( endingExamsTime < currentTime) {
    endingExamsTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate()+1, 9, 30, 0, 0);
  }

  if (document.querySelector('.time__title').classList.contains('vh')) {
    document.querySelector('.time__title').classList.remove('vh');
  }

  const titleExams = document.querySelector('.time__title');
  titleExams.textContent = setNameStepExam(currentTime);

  const defferenceInTime = ( endingExamsTime -  currentTime) / 1000 ;

  if ( parseInt(document.querySelector('.js-time-now-days').textContent,PARSE_INT) === 0 ) {
    hideElement('.column-days');
  } else {
    showElement('.column-days');
    const differenceDays = Math.floor(( defferenceInTime / 3600 ) / 24 );
    document.querySelector('.js-time-now-days').innerHTML    = differenceDays;
    document.querySelector('.js-description-days').innerHTML  = setDayName(differenceDays);
  }

  if ( parseInt(document.querySelector('.js-time-now-days').textContent,PARSE_INT) === 0 && parseInt(document.querySelector('.js-time-now-hours').textContent,PARSE_INT) === 0 ) {
    hideElement('.column-hours');
  } else {
    showElement('.column-hours');
    const differenceHours = Math.floor(( defferenceInTime / 3600 ) % 24 );
    document.querySelector('.js-time-now-hours').innerHTML   = differenceHours;
    document.querySelector('.js-description-hours').innerHTML = setHourName(differenceHours);
  }

  if ( parseInt(document.querySelector('.js-time-now-hours').textContent,PARSE_INT) === 0  && parseInt(document.querySelector('.js-time-now-mins').textContent,PARSE_INT)  === 0 ) {
    hideElement('.column-mins');
  } else {
    showElement('.column-mins');
    const differenceMins = Math.floor(( defferenceInTime / 60  ) % 60 );
    document.querySelector('.js-time-now-mins').innerHTML = differenceMins;
    document.querySelector('.js-description-mins').innerHTML = setMinName(differenceMins);
  }
  const differenceSeconds =  Math.floor( defferenceInTime % 60 );
  document.querySelector('.js-time-now-seconds').innerHTML = differenceSeconds;
  document.querySelector('.js-description-seconds').innerHTML  = setSecName(differenceSeconds);
};


export { setSecName, setMinName, setHourName,renderDifferenseTime, setTimeForExams };


const timingName = [
  {
    getKeyForExamsHour: 9,
    getKeyForExamsMins: 30,
    startExamsHour: 10,
    startExamsMin: 0,
  },
  {
    getKeyForExamsHour: 9,
    getKeyForExamsMins: 30,
    startExamsHour: 10,
    startExamsMin: 0,
  },
];

// console.log(timeNaming.getKeyForExamsHour)


const hourBtns = document.querySelectorAll('.choose-time__btn-hours');
const minBtns= document.querySelectorAll('.choose-time__btn-mins');

const inputCurrentHour = document.querySelector('.choose-time__elem--hours');
const inputCurrentMin = document.querySelector('.choose-time__elem--mins');

for ( const hourBtn of hourBtns) {
  hourBtn.addEventListener('click', (evt) => {
    // if ( inputCurrentHour.value <= 0 ) {
      // inputCurrentHour.value = 0;
    // } else {
      inputCurrentHour.value = parseInt(inputCurrentHour.value,10) + parseInt(evt.target.textContent,10);
    // }
  });
}

for ( const minBtn of minBtns) {
  minBtn.addEventListener('click', (evt) => {
    // if ( inputCurrentMin.value <= 0 ) {
      // inputCurrentMin.value = 0;
    // } else {
      inputCurrentMin.value = parseInt(inputCurrentMin.value,10) + parseInt(evt.target.textContent,10);
    // }
  });
};

let currentExamHourFromForm = 0;
let currentExamMinFromForm = 0;

const btnSubmit = document.querySelector('.choose-time__box-btn--submit');

btnSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
  currentExamHourFromForm = inputCurrentHour.value;
  currentExamMinFromForm = inputCurrentMin.value;

  document.querySelector('.choose-time').classList.add('vh');
});

export {currentExamHourFromForm,currentExamMinFromForm}
