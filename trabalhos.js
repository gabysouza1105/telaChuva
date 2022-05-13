
function toggle(id) {
    const card = document.getElementById(id)
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    } else {
        card.classList.add('d-none')
    }
}

function criarTopico(id) {
    var topicoAtual = document.getElementById(id);
    if (!topicoAtual.classList.contains('animar-esconder')) {
        topicoAtual.classList.add('animar-transicao');
        topicoAtual.classList.add('animar-esconder');
    }
    var topicoMostrar;
    if (id == 'criar-topico') {
        topicoMostrar = 'form-topico';
    } else if (id == 'form-topico') {
        topicoMostrar = 'novo-topico';
    } else if (id == 'novo-topico') {
        topicoMostrar = 'form-topico';
    }

    var proximo = function (event) {
        topicoAtual.classList.remove('animar-transicao');
        document.getElementById(topicoMostrar).classList.add('animar-transicao');
        document.getElementById(topicoMostrar).clientWidth;
        document.getElementById(topicoMostrar).classList.remove('animar-esconder');
        topicoAtual.removeEventListener('transitionend', proximo);
    };

    topicoAtual.addEventListener('transitionend', proximo);
}

function mostrarPergunta(id) {
    const inicial = document.getElementById(id)
    const expandido = document.getElementById('corpo-expandido')
    if (inicial.classList.contains('d-none')) {
        expandido.classList.add('d-none')
        inicial.classList.remove('d-none')
    } else {
        inicial.classList.add('d-none')
        expandido.classList.remove('d-none')
    }
}