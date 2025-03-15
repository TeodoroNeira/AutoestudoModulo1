# Instruções

- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como `` esta aqui com `  `` ou

````javascript
//esta aqui com ```
let a = "olá";
let b = 10;
print(a);
````

- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove.

# Questões objetivas

**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**

```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```

a) A saída será undefined seguido de erro

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

_A resposta correta é o item A. Isso se deve ao fato da variável x ser declarada como var, ao invés de let. Logo, ela não respeita o escopo. Já a variável y, por ser declarada com let, respeita o escopo, resultando no erro._

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
  if (a || b === 0) {
    return "Erro: número inválido";
  }
  return a + b;
}
console.log(soma(2, 0));
```

a) Substituir if (a || b === 0) por if (a === 0 || b === 0)

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

_A resposta correta é o item A. Isso se deve ao fato da verificação necessitar que apenas um dos valores seja 0 para retornar que é inválido. O termo && indica: E, logo a alternativa B e C estão incorretas. Remover a verificação também iria contra o intuito do programa. Logo a alternativa A verifica se a está igual a 0, e depois, por meio dos itens || (que representam "ou"), verifica se b é igual a 0._

---

**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
function calcularPreco(tipo) {
  let preco;

  switch (tipo) {
    case "eletrônico":
      preco = 1000;
    case "vestuário":
      preco = 200;
      break;
    case "alimento":
      preco = 50;
      break;
    default:
      preco = 0;
  }

  return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

b) O código imprime 200.

c) O código imprime 50.

d) O código gera um erro.

_A alternativa correta é o item B. Isso se deve ao fato que, ao utilizar o switch, apesar do tipo ser definido como eletrônico, após executar a alteração de preço para 1000, o código não coloca o termo break, logo ele continuará seguindo adiante. Dessa forma, o valor é alterado para o próximo passo, na qual o preço é 200._

---

**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**

```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros
  .map((x) => x * 2)
  .filter((x) => x > 5)
  .reduce((a, b) => a + b, 0);

console.log(resultado);
```

a) 0

b) 6

c) 18

d) 24

_A reposta correta é o item D. Isso se deve ao fato do comando .map criar um novo array utilizando uma função (nesse caso multiplicando os valores por 2), com base no array anterior. Com isso o array passa a ser: [2,4,6,8,10]. A próxima parte do código filtra o array para apenas os itens que são maiores que 5, por meio do comando .filter. O array passa a ser [6,8,10]. Por fim, o comando .reduce transforma o array em apenas um número, realizando a soma de todos os seus termos, e depois somando com 0. Logo, 6 + 8 + 10 = 24._

---

**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

c) ["banana", "abacaxi", "manga", "laranja"]

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

_A alternativa correta é a C. o comando .splice retira os itens especificados do array, substituindo por novos. como o array começa pelo número 0, o segundo e o terceiro item (nesse caso, maçã e uva) são substituídos por abacaxi e manga._

---

**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.

a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

_A alternativa correta é o item A. a afirmação do item I é verdadeira, e o item II exemplifica corretamente como a herança é utilizada no javascript._

---

**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```

I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

a) I e II são verdadeiras.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

_A resposta correta é o item A. O item III é falso, já que javscript permite a herança de classe, por meio de extends._

---

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

b) A asserção é verdadeira e a razão é falsa.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

_A alternativa correta é o item C. A explicação do conceito de polimorfismo está correta, por meio sua implementação no Javascript é feito pela sobreposição, ao invés de sobrecarga. A questão 7 mostra esse conceito, onde o método apresentar() da classe filho sobrepõe o da classe pai._

---

# Questões dissertativas

9. O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {
  for (i = 0; i < numeros.size; i++) {
    soma = 2 * numeros[i];
  }
  return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

```javascript
function somaArray(numeros) {
  //Os resultados são armazenados no array criado a seguir
  let resultados = [];

  //O código antigo não declarava a variável i, o comando .size está incorreto (foi substituído por .lenght, que se baseia no número de itens do array.)
  for (let i = 0; i < numeros.length; i++) {
    let soma = 2 * numeros[i]; //O código antigo não declarava a variável soma
    resultados.push(soma); //O comando .push coloca o resultado da soma como um novo item no array resultados
  }

  return resultados; //Quanto todos os itens do array forem somados, o código retorna o array dos resultados
}
console.log(somaArray([1, 2, 3, 4]));
```

---

10. Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

_A classe Livro herda os atributos nome e preço da classe Produto, além do método calcularDesconto(). Isso ocorre por meio do trecho extends. O método calcularDesconto() é sobreposto na classe Livros, modificando o total do desconto._

```javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  calcularDesconto() {
    this.preco = this.preco * 0.9;
    return this.preco;
  }
}

class Livro extends Produto {
  constructor(nome, preco) {
    super(nome, preco);
  }

  calcularDesconto() {
    this.preco = this.preco * 0.8;
    return this.preco;
  }
}

const livroMatematica = new Livro("Cálculo 2", 10);

console.log(livroMatematica.calcularDesconto());
console.log(livroMatematica.nome);
```
