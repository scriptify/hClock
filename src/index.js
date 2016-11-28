import setMarkup, { setSize, on, UP, DOWN, LEFT, RIGHT, PRIMARY_ACTION, SECONDARY_ACTION } from 'holoweb-vanillajs';
import { animate } from './util';

/* CSS imports */
import './css/global.css';
import './css/animations.css';
import './css/clock.css';

setMarkup(`
  <div class="app-container">
    <div class="clock">
      <div class="digit">10</div>
      <div class="digit">20</div>
      <div class="digit">11</div>
    </div>
  </div>
`
, document.querySelector('#app'));

on(UP, e => {
  const elements = document.querySelectorAll('.app-container');
  animate(elements, 'animate-to-bottom')
    .then(() => {
      animate(elements, 'animate-to-very-bottom');
    });
});

on(DOWN, e => {
  const elements = document.querySelectorAll('.app-container');
  animate(elements, 'animate-to-very-top')
    .then(() => {
      animate(elements, 'animate-to-top');
    });
});

on(LEFT, e => {
  const elements = document.querySelectorAll('.app-container');
  animate(elements, 'animate-to-left')
    .then(() => {
      animate(elements, 'animate-from-left');
    });
});

on(RIGHT, e => {
  const elements = document.querySelectorAll('.app-container');
  animate(elements, 'animate-to-right')
    .then(() => {
      animate(elements, 'animate-from-right');
    });
});
