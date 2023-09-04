// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = prompt("Como está o dia?");

if (dia === "claro") {
  console.log("Ainda está claro");
} else {
  console.log("Está escuro");
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (index = 0; index <= 20; index += 2) {
  console.log(index);
}

// 03 - crie uma função que exiba uma mensagem no console
function mensagem () {
    console.log('Exibe uma mensagem');
}

mensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function ola (nome) {
    console.log(`Olá, ${nome}!`);
}

ola('Mateus');

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function pessoa (name, idade, estilo) {
    console.log(`Olá, ${name}! Você tem ${idade} anos. Vi que gosta de ${estilo}. Que bacana!`);
}

pessoa('Mateus', 27, 'Rap');

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filme (filme, musica) {
    console.log(`Esse filme ${filme} e essa música ${musica} são muito bons!`);
}

filme('O Estranho Mundo de Jack', 'Gira Mundo');

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo (num) {
    tresVezes = num * 3;
    console.log(tresVezes);
} 

triplo(10);

// 08 - crie uma função que verifique se uma variável é true ou false
function verificaVariavel (variavel) {
  if (variavel == true){
    console.log('A variável é true');
  } else if (variavel == false) {
    console.log('A variável é false');
  } else {
    console.log('Não é um boolean');
  }
};

verificaVariavel ('true');

// 09 - Crie um array que receba 5 itens e exiba no console
let colaboradores = ['Mateus', 'Carlos', 'Neuza', 'Fernanda', 'Laura'];
console.log(colaboradores);

// 10 - Utilize um método para adicionar um nome ao inicio do array. 
colaboradores.unshift('Joaquim');
console.log(colaboradores);

// 11 - Utilize um método para remover o último nome do array.
colaboradores.pop();
console.log(colaboradores);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
colaboradores.splice(5, 0, 'Panqueca', 'Mel');
console.log(colaboradores);

// 13 - Utilize um método para remover o primeiro nome do array.
colaboradores.shift();
console.log(colaboradores);

// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers);

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    nome: 'Mateus',
    idade: 27,
    cidade: 'Araras'
};

// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.hobby = 'Tocar violão';

// 17 - Remova uma propriedade desse objeto.
delete sobreMim.cidade;

//18 - Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// 19 - Crie um array chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.
const cadastro = [
    {
      nome: "João",
      idade: 30,
      telefone: "123456789",
      amigos: ["Maria", "Pedro", "Ana", "Lucas"]
    },
    {
      nome: "Maria",
      idade: 25,
      telefone: "987654321",
      amigos: ["João", "Pedro", "Carlos", "Ana"]
    },
    {
      nome: "Pedro",
      idade: 28,
      telefone: "555555555",
      amigos: ["João", "Maria", "Lucas", "Paula"]
    },
    {
      nome: "Ana",
      idade: 27,
      telefone: "777777777",
      amigos: ["Maria", "Lucas", "João", "Pedro"]
    },
    {
      nome: "Lucas",
      idade: 32,
      telefone: "999999999",
      amigos: ["Pedro", "Ana", "Paula", "Carlos"]
    }
  ];

  // 20 - Mostre no console o nome de um amigo de cada lista.
  for (let index = 0; index < cadastro.length; index += 1) {
    console.log(cadastro[index].amigos[1]);
  }
  




