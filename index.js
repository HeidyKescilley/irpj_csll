let normal1 = 0;
let normal2 = 0;
let normal3 = 0;
let venda1 = 0;
let venda2 = 0;
let venda3 = 0;
let transp1 = 0;
let transp2 = 0;
let transp3 = 0;
let tNormal = 0;
let tTransp = 0;
let tVenda = 0;
let pNormal = 0;
let pVenda = 0;
let pTransp = 0;
let irNormal = 0;
let irVenda = 0;
let irTransp = 0;
let irNormalAd = 0;
let irVendaAd = 0;
let irTranspAd = 0;
let csllNormal = 0;
let csllVenda = 0;
let csllTransp = 0;
let irPagar = 0;
let csllPagar = 0;

function calcular() {
  normal1 = document.getElementById("normal1").value;
  normal2 = document.getElementById("normal2").value;
  normal3 = document.getElementById("normal3").value;
  venda1 = document.getElementById("venda1").value;
  venda2 = document.getElementById("venda2").value;
  venda3 = document.getElementById("venda3").value;
  transp1 = document.getElementById("transp1").value;
  transp2 = document.getElementById("transp2").value;
  transp3 = document.getElementById("transp3").value;

  tNormal = parseFloat(normal1) + parseFloat(normal2) + parseFloat(normal3);
  tVenda = parseFloat(venda1) + parseFloat(venda2) + parseFloat(venda3);
  tTransp = parseFloat(transp1) + parseFloat(transp2) + parseFloat(transp3);

  document.getElementById("tNormal").innerHTML = tNormal;
  document.getElementById("tVenda").innerHTML = tVenda;
  document.getElementById("tTransp").innerHTML = tTransp;

  pNormal = tNormal * 0.32;
  pVenda = tVenda * 0.08;
  pTransp = tTransp * 0.16;

  document.getElementById("pNormal").innerHTML = pNormal;
  document.getElementById("pVenda").innerHTML = pVenda;
  document.getElementById("pTransp").innerHTML = pTransp;

  irNormal = pNormal * 0.15;
  irVenda = pVenda * 0.15;
  irTransp = pTransp * 0.15;
  csllNormal = pNormal * 0.15;
  csllVenda = pVenda * 0.15;
  csllTransp = pTransp * 0.15;

  if (pNormal >= 60000) {
    irNormalAd = (pNormal - 60000) * 0.1;
  } else {
    irNormalAd = 0;
  }
  if (pVenda >= 60000) {
    irVendaAd = (pVenda - 60000) * 0.1;
  } else {
    irVendaAd = 0;
  }
  if (pTransp >= 60000) {
    irTranspAd = (irTransp - 60000) * 0.1;
  } else {
    irTranspAd = 0;
  }

  document.getElementById("irNormal").innerHTML = irNormal;
  document.getElementById("irVenda").innerHTML = irVenda;
  document.getElementById("irTransp").innerHTML = irTransp;

  document.getElementById("irNormalAd").innerHTML = irNormalAd;
  document.getElementById("irVendaAd").innerHTML = irVendaAd;
  document.getElementById("irTranspAd").innerHTML = irTranspAd;

  document.getElementById("csllNormal").innerHTML = csllNormal;
  document.getElementById("csllVenda").innerHTML = csllVenda;
  document.getElementById("csllTransp").innerHTML = csllTransp;

  irPagar = irNormal + irNormalAd + irVenda + irVendaAd + irTransp + irTranspAd;
  csllPagar = csllNormal + csllVenda + csllTransp;

  document.getElementById("irPagar").innerHTML = irPagar;
  document.getElementById("csllPagar").innerHTML = csllPagar;
}
