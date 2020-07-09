class Pessoa {
  constructor(nome, altura, peso) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
  }
}

class Vingador extends Pessoa {
  constructor(
    nome,
    altura,
    peso,
    poderes,
    temArmadura,
    temArma,
    isMembroFundador,
    isImortal
  ) {
    super(nome, altura, peso);
    this.poderes = poderes;
    this.temArmadura = temArmadura;
    this.temArma = temArma;
    this.isMembroFundador = isMembroFundador;
    this.isImortal = isImortal;
  }

  thorlutar() {
    alert(`${this.nome} está lutando usando ${this.poderes[1]}`);
  }
  ironmanlutar() {
    alert(`${this.nome} está lutando usando sua armadura`);
  }
}

const thor = new Vingador(
  "Thor",
  "1.85",
  "100kg",
  ["Deus do Trovão", "Super força", "Vôo", "Longevidade"],
  true,
  true,
  true,
  false
);

const ironman = new Vingador(
  "Iron Man",
  "1.77",
  "80kg",
  ["Sem poderes"],
  true,
  true,
  true,
  false
);

document.getElementById("thorlutar").onclick = function () {
  thor.thorlutar();
};
document.getElementById("ironManlutar").onclick = function () {
  ironman.ironmanlutar();
};