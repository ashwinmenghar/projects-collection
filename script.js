// import { link } from './links.js'
import {links} from './links.js';
const len = Object.keys(links).length;
const cont = document.querySelector('#collection');

var myObj = Object.entries(links);
for (var i = 0; i < myObj.length; i++){
    var key = myObj[i][0];
    var val = myObj[i][1];

    const a = document.createElement('a');
    a.setAttribute('href', val);
    a.setAttribute('class', 'btn-grad');
    a.setAttribute('target', '_blank');
    a.innerText = key;
    cont.appendChild(a)
}