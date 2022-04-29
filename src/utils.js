const setHourName = (intInput) => {
  const lastCiftIntInpit = intInput % 10;
  if (lastCiftIntInpit === 1 ) {
    return 'Час';
  }
  if (lastCiftIntInpit >= 2 && lastCiftIntInpit <= 4 ) {
    return 'Часа';
  }
  if (intInput === 0 || intInput >= 5 && intInput <= 20 ) {
    return 'Часов';
  }
};

const setMinName = (intInput) => {
  if (intInput === 1) {
    return 'минута';
  }
  if (intInput ===0 || intInput >= 5 && intInput <= 59 ) {
    return 'минут';
  }
  if (intInput >= 2 && intInput <= 4 ) {
    return 'минуты';
  }
};

const setSecName = (intInput) => {
  if (intInput === 1) {
    return 'секунда';
  }
  if (intInput ===0 || intInput >= 5 && intInput <= 59 ) {
    return 'секунд';
  }
  if (intInput >= 2 && intInput <= 4 ) {
    return 'секунды';
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
    return 'Дня';
  }
  return 'Дня';
};

const setNameStepExam = (inputTime) => {
  const getHours = inputTime.getHours();
  const getMin = inputTime.getMinutes();
  if ( getHours >= 9 && getHours < 10 && getMin >= 31 && getMin<= 59 ) {
    return 'До начала экзамена';
  }
  if ( getHours >= 8 && getHours <= 9 && getMin>= 0 && getMin <= 30 ) {
    return 'До получения ключа';
  }
  if ( getHours >= 10 && getHours <= 14 && getMin >= 0 && getMin <= 21 ) {
    return 'До завершения экзамена';
  }
  return 'До следующего экзамена';
};

// document.querySelector('.timer__title').textContent = setNameStepExam(today);
// document.querySelector('.timer__description-sec').textContent=setSecName(tsec);
// document.querySelector('.time-name-hours').textContent=setHourName(thour);
// document.querySelector('.timer__description-min').textContent=setMinName(tmin);

const differenceTimes = (timeEnd) => {
  let today = new Date();
  console.log(`setNameStepExam=${setNameStepExam(today)} today=${today}`); //eslint-disable-line
  today = Math.floor((timeEnd-today)/1000);
  if (today < 1) {
    return true;
  }

  const tsec=today % 60;
  today=Math.floor(today / 60);
  const tmin=today % 60;
  today=Math.floor(today / 60);;
  const thour=today % 24;
  today=Math.floor(today/24);

  if ( (timeEnd-today) % 60 === 0) {

  }
  // if (true) {
  // document.querySelector('.timer__day').classList.add('vh');
  // document.querySelector('.first-collum').classList.add('vh');
  // }
  if (thour === 0) {
    document.querySelector('.timer__column--hour').classList.add('vh');
  }
  // window.setTimeout(differenceTimes(timeEnd),10000);
};

const differenceDays = (timeEnd) => {
  let today = Math.floor();
  console.log(`today=${ ( Math.round(( ( (timeEnd -  Date.now()) / 1000 ) / 60  ) % 60)  )}`);
  return  Math.round(( ( (timeEnd -  Date.now()) / 1000 ) / 3600 ) / 24);
};

const differenceHours = (timeEnd) => {
  // let today = Math.round(( ( (timeEnd -  Date.now()) / 1000 ) / 3600 );
  return Math.round( (( (timeEnd -  Date.now()) / 1000 ) / 3600) % 24 );
};
const differenceMins = (timeEnd) => {
  let today = Math.floor( ( timeEnd - new Date() ) / 1000 );
  // console.log(`${ Math.floor(today / ( 60 ) % 60) }`);
  return Math.floor(today  / 60 % 60);
};
const differenceSeconds = (timeEnd) => {
  let today = Math.floor( ( timeEnd - new Date() ) / 1000 );
  return today % 60;
};

if (document.querySelector('.days')) {
  document.querySelectorAll('.days').forEach( (element) => {
    element.classList.add('fz72px');
  });

}

const renderDifferenseTime = (endTime) => {
  document.querySelector('.js-time-now-days').innerHTML= differenceDays(endTime);
  document.querySelector('.js-time-now-hours').innerHTML=differenceHours(endTime);
  document.querySelector('.js-time-now-mins').innerHTML=differenceMins(endTime);
  document.querySelector('.js-time-now-seconds').innerHTML=differenceSeconds(endTime);

  document.querySelector('.js-description-days').innerHTML=setDayName(differenceDays(endTime));
  document.querySelector('.js-description-hours').innerHTML=setHourName(differenceHours(endTime));
  document.querySelector('.js-description-mins').innerHTML=setMinName(differenceMins(endTime));
  document.querySelector('.js-description-secs').innerHTML=setSecName(differenceSeconds(endTime));

}


export { setSecName, setMinName, setHourName, differenceHours, differenceTimes,renderDifferenseTime };
