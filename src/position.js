import { markup as clockMarkup } from './clock';
import { markup as setAlarmMarkup } from './set-alarm';
import Alarm from './alarm';

class HoloPosition {

  alarm = [];
  songs = [];

  positions = [
    {
      pos: [0, 0],
      markup: clockMarkup,
      current: true
    },
    {
      pos: [0, 1],
      markup: setAlarmMarkup,
      current: false
    }
  ];

  constructor() {
    this.alarms = [ new Alarm(10, 15), new Alarm(22, 15) ];
    this.alarms.forEach(a => this.insertAlarm(a));
  }


  insertAlarm(alarm) {
    let currPos = [1, 0];

    while( this.getByPos( currPos ) ) {
      currPos = [ currPos[0] + 1, 0 ];
    }

    // CurrPos is free!

    this.positions.push({
      pos: currPos,
      current: false,
      markup: alarm.getMarkup()
    });
  }


  goUp() {
    return this.makeStep( 0, 1 );
  }

  goDown() {
    return this.makeStep( 0, -1 );
  }

  goLeft() {
    return this.makeStep( -1, 0 );
  }

  goRight() {
    return this.makeStep( 1, 0 );
  }

  getMarkup() {
    return this.getCurrent().markup;
  }




  getCurrent() {
    return this.positions.filter(pos => pos.current)[0];
  }

  getByPos(newPos) {
    return this.positions.filter(pos => ( pos.pos[0] == newPos[0] && pos.pos[1] == newPos[1] ))[0];
  }

  makeStep(addX, addY) {
    const current = this.getCurrent();
    const newPos = [ current.pos[0] + addX, current.pos[1] + addY ];
    const position = this.getByPos(newPos);

    if( position ) {
      current.current = false;
      position.current = true;
      return true;
    }

    return false;
  }

}

const holoPos = new HoloPosition();

export default holoPos;
