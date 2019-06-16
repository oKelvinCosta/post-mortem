// Set -------------------------------------


var videoFundo;

var pularI;
var voltarI;
var estado;


// Fire -------------------------------------



// Para iniciar depois do carregamento englobando tudo
window.onload = function () {

    initialState();

    // Para mobile
    if (window.innerWidth <= 768) {
        showCall();
        videoFundo.pause();

        pularI.style.opacity = '0';
        pularI.style.pointerEvents = 'none';

        voltarI.style.opacity = '0';
        voltarI.style.pointerEvents = 'none';

    } else {
        playVideo(true);
    }






    pularI.onclick = function () {

        showCall();
        playVideo(true);

        estado = 2;
    };


    voltarI.onclick = function () {

        hideCall();
        playVideo();

        estado = 1;
    };


    window.onresize = function () {

        // Tablet
        if (window.innerWidth < 768) {

            videoFundo.pause();
            showCall();


        } else {
            // Roda o video mutado
            if (videoFundo.paused) {
                playVideo(true);
            }

            showCall();

        }
    };





    videoFundo.onended = function () {

        // Inicia video muted
        // videoFundo.currentTime = 0;
        // videoFundo.loop = true;

        // console.log('video reiniciou');

        playVideo(true);

        // Mostra Call
        showCall();

        estado = 2;

    };


}




// Functions -------------------------------------

function initialState() {
    videoFundo = q('#videoFundo');
    pularI = q('#pularIntro');
    voltarI = q('#voltarIntro');
    estado = 1;
    showCall();
}

function playVideo(muted = false) {
    videoFundo.load();
    videoFundo.muted = muted;
    let promise = videoFundo.play();


    if (promise !== undefined) {
        promise.then(_ => {

        }).catch(error => {


            var call = q('#call');
            call.style.zIndex = '3';
            call.style.opacity = '1';
            voltarI.style.opacity = '0';
            voltarI.style.pointerEvents = 'none';

            console.log('ruim');

            return;

        });
    }
}

function showCall() {
    var call = q('#call');
    call.style.zIndex = '3';
    call.style.opacity = '1';

    voltarI.style.opacity = '1';
    voltarI.style.pointerEvents = 'auto';

    pularI.style.opacity = '0';
    pularI.style.pointerEvents = 'none';
}

function hideCall() {
    var call = q('#call');
    call.style.zIndex = '0';
    call.style.opacity = '0';

    voltarI.style.opacity = '0';
    voltarI.style.pointerEvents = 'none';

    pularI.style.opacity = '1';
    pularI.style.pointerEvents = 'auto';
}

function q(q) {
    return document.querySelector(q);
}

function col(q) {
    return console.log(q);
}


// Alterações:
// window.onload