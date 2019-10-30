//boolean
let estaPago: boolean = true;

//number
let idade: number = 20;
let valor: number = 29.99;

//string
let empresa: string = 'Algaworks';

//Template Strings
let nome: string = 'João';
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTradicional = 'Olá meu nomé ' + nome + ' e tenho ' + idade + ' anos.';

//arrays
let notas: number[] = [6,7,8,9];

//tuple
let alunos: [string, number, string] = ['João',20, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

//Enum 
enum Cor{Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

//Any

let algumValor: any = 4;
algumValor = 'Agoa';
algumValor = true;

//Biblioteca de terceiros...
//Migração de JavaScript para TypeScript...
// Array com vários tipos de dados

//void
function alerta(): void{
    //... alert('Operação não permitida')
}

//null e undefined -> não faz sentido
let u: undefined = undefined;
let n: null = null;

nome = undefined;
nome = null;