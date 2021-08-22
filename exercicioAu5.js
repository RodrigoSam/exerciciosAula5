//Exercicio 01
nomeDoFulano = "Rodrigo"
nomeDoBeltrano = "Rodrigo"
mesmoNome = nomeDoFulano == nomeDoBeltrano
console.log(mesmoNome)

//Exercicio 02
idade = 21
console.log(18 <= idade ? "Você já é um adulto":"Você ainda é menor de Idade")

//Exercicio 03
valorBoleto=563
valorComJuros=valorBoleto*1.1
console.log("Total do Boleto com juros R$:",valorComJuros.toFixed(2))

//Exercicio 04
item1 = 16
item2 = 98
item3 = 25
item4 = 33
item5 = 789
media = (item1 + item2 + item3 + item4 + item5) / 5
console.log("A média dos valores declarados é:",media)

// Exercicio 05
receitaLiquida = 3600
produtosVendidos = 830
lucroBruto = receitaLiquida - produtosVendidos
margemBruta = lucroBruto / receitaLiquida
valorPercentual = margemBruta * 100
console.log(valorPercentual.toFixed(2))

//Exercicio 06
saldoConta = 1000
calca = 99.90
salario = 2500
doacao = 0,10
saldoAtual = 1000 - 99.90 + 2500 - 0.10
compraAr = saldoAtual * 0.75
pagDivida = compraAr / 2
restoSaldo = pagDivida
console.log("Seu saldo atual é de R$: ",restoSaldo)