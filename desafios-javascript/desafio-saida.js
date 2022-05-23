/* O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

Conter 39 traços horizontais ( - ) na primeira linha;
Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Repita o procedimento 2 quatro vezes;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)*/

let horizontalLine = "---------------------------------------";
let verticalLine = "|                                     |";
console.log(horizontalLine);
for(i=0;i<5;i++){
      console.log(verticalLine);
	}
console.log(horizontalLine);