import {createElem} from "./utils.js";

const elem = createElem('div', 'header__title');
const header = document.querySelector('header');
elem.textContent = 'File JS';
header.append(elem);

