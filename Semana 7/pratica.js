let pessoas = [
  { nome: "João", idade: 18, entrouGamelab: true },
  { nome: "Maria", idade: 20, entrouGamelab: true },
  { nome: "Jorge", idade: 19, entrouGamelab: false },
];

console.log(pessoas.filter((elemento) => elemento.entrouGamelab));

let fahrenheit = 100;

function toCelsius(a) {
  let celciusResultado = ((a - 32) * 5) / 9;
  return celciusResultado;
}

let celcius = toCelsius(fahrenheit);
console.log(celcius);

class livro {
  constructor(titulo, autor, sendoEmprestado) {
    this.titulo = titulo;
    this.autor = autor;
    this.sendoEmprestado = sendoEmprestado;
  }
  emprestar() {
    if (!this.SendoEmprestado) {
      this.sendoEmprestado = true;
      return "Esse livro foi emprestado!";
    } else {
      return "Esse livro está indisponível!";
    }
  }
  devolver() {
    if (this.sendoEmprestado) {
      this.sendoEmprestado = false;
      return "Esse livro foi devolvido!";
    } else {
      return "Esse livro não foi emprestado!";
    }
  }
  informacoes() {
    return `O livro ${this.titulo} foi escrito por ${this.autor}, com a variável emprestado sendo igual a: ${this.sendoEmprestado} `;
  }
}

const livroBacana = new livro("1984", "George Orwell", false);

console.log(livroBacana.devolver());
console.log(livroBacana.informacoes());
