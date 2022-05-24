/* A fórmula para calcular a área de uma circunferência é: area = π . raio2. 
Considerando para este problema que π = 3.14159; Efetue o cálculo da área, 
elevando o valor de raio ao quadrado e multiplicando por π.*/

var TT = 3.14159;
var raio = parseFloat(gets());
var area = TT * Math.pow(raio ,2)
console.log("A=" +  area.toFixed(4));
