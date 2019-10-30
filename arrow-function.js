const precos = ['10','23','19'];

/* const precosEmReais = precos.map(function(preco){
    return 'R$ ' + preco + ',00';
}); */

console.log(precos.map(preco => 'R$ ' + preco + ',00'));

const acimaDeVinte = precos
    .filter(preco => preco > 20)
    .map(preco => 'R$ ' + preco + ',00');
    
console.log(acimaDeVinte);