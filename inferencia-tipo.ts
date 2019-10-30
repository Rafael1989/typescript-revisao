let quantidade = 20;

//quantidade = 'a'; não compila

let x = [1,2,null];
//x[0] = true; não compila

// Contextual typing
window.onmousedown = function(evento: MouseEvent){
    console.log(evento.button);

}