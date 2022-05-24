/* Com o objetivo de ver quanto os seus funcionários vendem, um empresário te contratou para desenvolver 
um programa que leia: o nome do vendedor, seu salário fixo, e o total de vendas que ele efetuou no mês, 
sendo este valor em dinheiro. Um vendedor da loja ganha 15% de comissão sobre o valor das suas vendas, 
sendo assim, descubra quanto esse funcionário vai receber no final do mês, com duas casas decimais. */

var name  = gets();
var salary = parseFloat(gets());
var sales  = parseFloat(gets());

var valorTotal =  sales * 15.0 / 100  + salary ;

print("TOTAL = R$ " + valorTotal.toFixed(2));