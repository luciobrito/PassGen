function rodar() {
  var senha = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "$#@!&*",
  ];
  var letraMin = <HTMLInputElement>document.getElementById("letraMin");
  var letraMai = <HTMLInputElement>document.getElementById("letraMai");
  var numero = <HTMLInputElement>document.getElementById("numero");
  var especial = <HTMLInputElement>document.getElementById("especial");
  if (letraMin.checked == false) {
    senha[0] = "";
  }
  if (letraMai.checked == false) {
    senha[1] = "";
  }
  if (numero.checked == false) {
    senha[2] = "";
  }
  if (especial.checked == false) {
    senha[3] = "";
  }

  var senhaString = senha.toString();
  var caracter = senhaString.replace(/,/g, "");
  var resultado = "";

  function randomPas(tamanho) {
    var resultado = "";
    var caracterleng = caracter.length;
    var i = 0;
    for (i = 0; i < tamanho; i++) {
      resultado =
        resultado + caracter.charAt(Math.floor(Math.random() * caracterleng));
    }
    return resultado;
  }
  (<HTMLInputElement>document.getElementById("senha")).value = randomPas(
    (<HTMLInputElement>document.getElementById("range1")).value
  );
  (<HTMLInputElement>document.getElementById("bGerar")).value = "Gerar outra";
}
function tamanhoRange() {
  (<HTMLInputElement>document.getElementById("tamanho")).innerText = (<
    HTMLInputElement
  >document.getElementById("range1")).value;
}

