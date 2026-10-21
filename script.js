const btnDividir = document.querySelector("#dividir");
const btnMultiplicar = document.querySelector("#vezes");
const btnSomar = document.querySelector("#mais");
const btnSubtrair = document.querySelector("#menos");

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

let primeiroNumero = 0;
let operador = 0;
let segundoNumero = 0;

function operate(a, operador, b) {
  if (operador === "+") {
    return somar(a, b);
  } else if (operador === "-") {
    return subtrair(a, b);
  } else if (operador === "*") {
    return multiplicar(a, b);
  } else if (operador === "/") {
    return dividir(a, b);
  }
}

let display = document.querySelector("#display");

const botoesNumeros = document.querySelectorAll(".btn-number");

botoesNumeros.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    if (display.textContent == 0) {
      display.textContent = "";
    }

    display.textContent = display.textContent + e.target.textContent; // ou e.target.dataset.number
  });
});

const guardarOperacao = document.querySelectorAll(".btn-operator");

guardarOperacao.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    primeiroNumero = display.textContent;
    operador = e.target.textContent;
    display.textContent = "";
  });
});

const realizarConta = document.querySelectorAll(".btn-equals");

realizarConta.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    segundoNumero = display.textContent;

    if (operador === "÷" && segundoNumero === "0") {
      display.textContent = "NULL";
      return;
    }
    return (display.textContent = operate(
      Number(primeiroNumero),
      operador,
      Number(segundoNumero),
    ));
  });
});

const clear = document.querySelectorAll("#clear");

clear.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    primeiroNumero = 0;
    operador = 0;
    segundoNumero = 0;
    display.textContent = 0;
  });
});
