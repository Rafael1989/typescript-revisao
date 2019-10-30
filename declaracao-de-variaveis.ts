//var , let e const

//var
function iniciarTime(iniciaJogo: boolean){
    const nome: string = 'Messi e amigos';
    let cidade: string = ' em São Paulo';
    if(iniciaJogo){
        cidade = ' em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(false);