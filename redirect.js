const urlGitHub = 'https://okelvincosta.github.io/post-mortem';
const urlApi = 'http://pedroferreira.cc/api.php';

// Se o site do Pedro.cc NÃO estiver no ar, redireciona para a minha versão do GitHub
$.ajax({
    url: urlApi,
    // crossDomain: true,
    sucess: (api) => {
        let json = JSON.parse(api);
        if (json.status === 200) {
            console.log(1);

        } else {
            console.log(2);
            window.location.replace(urlGitHub);
        }
    },
    error: (api) => {
        console.log('erro ajax api');
        window.location.replace(urlGitHub);
    }
})