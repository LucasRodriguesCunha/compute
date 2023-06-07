// Criando um array e passando o número, perguntas, opções e respostas.

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
  }

];
