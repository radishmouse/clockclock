import React, { Component } from 'react';
import './App.css';
import Digit from './components/Digit';

export default class App extends Component {
  state = {
    h1: 0,
    h2: 0,
    m1: 0,
    m2: 0,
    s1: 0,
    s2: 0,
  };

  interval = null;

  componentDidMount() {
    this.interval = setInterval(this.timeToClockDigits.bind(this), 500);
  }

  timeToClockDigits() {
    const now = new Date(Date.now());
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let h1 = 0;
    let h2 = 0;
    let m1 = 0;
    let m2 = 0;
    let s1 = 0;
    let s2 = 0;
    if (hours < 10) {
      h2 = hours;
    } else {
      [h1, h2] = hours.toString();
    }
    if (minutes < 10) {
      m2 = minutes;
    } else {
      [m1, m2] = minutes.toString();
    }
    if (seconds < 10) {
      s2 = seconds;
    } else {
      [s1, s2] = seconds.toString();
    }
    this.setState({
      h1: Number(h1),
      h2: Number(h2),
      m1: Number(m1),
      m2: Number(m2),
      s1: Number(s1),
      s2: Number(s2),
    });
  }

  render() {
    const { h1, h2, m1, m2, s1, s2 } = this.state;
    return (
      <div className="App">
        <Digit number={h1} />
        <Digit number={h2} />
        <Digit number={m1} />
        <Digit number={m2} />
        <Digit number={s1} />
        <Digit number={s2} />
      </div>
    );
  }
}
