import { animate } from './util';
import './css/clock.css';

export const init = () => {

  const hasChanged = (elem, currentVal) => {
    return ( parseFloat(elem.innerHTML) !== parseFloat(currentVal) );
  };

  let date = new Date();

  const setTime = () => {

    if(!document.querySelector('.clock'))
      return;

    date = new Date();
    const minutesEl = document.querySelectorAll('.digit-minutes');
    const hoursEl = document.querySelectorAll('.digit-hours');
    const secondsEl = document.querySelectorAll('.digit-seconds');

    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    if( hasChanged(secondsEl[0], seconds) ) {
      secondsEl.forEach(el => {
        animate(el, 'animate-seconds-part-1')
          .then(() => {
            el.innerHTML = seconds;
            animate(el, 'animate-seconds-part-2');
          });
      })
    }

    if( hasChanged(minutesEl[0], minutes) ) {
      document.querySelectorAll('.minutes').forEach(el => {
        animate(el, 'animate-rotate-part-1')
          .then(() => {
            minutesEl.forEach(el => el.innerHTML = minutes);
            animate(el, 'animate-rotate-part-2');
          });
      })
    }

    if( hasChanged(hoursEl[0], hours) ) {
      document.querySelectorAll('.hours').forEach(el => {
        animate(el, 'animate-rotate-part-1')
          .then(() => {
            hoursEl.forEach(el => el.innerHTML = hours);
            animate(el, 'animate-rotate-part-2');
          });
      })
    }

  }

  setTime();
  window.setInterval(() => {
    setTime();
  }, 1000);
};


export const markup = `
  <div class="clock">
    <div class="hours side"><p class="font digit-hours">0</p></div>
    <div class="minutes side"><p class="font digit-minutes">0</p></div>
    <div class="seconds side"><p class="font digit-seconds">0</p></div>
  </div>
`;
