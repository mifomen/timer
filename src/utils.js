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


const differenceTime = (TimeStart) => {
  let today = new Date();
  console.log(`setNameStepExam=${setNameStepExam(today)} today=${today}`); //eslint-disable-line
  const timerTitle = document.querySelector('.timer__title').textContent = setNameStepExam(today);

  today = Math.floor((TimeStart-today)/1000);
  if (today < 1) {
    return true;
  } else {
    const tsec=today % 60;
    document.querySelector('.timer__description-sec').textContent=setSecName(tsec);
    today=Math.floor(today / 60);
    const tmin=today % 60;
    today=Math.floor(today / 60);
    const thour=today % 24;
    document.querySelector('.time-name-hours').textContent=setHourName(thour);

    today=Math.floor(today/24);
    document.querySelector('.timer__description-min').textContent=setMinName(tmin);

    if ( (TimeStart-today) % 60 === 0) {
      document.querySelector('.first-collum').classList.add('vh');
      document.querySelectorAll('.days').forEach( (element) => {
        element.classList.add('fz72px');
      });
    }
    document.querySelector('#day').innerHTML=today;
    // if (true) {
    // document.querySelector('.timer__day').classList.add('vh');
    // document.querySelector('.first-collum').classList.add('vh');
    // }
    document.querySelector('#hour').innerHTML=thour;

    if (thour === 0) {
      document.querySelector('.timer__column--hour').classList.add('vh');
    }
    document.querySelector('#min').innerHTML=tmin;
    document.querySelector('#sec').innerHTML=tsec;
    window.setTimeout(Timer(timeEnd),10000);
  }
};

export { setSecName, setMinName, setHourName, differenceTime };
