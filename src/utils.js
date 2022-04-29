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
  } else {
    const tsec=today % 60;
    today=Math.floor(today / 60);
    const tmin=today % 60;
    today=Math.floor(today / 60);
    const thour=today % 24;
    today=Math.floor(today/24);

    if ( (timeEnd-today) % 60 === 0) {

    }
    document.querySelector('.js-time-now-days').innerHTML=today;
    // if (true) {
    // document.querySelector('.timer__day').classList.add('vh');
    // document.querySelector('.first-collum').classList.add('vh');
    // }
    document.querySelector('.js-time-now-hours').innerHTML=thour;

    if (thour === 0) {
      document.querySelector('.timer__column--hour').classList.add('vh');
    }
    document.querySelector('.js-time-now-mins').innerHTML=tmin;
    document.querySelector('.js-time-now-seconds').innerHTML=tsec;
    // window.setTimeout(differenceTimes(timeEnd),10000);
  }
};

if (document.querySelector('.first-collum')) {
  document.querySelector('.first-collum').classList.add('vh');
}
if (document.querySelector('.days')) {
  document.querySelectorAll('.days').forEach( (element) => {
    element.classList.add('fz72px');
  });

}


export { setSecName, setMinName, setHourName, differenceTimes };
