// Selecionando todos os elementos necessários
const start_btn_home = document.querySelector(".start_btn");
const start_btn = document.querySelector(".start_btn #button_play");
const info_box = document.querySelector(".info_box");
const highscores = document.querySelector("#highscores");
const scoreTextPoint = document.getElementById("score");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const loader = document.getElementById("loader");
loader.classList.add("hidden");

// Se o botão start_btn for clicado
start_btn.onclick = () => {
  info_box.classList.add("activeInfo"); // Mostra a caixa de informações
};

// Se o botão exit_btn for clicado
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); // Oculta a caixa de informações
};

// Se o botão continue_btn for clicado
continue_btn.onclick = () => {

  info_box.classList.remove("activeInfo"); // Oculta a caixa de informações
  start_btn_home.classList.add("hidden");

  loader.classList.remove("hidden");
  const myTimeout = setTimeout(startQuiz, 3000);

  function startQuiz() {
    loader.classList.add("hidden");
    start_btn_home.classList.remove("hidden");
    quiz_box.classList.add("activeQuiz"); // Mostra a caixa de perguntas
    showQuetions(0); // Chamando a função showQestions
    queCounter(1); // Passando 1 parâmetro para queCounter
    startTimer(20); // Chamando a função startTimer
    startTimerLine(0);
  }
};

let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Se o botão quit_quiz for clicado
quit_quiz.onclick = () => {
  window.location.reload(); // Recarrega a janela atual
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Se o botão next_btn foi clicado
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    // Se a contagem de perguntas for menor que o tamanho total das perguntas
    que_count++; // Incrementa o valor que_count
    que_numb++; // Incrementa o valor que_numb
    showQuetions(que_count); // Chamando a função showQestions
    queCounter(que_numb); // Passando valor que_numb para queCounter
    clearInterval(counter); // Limpa o contador
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); // Limpa counterLine
    startTimerLine(widthValue); // Chamando a função startTimerLine
    timeText.textContent = "Tempo restante"; // Muda o timeText para Time Left
    next_btn.classList.remove("show"); // Esconde o próximo botão
  } else {
    clearInterval(counter); // Limpa o contador
    clearInterval(counterLine); // limpa counterLine
    showResult(); // Chamando a função showResult
  }
};

// Obtendo perguntas e opções do array
function showQuetions(index){
  const que_text = document.querySelector(".que_text");

  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; 
  option_list.innerHTML = option_tag;
  
  const option = option_list.querySelectorAll(".option");

  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
  clearInterval(counter); 
  clearInterval(counterLine);
  let userAns = answer.textContent; 
  let correcAns = questions[que_count].answer; 
  const allOptions = option_list.children.length; 
  
  if (userAns == correcAns) {
    // Se a opção selecionada pelo usuário for igual à resposta correta do array
    userScore += 1; // Atualizando o valor da pontuação com 1
    scoreTextPoint.innerHTML = userScore * 10;
    answer.classList.add("correct"); // Adicionando cor verde para corrigir a opção selecionada
    answer.insertAdjacentHTML("beforeend", tickIconTag); // Adicionando ícone de marca para corrigir a opção selecionada
    console.log("Resposta correta");
    console.log("Suas respostas corretas = " + userScore);
  } else {
    answer.classList.add("incorrect"); // Adicionando cor vermelha para corrigir a opção selecionada
    answer.insertAdjacentHTML("beforeend", crossIconTag); // Adicionando ícone de cruz para corrigir a opção selecionada
    console.log("Resposta errada");

      for(i=0; i < allOptions; i++){
          if(option_list.children[i].textContent == correcAns){ 
              option_list.children[i].setAttribute("class", "option correct");
              option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
              console.log("Auto selected correct answer.");
          }
      }
  }
  for(i=0; i < allOptions; i++){
      option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show"); 

  
}

function showResult() {
  info_box.classList.remove("activeInfo"); // Esconde a caixa de informações
  quiz_box.classList.remove("activeQuiz"); // Esconde a caixa do quiz
  result_box.classList.add("activeResult"); // Mostra a caixa de resultado
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 3) {
     // Se o usuário marcou mais de 3
     // Criando uma nova tag span e passando o número da pontuação do usuário e o número total da pergunta
    let scoreTag =
      "<span>E parabéns!! 🎉, você fez <p>" +
      userScore * 10 +
      "</p> de <p>" +
      questions.length * 10 +
      "</p></span>";
    scoreText.innerHTML = scoreTag; // Adicionando nova tag span dentro do score_Text
  } else if (userScore > 1) {
    // Se o usuário marcou mais de 1
    let scoreTag =
      "<span>E legal 😎, você fez  <p>" +
      userScore * 10 +
      "</p> de <p>" +
      questions.length * 10 +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    // Se o usuário marcou menos de 1
    let scoreTag =
      "<span>e desculpe 😐, Você fez apenas <p>" +
      userScore * 10 +
      "</p> de <p>" +
      questions.length * 10 +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time; // Alterando o valor de timeCount com valor de tempo
    time--; // Decrementa o valor do tempo
    if (time < 9) {
      // Se o timer for menor que 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; // Adiciona um 0 antes do valor do tempo
    }
    if (time < 0) {
      // Se o timer for menor que 0
      clearInterval(counter); // Limpa o contador
      timeText.textContent = "Intervalo"; // Muda o texto da hora para folga
      const allOptions = option_list.children.length; // Obtendo todos os itens de opção
      let correcAns = questions[que_count].answer; // Obtendo a resposta correta do array
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          // Se houver uma opção que corresponda a uma resposta de array
          option_list.children[i].setAttribute("class", "option correct"); // Adicionando a cor verde à opção correspondente
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adicionando o ícone de marca para a opção correspondente
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Uma vez que o usuário seleciona uma opção, desativa todas as opções
      }
      next_btn.classList.add("show"); // Mostra o próximo botão se o usuário selecionou alguma opção
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1; // Atualizando o valor do tempo com 1
    time_line.style.width = time + "px"; // Aumento da largura da time_line com px por valor de tempo
    if (time > 549) {
      // Se o valor do tempo for maior que 549
      clearInterval(counterLine); // Limpa counterLine
    }
  }
}

function queCounter(index) {
  // Criando uma nova tag span e passando o número da pergunta e o total da pergunta
  let totalQueCounTag =
    "<span><p>" +
    index +
    "</p> de <p>" +
    questions.length +
    "</p> Questões</span>";
  bottom_ques_counter.innerHTML = totalQueCounTag; // Adicionando nova tag span dentro bottom_ques_counter
}

