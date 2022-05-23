## **Sintaxe Básica em Javascript**
---
### Como funcina a tipagem? 🤔
No geral, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado. No JS a tipagem é fraca, ou seja, a declaração dos dados acontece de modo dinâmico!

▶️ **var valor = 100;** 

No caso acima, o JS já converte a variável 'valor' para o tipo Number! 🤗

---
### Escopo e Declaração de variáveis (var, let e const) 📝

📌 **Declaração de Variáveis**

* ***var*** – escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

* ***let*** – escopo local de bloco, pode ter seu valor alterado, se nãotiver um valor inicial será tratada como null;

* ***const*** – escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado. 

📌 **Escopo**

* 🌐 **Escopo global**  – quando a variável é declarada fora de qualquer
bloco, sua visibilidade fica disponível em todo o código.

* 🏠 **Escopo local** – quando a variável é declarada dentro de um bloco,
sua visibilidade pode ficar disponível ou não.
 
---
### Operadores Lógicos 👨‍💻

* && - “e” – considera que todos os valores sejam true;
* || - “ou” – considera que qualquer valor seja true;
* ! - “não” – inverte o valor de true para false ou vice-versa;

 ---

 ### Importante lembrar! ⚠️

 O sinal '=' em JS significa atribuição e o '==', comparação!

 Ou seja, se eu fizer:
  
  ▶️ ***num = 5***, a variável "num" passará a valer '5'.
  
  ▶️ ***num == 5***, eu estou "perguntando" se 'num' vale '5'. 

  Também existe o conceito de comparação idêntica, feita usando '==='. Assim, se compara tanto valor quanto tipo. Considerando ***valor1 = "5"*** e ***valor2 = 5***, uma comparação que contém as condições...

  ▶️ ***valor1 == valor2*** retornará true. 

  ▶️ ***valor1 === valor2*** retornará false.

   ---

 ### Vetores ou Arrays 🖥️

 Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

O array deve ser declarado entre colchetes “[]”, e podem guardar
qualquer valor dentro de seus índices: inclusive outros arrays.

* forEach() – itera um array;
* push() – add item no final do array;
* pop() – remove item no final do array;
* shift() – remove item no início do array;
* unshift() – add item no início do array;
* indexOf() – retorna o índice de um valor;
* splice() – remove ou substitui um item pelo índice;
* slice() – retorna uma parte de um array existente;

---

 ### Estruturas de repetição 🔁

* If/Else If
    ~~~javascript var jogador1 = 1;
    var jogador2 = 0;

    if (jogador1 > 0) {
    console.log(‘jogador1 marcou ponto’);
    } else if (jogador2 > 0) {
    console.log(‘jogador2 marcou ponto’);
    } else {
    console.log(‘ninguém marcou ponto);
    }
    ~~~
* If ternário 

   * Estrutura:

        [condição] ? [instrução1] : [instrução2];
    * Exemplo:
        ~~~javascript 
        jogador1 > 0 ? console.log(‘marcou ponto’) : console.log(‘não
        marcou ponto”);~~~

* Switch/Case
    ~~~javascript switch (${expressao}) {
    case 1:
    ${instrucao};
    break;
    case 2:
    ${instrução};
    break; 
    ~~~

* For
    * Estrutura:
        
        for ([expressaoInicial]; [condicao]; [incremento]) {
        declaracao }

    * Exemplo:
        ~~~javascript 
        var array = [‘valor1’, ‘valor2’, ‘valor3’, ‘valor4’]
        for (let i = 0; i < array.length; i++) {
        console.log(i)  
        };
        ~~~

* While
    ~~~javascript
    var a = 0;
    while (a < 10) {
    a++;
    console.log(a);
    }    
    ~~~

---

 ### Tipos de funções ⌨️

* Funções declarativas:

    ~~~javascript   
    function nomeDaFuncao() {
    ${instrucao};
    }
    ~~~

* Expressões de Funções:

    ~~~javascript   
    var funcao = function nomeDaFuncao() {
    ${instrucao};
    }
    ~~~

    ~~~javascript 
    var funcao = function() {
    ${instrucao};
    }
    ~~~

* Arrow Function:

    ~~~javascript   
    var funcao = () => {${instrucao}}
    ~~~




