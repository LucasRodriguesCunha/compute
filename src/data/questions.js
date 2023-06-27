// Criando um array e passando o número, pergunta, opção e resposta.

let questions = [
  {
    numb: 1,
    question: "Qual o significado da sigla HTML?",
    answer: "HyperText Markup Language",
    options: [
      "HyperText Markup Language",
      "HyperText Making Language",
      "HyperText Management Language",
      "HyperText Model Language"
    ]
  },
  {
    numb: 2,
    question: "Quem está fazendo os padrões da Web?",
    answer: "The World Web Consortium",
    options: [
      "Mozilla",
      "The World Web Consortium",
      "Microsoft",
      "Google"
    ]
  },
  {
    numb: 3,
    question: "Escolha o elemento HTML correto para o título maior:",
    answer: "h1",
    options: [
      "head",
      "h6",
      "h1",
      "heading",
    ]
  },
  {
    numb: 4,
    question: "Qual a função da tag div em uma página HTML?",
    answer: "Agrupar elementos em um bloco para aplicar estilos ou comportamentos",
    options: [
      "Representar o conteúdo principal da página",
      "Definir o título da página e incluir metadados",
      "Agrupar elementos em um bloco para aplicar estilos ou comportamentos",
      "Inserir imagens na página"
    ]
  },
  {
    numb: 5,
    question: "Qual a tag usada para criar uma tabela em HTML?",
    answer: "table",
    options: [
      "table",
      "div",
      "form",
      "img"
    ]
  },
  {
    numb: 6,
    question: "Qual é o elemento HTML correto para inserir uma quebra de linha?",
    answer: "br",
    options: [
      "link",
      "lb",
      "br",
      "break"
    ]
  },
  {
    numb: 7,
    question: "Qual a tag usada para criar um link em HTML?",
    answer: "a",
    options: [
      "link",
      "img",
      "a",
      "span"
    ]
  },
  {
    numb: 8,
    question: "Qual a tag usada para incluir um vídeo em uma página HTML?",
    answer: "video",
    options: [
      "audio",
      "video",
      "source",
      "embed"
    ]
  },
  {
    numb: 9,
    question: "Qual a tag usada para incluir um formulário em uma página HTML?",
    answer: "form",
    options: [
      "label",
      "input",
      "button",
      "form"
    ]
  },
  {
    numb: 10,
    question: "Qual é a propriedade CSS usada para definir a margem de um elemento?",
    answer: "todas as alternativas estão corretas",
    options: [
      "margin-top",
      "margin-right",
      "margin-bottom",
      "todas as alternativas estão corretas"
    ]
  },
  {
    numb: 11,
    question: "Qual a tag usada para criar um rodapé em HTML?",
    answer: "footer",
    options: [
      "nav",
      "article",
      "footer",
      "section"
    ]
  },
  {
    numb: 12,
    question: "Dentro de qual elemento HTML colocamos o JavaScript?",
    answer: "script",
    options: [
      "javascript",
      "js",
      "script",
      "scripting"
    ]
  },
  {
    numb: 13,
    question: "Escolha o elemento HTML correto para definir o texto importante",
    answer: "strong",
    options: [
      "i",
      "important",
      "b",
      "strong"
    ]
  },
  {
    numb: 14,
    question: "Escolha o elemento HTML correto para definir o texto enfatizado",
    answer: "em",
    options: [
      "italic",
      "important",
      "em",
      "i"
    ]
  },
  {
    numb: 15,
    question: "Como você pode fazer uma lista numerada?",
    answer: "ol",
    options: [
      "list",
      "ul",
      "ol",
      "dl"
    ]
  },
  {
    numb: 16,
    question: "Como você pode fazer uma lista com marcadores?",
    answer: "ul",
    options: [
      "ul",
      "list",
      "ol",
      "dl"
    ]
  },
  {
    numb: 17,
    question: "Qual é o HTML correto para criar uma área de texto?",
    answer: "textarea",
    options: [
      "list",
      "area",
      "textarea",
      "input"
    ]
  },
  {
    numb: 18,
    question: "Qual elemento HTML define o título de um documento?",
    answer: "title",
    options: [
      "meta",
      "head",
      "title",
      "doctype"
    ]
  },
  {
    numb: 19,
    question: "Como você insere COMENTÁRIOS no código C?",
    answer: "//",
    options: [
      "//",
      "--",
      "#",
      "*"
    ]
  },
  {
    numb: 20,
    question: "Qual é a função do operador '+' em JavaScript?",
    answer: "Concatenar strings",
    options: [
      "Concatenar strings",
      "Adicionar números",
      "Ambas as opções estão corretas",
      "Nenhuma das opções acima está correta"
    ]
  },
  {
    numb: 21,
    question: "Qual é o método usado para exibir mensagens na janela do navegador em JavaScript?",
    answer: "alert()",
    options: [
      "console.log()",
      "document.write()",
      "alert()",
      "print()"
    ]
  },
  {
    numb: 22,
    question: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    answer: "'32'",
    options: [
      "5",
      "32",
      "7",
      "'32'"
    ]
  },
  {
    numb: 23,
    question: "Qual é o resultado da expressão 2 + '2' em JavaScript?",
    answer: "'22'",
    options: [
      "4",
      "'22'",
      "22",
      "NaN"
    ]
  },
  {
    numb: 24,
    question: "Como você cria uma função em JavaScript?",
    answer: "function myFunction() {}",
    options: [
      "function = myFunction() {}",
      "function myFunction() {}",
      "function:myFunction() {}",
      "myFunction function() {}"
    ]
  },
  {
    numb: 25,
    question: "Como você chama uma função chamada 'myFunction' em JavaScript?",
    answer: "myFunction()",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "Call.myFunction()"
    ]
  },
  {
    numb: 26,
    question: "Como você cria um array em JavaScript?",
    answer: "var myArray = [];",
    options: [
      "var myArray = [];",
      "var myArray = new Array();",
      "var myArray = array();",
      "var myArray = {};"
    ]
  },
  {
    numb: 27,
    question: "Como você acessa o primeiro elemento de um array chamado 'myArray' em JavaScript?",
    answer: "myArray[0];",
    options: [
      "myArray[0];",
      "myArray.first;",
      "myArray(0);",
      "myArray{0};"
    ]
  },
  {
    numb: 28,
    question: "Como você adiciona um novo elemento no final de um array chamado 'myArray' em JavaScript?",
    answer: "myArray.push(element);",
    options: [
      "myArray.push(element);",
      "myArray.append(element);",
      "myArray.add(element);",
      "myArray[element];"
    ]
  },
  {
    numb: 29,
    question: "Como você remove o último elemento de um array chamado 'myArray' em JavaScript?",
    answer: "myArray.pop();",
    options: [
      "myArray.pop();",
      "myArray.remove();",
      "myArray.delete();",
      "myArray[-1];"
    ]
  },
  {
    numb: 30,
    question: "Como você cria um objeto em JavaScript?",
    answer: "var myObject = {};",
    options: [
      "var myObject = {};",
      "var myObject = new Object();",
      "var myObject = object();",
      "var myObject = [];"
    ]
  },
  {
    numb: 31,
    question: "Qual propriedade do CSS é usada para definir a cor de fundo de um elemento?",
    answer: "background-color",
    options: [
      "background-color",
      "color",
      "font-size",
      "text-align"
    ]
  },
  {
    numb: 32,
    question: "Qual propriedade CSS é usada para definir a cor do texto?",
    answer: "color",
    options: [
      "background-color",
      "color",
      "font-family",
      "text-decoration"
    ]
  },
  {
    numb: 33,
    question: "Qual é o operador em C usado para acessar o valor de uma variável através do seu endereço?",
    answer: "ponteiro (*)",
    options: [
      "incremento (++)",
      "atribuição (=)",
      "ponteiro (*)",
      "comparação (==)"
    ]
  },
  {
    numb: 34,
    question: "Qual é o tipo de dado em C usado para armazenar números inteiros sem sinal?",
    answer: "unsigned int",
    options: [
      "float",
      "int",
      "unsigned int",
      "char"
    ]
  },
  {
    numb: 35,
    question: "Qual é o método em JavaScript usado para adicionar um elemento no final de um array?",
    answer: "push",
    options: [
      "concat",
      "append",
      "add",
      "push"
    ]
  },
  {
    numb: 36,
    question: "Qual é o método em JavaScript usado para transformar uma string em letras maiúsculas?",
    answer: "toUpperCase",
    options: [
      "toLowerCase",
      "toUpperCase",
      "convertCase",
      "caseChange"
    ]
  },
  {
    numb: 37,
    question: "Qual tag dessas tags não é necessária para a criação de um projeto web?",
    answer: "h1",
    options: [
      "body",
      "h1",
      "head",
      "html"
    ]
  },
  {
    numb: 38,
    question: "Qual a regra que adiciona flexbox a um elemento?",
    answer: "display",
    options: [
      "flex",
      "display",
      "set",
      "box"
    ]
  },
  {
    numb: 39,
    question: "Qual é o tipo de dado utilizado em C para armazenar endereços de memória?",
    answer: "pointer",
    options: [
      "unsigned",
      "display",
      "double",
      "pointer"
    ]
  },
  {
    numb: 40,
    question: "O que a propriedade grow faz?",
    answer: "Representa a proporção de um elemento no flex",
    options: [
      "Representa a proporção de um elemento no flex",
      "Diminui um elemento em flex",
      "Altera apenas a altura de um elemento",
      "Limita o crescimento de um elemento"
    ]
  },
  {
    numb: 41,
    question: "Sobre as propriedades do flex é correto afirmar que:",
    answer: "grow, shrink e basis podem ser utilizadas juntas",
    options: [
      "grow, shrink e basis não podem ser utilizadas juntas",
      "grow, shrink e basis podem ser utilizadas juntas",
      "shrink e grow são opostos, ou seja, uma anula a outra",
      "basis é utilizado apena junto de grow"
    ]
  },
  {
    numb: 42,
    question: "Sobre estrutura de pastas de um projeto, por que os arquivos são separados em pastas?",
    answer: "Separação de responsabilidade, organização e facilidade de manutenção",
    options: [
      "Apenas por organização",
      "Separação de responsabilidade e organização",
      "Separação de responsabilidade e facilidade de manutenção",
      "Separação de responsabilidade, organização e facilidade de manutenção"
    ]
  },
  {
    numb: 43,
    question: "Qual função em JavaScript é usada para arredondar um número para o inteiro mais próximo?",
    answer: "round()",
    options: [
      "floor()",
      "ceil()",
      "parseInt()",
      "round()"
    ]
  },
  {
    numb: 44,
    question: "Qual propriedade CSS é usada para definir a largura de uma borda?",
    answer: "border-width",
    options: [
      "border-color",
      "border-width",
      "border-style",
      "border-radius"
    ]
  },
  {
    numb: 45,
    question: "Qual propriedade CSS é usada para definir a largura de uma borda?",
    answer: "border-width",
    options: [
      "border-color",
      "border-width",
      "border-style",
      "border-radius"
    ]
  },
  {
    numb: 46,
    question: "Qual estrutura de controle é usada na linguagem C para executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
    answer: "while",
    options: [
      "if-else",
      "switch",
      "for",
      "while"
    ]
  },
  {
    numb: 47,
    question: "Qual palavra-chave é usada em JavaScript para sair de um loop imediatamente?",
    answer: "break",
    options: [
      "exit",
      "break",
      "return",
      "continue"
    ]
  },
  {
    numb: 48,
    question: "Qual é o tipo de dado utilizado em C para armazenar caracteres individuais?",
    answer: "char",
    options: [
      "int",
      "float",
      "char",
      "string"
    ]
  },
  {
    numb: 49,
    question: "Qual é a função utilizada para ler uma entrada do usuário em C?",
    answer: "scanf()",
    options: [
      "input()",
      "scan()",
      "get()",
      "scanf()"
    ]
  },
  {
    numb: 50,
    question: "Qual é a estrutura de controle utilizada para executar um bloco de código pelo menos uma vez em C?",
    answer: "do-while",
    options: [
      "do-while",
      "switch",
      "for",
      "if-else"
    ]
  },
  {
    numb: 51,
    question: "Qual é a função utilizada para calcular a raiz quadrada de um número em C?",
    answer: "sqrt()",
    options: [
      "pow()",
      "root()",
      "sqr()",
      "sqrt()"
    ]
  },
  {
    numb: 52,
    question: "Qual é a função utilizada para ler uma string do usuário em C?",
    answer: "gets()",
    options: [
      "gets()",
      "scanf()",
      "read()",
      "sqrt()"
    ]
  },
  {
    numb: 53,
    question: "Qual é o tipo de dado utilizado em C para representar números de ponto flutuante de precisão dupla?",
    answer: "double",
    options: [
      "int",
      "float",
      "double",
      "char"
    ]
  },
  {
    numb: 54,
    question: "Qual é a palavra-chave utilizada para definir uma constante em C?",
    answer: "const",
    options: [
      "read",
      "const",
      "var",
      "char"
    ]
  },
  {
    numb: 55,
    question: "Qual é a estrutura de controle utilizada para selecionar entre várias opções em C?",
    answer: "switch",
    options: [
      "while",
      "if-else",
      "for",
      "switch"
    ]
  },
  {
    numb: 56,
    question: "Qual é a função utilizada para comparar duas strings em C?",
    answer: "strcmp()",
    options: [
      "equals()",
      "strcomp()",
      "strcmp()",
      "compare()"
    ]
  },
  {
    numb: 57,
    question: "Qual é a função utilizada para calcular o valor absoluto de um número inteiro em C?",
    answer: "abs()",
    options: [
      "fabs()",
      "abs()",
      "absolute()",
      "value()"
    ]
  },
  {
    numb: 58,
    question: "Qual é a função utilizada para obter o valor máximo entre dois números em C?",
    answer: "max()",
    options: [
      "max()",
      "maximum()",
      "greater()",
      "fmax()"
    ]
  },
  {
    numb: 59,
    question: "Qual é o tamanho em bytes do tipo float em C?",
    answer: "4",
    options: [
      "2",
      "4",
      "8",
      "Depende do compilador"
    ]
  },
  {
    numb: 60,
    question: "Qual é a função usada para fechar um arquivo em C?",
    answer: "fclose()",
    options: [
      "fclose()",
      "close()",
      "fileclose()",
      "endfile()"
    ]
  },
];
