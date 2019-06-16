<?php
    // Mini API para saber se o site está no ar, senão, redireciona para a minha versão no GitHub Pages
    $api = [
        'status'=> 200,
        'data'=> [
            'response'=> 'O site está no ar'
        ]
    ];

    $json = json_encode($api);

    echo $json;

?>