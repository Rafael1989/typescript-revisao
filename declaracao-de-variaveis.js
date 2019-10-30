//var , let e const
//var
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    var cidade = ' em São Paulo';
    if (iniciaJogo) {
        cidade = ' em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(false);
