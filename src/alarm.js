import './css/alarm.css';

export default class Alarm {
  hours;
  minutes;

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  getMarkup() {
    return `
      <div class="alarm">
        <div class="hours"><p>${ this.hours }</p></div>
        <div class="minutes"><p>${ this.minutes }</p></div>
      </div>
    `;
  }
}
