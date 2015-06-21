import cool from 'cool-ascii-faces';
import colorSchemes from './constants/colorschemes.js';

const faceDiv = document.getElementsByClassName('face-spinner')[0];

const colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

const face = cool().split('').map(function(x, i) {
  return `<span style="color: ${colorScheme[i % colorScheme.length]};">${x}</span>`;
}).join('');
  
faceDiv.innerHTML = face;
