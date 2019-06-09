/**
 * Created by Kelvin on 07/05/2017.
 */

// Set -------------------------------------

var showIlu = q('#showIlu');
var ilustracao = q('#ilustracao');
// Tab
var btnIlustracao = q('#btnIlustracao');


var showAni = q('#showAnim');
var animacao = q('#animacao');
// Tab
var btnAnimacao = q('#btnAnimacao');


// Fire -------------------------------------

if(window.innerWidth > 768){
    showIlu.style.opacity = '0';
    showIlu.style.pointerEvents = 'none';
    ilustracao.style.maxHeight = '100%';

    showAni.style.opacity = '0';
    showAni.style.pointerEvents = 'none';
    animacao.style.maxHeight = '100%';
}

// ilustracao.onclick = function () {
//     // Aparece o outro
//     showAni.style.opacity = '1';
//     showAni.style.pointerEvents = 'auto';
//
//     animacao.style.maxHeight = '1715px';
// };



$(function () {
    btnAnimacao.onclick = function () {
        // Aparece o outro
        showAni.style.opacity = '1';
        showAni.style.pointerEvents = 'auto';

        animacao.style.maxHeight = '1715px';

        $('#vid > div').fadeIn('slow');
    };
});

// animacao.onclick = function () {
//     // Aparece o outro
//     showIlu.style.opacity = '1';
//     showIlu.style.pointerEvents = 'auto';
//
//     ilustracao.style.maxHeight = '1715px';
// };

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


function q(q) {
    return document.querySelector(q);
}

function col(q) {
    return console.log(q);
}