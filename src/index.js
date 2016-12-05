import setMarkup, { setSize, on, UP, DOWN, LEFT, RIGHT, PRIMARY_ACTION, SECONDARY_ACTION } from 'holoweb';
import { init as initClock } from './clock';
import { animate } from './util';
import position from './position';

/* CSS imports */
import './css/global.css';
import './css/animations.css';

// Initially set default markup
setMarkup(
  `
    <div class="app-container">
      ${ position.getMarkup() }
    </div>
  `
,document.querySelector('#app'));
initClock();

on(UP, e => {

  if(position.goUp()) {
    const elements = document.querySelectorAll('.app-container');
    animate(elements, 'animate-to-bottom')
      .then(() => {

        elements.forEach(el => el.innerHTML = position.getMarkup());

        animate(elements, 'animate-to-very-bottom');
      });
  }


});

on(DOWN, e => {

  if(position.goDown()) {
    const elements = document.querySelectorAll('.app-container');
    animate(elements, 'animate-to-very-top')
      .then(() => {

        elements.forEach(el => el.innerHTML = position.getMarkup());

        animate(elements, 'animate-to-top');
      });
  }


});

on(LEFT, e => {

  if(position.goLeft()) {
    const elements = document.querySelectorAll('.app-container');
    animate(elements, 'animate-to-left')
      .then(() => {

        elements.forEach(el => el.innerHTML = position.getMarkup());

        animate(elements, 'animate-from-left');
      });
  }


});

on(RIGHT, e => {

  if(position.goRight()) {
    const elements = document.querySelectorAll('.app-container');
    animate(elements, 'animate-to-right')
      .then(() => {

        elements.forEach(el => el.innerHTML = position.getMarkup());

        animate(elements, 'animate-from-right');
      });
  }

});
