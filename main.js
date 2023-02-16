import './style.css'
import javascriptLogo from './javascript.svg'
import { BreakingBadApp } from './src/breaking-bad/breaking-bad-app';

const base = '/http-app/';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${base}vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="title-app"></h1>
    <div class="card">
    </div>
  </div>
`;

const element = document.querySelector('.card');

BreakingBadApp( element );