import './css/set-alarm.css';

export const markup = `
  <div class="set-alarm">
    <div class="number-picker">
      <button class="hours-plus-btn">+</button>
      <input type="number" class="alarm-hours" value="00"/>
      <button class="hours-minus-btn">-</button>
    </div>

    <div class="number-picker">
      <button class="minutes-plus-btn">+</button>
      <input type="number" class="alarm-minutes" value="00"/>
      <button class="minutes-minus-btn">-</button>
    </div>
  </div>
`;

let hasInitialized = false;
let currHours = 0;
let currMinutes = 0;

export function init() {
  if(!hasInitialized) {
    hasInitialized = true;
  }
}

export function setAlarm() {

}
