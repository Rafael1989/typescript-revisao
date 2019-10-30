//boolean
var estaPago = true;
//number
var idade = 20;
var valor = 29.99;
//string
var empresa = 'Algaworks';
//Template Strings
var nome = 'João';
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = 'Olá meu nomé ' + nome + ' e tenho ' + idade + ' anos.';
//arrays
var notas = [6, 7, 8, 9];
//tuple
var alunos = ['João', 20, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
//Enum 
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
//Any
var algumValor = 4;
algumValor = 'Agoa';
algumValor = true;
//Biblioteca de terceiros...
//Migração de JavaScript para TypeScript...
// Array com vários tipos de dados
//void
function alerta() {
    //... alert('Operação não permitida')
}
//null e undefined -> não faz sentido
var u = undefined;
var n = null;
nome = undefined;
nome = null;
