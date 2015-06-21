import cool from 'cool-ascii-faces';
import colorSchemes from './constants/colorschemes.js';
import 'babel/polyfill';

const faceDiv = document.getElementsByClassName('face-spinner')[0];

const colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

const face = [...cool()].map((x, i) => {
  return `<span style="color: ${colorScheme[i % colorScheme.length]};">${x}</span>`;
}).join('');

faceDiv.innerHTML = face;
