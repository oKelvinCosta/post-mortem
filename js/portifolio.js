/**
 * Created by Kelvin on 10/04/2017.
 */



// Set -------------------------------------


var showIlu = q('#showIlu');
var ilustracao = q('#ilustracao');

var showAni = q('#showAnim');
var animacao = q('#animacao');







// Fire -------------------------------------

showIlu.onclick = function () {
    showIlu.style.opacity = '0';
    showIlu.style.pointerEvents = 'none';

    ilustracao.style.maxHeight = '100%';
};

showAni.onclick = function () {
    showAni.style.opacity = '0';
    showAni.style.pointerEvents = 'none';

    animacao.style.maxHeight = '100%';
};









// Functions -------------------------------------


function q(q) {
    return document.querySelector(q);
}

function col(q) {
    return console.log(q);
}