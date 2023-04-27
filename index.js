let fatu1 = "";
let fatu2 = "";
let fatu3 = "";
let opção = "";
let soma = 0;
let presunçãoIr = 0;
let presunçãoCsll = 0;
let ir = 0;
let irAd = 0;
let csll = 0;
let irPagar = 0;
let csllPagar = 0;

function calcular() {
  fatu1 = document.getElementById("fatu1").value;
  fatu2 = document.getElementById("fatu2").value;
  fatu3 = document.getElementById("fatu3").value;

  soma = parseFloat(fatu1) + parseFloat(fatu2) + parseFloat(fatu3);

  document.getElementById("fatu1").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(fatu1);
  document.getElementById("fatu2").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(fatu2);
  document.getElementById("fatu3").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(fatu3);

  document.getElementById("soma").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(soma);

  opção = document.getElementsByName("opção");

  if (opção[0].checked) {
    opção = "32";
  } else if (opção[1].checked) {
    opção = "8";
  } else if (opção[2].checked) {
    opção = "16";
  }

  switch (opção) {
    case "32":
      presunçãoIr = soma * 0.32;
      presunçãoCsll = soma * 0.32;
      break;
    case "8":
      presunçãoIr = soma * 0.08;
      presunçãoCsll = soma * 0.12;
      break;
    case "16":
      presunçãoIr = soma * 0.16;
      presunçãoCsll = soma * 0.12;
      break;
  }

  document.getElementById("presunçãoIr").innerHTML = new Intl.NumberFormat(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ).format(presunçãoIr);
  document.getElementById("presunçãoCsll").innerHTML = new Intl.NumberFormat(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ).format(presunçãoCsll);

  ir = presunçãoIr * 0.15;
  csll = presunçãoCsll * 0.09;

  if (presunçãoIr >= 60000) {
    irAd = (presunçãoIr - 60000) * 0.1;
  } else {
    irAd = 0;
  }

  document.getElementById("ir").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(ir);
  document.getElementById("irAd").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(irAd);
  document.getElementById("csll").innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(csll);

  irPagar = ir + irAd;
  csllPagar = csll;

  document.getElementById("irPagar").innerHTML = new Intl.NumberFormat(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ).format(irPagar);
  document.getElementById("csllPagar").innerHTML = new Intl.NumberFormat(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  ).format(csllPagar);
}
