// Set -------------------------------------


var videoFundo = q('#videoFundo');

var pularI = q('#pularIntro');
var voltarI = q('#voltarIntro');
var estado = 1;


// Fire -------------------------------------



// Para iniciar depois do carregamento englobando tudo
window.onload = function () {



    // estado 1 video rodando
    // estado 2 pulou
    // estado 3 redimencionou para < 768px

    hideCall();




    pularI.onclick = function () {

        showCall();
        videoFundo.load();
        videoFundo.muted = true;
        videoFundo.play();


        voltarI.style.opacity = '1';
        voltarI.style.pointerEvents = 'auto';

        pularI.style.opacity = '0';
        pularI.style.pointerEvents = 'none';

        estado = 2;
    };


    voltarI.onclick = function () {

        hideCall();
        videoFundo.muted = false;

        videoFundo.load();
        videoFundo.play();

        pularI.style.opacity = '1';
        pularI.style.pointerEvents = 'auto';

        voltarI.style.opacity = '0';
        voltarI.style.pointerEvents = 'none';

        estado = 1;
    };


    window.onresize = function () {

        // Tablet
        if (window.innerWidth < 768) {

            videoFundo.pause();
            showCall();

            pularI.style.opacity = '0';
            pularI.style.pointerEvents = 'none';
            voltarI.style.opacity = '0';
            voltarI.style.pointerEvents = 'none';

        } else {
            // Roda o video e o video mutado
            videoFundo.play();

            // pode pular
            if (estado == 1) {
                hideCall();

                pularI.style.opacity = '1';
                pularI.style.pointerEvents = 'auto';

                voltarI.style.opacity = '0';
                voltarI.style.pointerEvents = 'none';

            } else if (estado == 2) {
                // pode voltar
                showCall();
                voltarI.style.opacity = '1';
                voltarI.style.pointerEvents = 'auto';

                pularI.style.opacity = '0';
                pularI.style.pointerEvents = 'none';
            }
        }
    };


    // Para mobile
    if (window.innerWidth <= 768) {
        showCall();
        videoFundo.pause();

        pularI.style.opacity = '0';
        pularI.style.pointerEvents = 'none';

        voltarI.style.opacity = '0';
        voltarI.style.pointerEvents = 'none';

    } else {

        let promise = videoFundo.play();

        if (promise !== undefined) {
            promise.then(_ => {
                // Play
                hideCall();
                console.log('bt');
            }).catch(error => {
                console.log('erro');

                showCall();
                videoFundo.pause();

                pularI.style.opacity = '0';
                pularI.style.pointerEvents = 'none';

                voltarI.style.opacity = '0';
                voltarI.style.pointerEvents = 'none';

            });
        }

    }



    videoFundo.onended = function () {

        // Inicia video muted
        videoFundo.currentTime = 0;
        videoFundo.muted = true;
        videoFundo.loop = true;

        videoFundo.play();

        // Mostra Call
        showCall();

        estado = 2;
        voltarI.style.opacity = '1';
        voltarI.style.pointerEvents = 'auto';

        pularI.style.opacity = '0';
        pularI.style.pointerEvents = 'none';

    };


}




// Functions -------------------------------------


function showCall() {
    var call = q('#call');
    call.style.zIndex = '3';
    call.style.opacity = '1';

}

function hideCall() {
    var call = q('#call');
    call.style.zIndex = '0';
    call.style.opacity = '0';
}

function q(q) {
    return document.querySelector(q);
}

function col(q) {
    return console.log(q);
}


// Alterações:
// window.onload