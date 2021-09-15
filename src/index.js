import './sass/main.scss';
import { getRefs } from './js/getRefs';

const refs = getRefs();

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const bodyColor = () => {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(bodyColor, 1000);
  refs.startBtn.disabled = true;
});
refs.stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  // bodyRef.style.backgroundColor = 'pink';
  refs.stopBtn.disabled = false;
});
