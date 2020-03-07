const tasa = 0.5;
var periodo = 3;
var valor = 100;
var valor_futuro = valor*Math.pow(1+tasa/100, periodo);
console.log(valor_futuro); 