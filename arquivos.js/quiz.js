let cont_perg = 0;
let score = 0;

const texto_quest = document.getElementById("texto-questao");
const opcoes = document.getElementById("barra-opcoes");
const resp_texto = document.getElementById("texto-resp");
const buttonProx = document.getElementById("next");
const inicio = document.getElementById("iniciar");


function carregarPergunta(){
    clearOverlay('sn','correct');
    clearOverlay('sn','erro');
    const perg_atual = questions[cont_perg];
    startTimer();
    
    texto_quest.textContent = perg_atual.question;
    opcoes.innerHTML = "";
    perg_atual.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", verifica_resposta);
        opcoes.appendChild(button);
    });
}

function verifica_resposta(event){
    const resp_usuario = event.target.textContent;
    const perg_atual = questions[cont_perg];
    if (resp_usuario === perg_atual.optionCorreta){
        score++;
        
        //limpa overlay e o quiz e exibe a mensagem de acerto
        clearOverlay('sn','erro'); 
        clearOverlay('sn','perdeu');
        clearOverlay('sn','ganhou');
        clearOverlay('sn','urina');
        clearOverlay('overlay','quiz-div'); 
        callHow('sn','correct');
        audioAcerto();
        
        //exibe a mensagem de acerto por 3 segundos
        setTimeout(function (){
            clearOverlay('sn','correct')
        }, 3000);
        
        verificarResposta(); //verifica do movimentos.js

    } else{
        vidas--;

        //limpa overlay e o quiz e exibe a mensagem de erro
        clearOverlay('sn','correct'); 
        clearOverlay('sn','perdeu');
        clearOverlay('sn','ganhou');
        clearOverlay('sn','urina');
        clearOverlay('overlay','quiz-div');
        callHow('sn','erro');
        audioErro();

        //exibe a mensagem de erro por 3 segundos
        setTimeout(function (){
            clearOverlay('sn','erro')
        }, 3000);
        
        perderVida();
    }

    opcoes.querySelectorAll(".option").forEach((button) => {
        button.removeEventListener("click", verifica_resposta);
    });
}

     iniciar.addEventListener("click", () => {
        if(cont_perg < questions.length && cont_perg == 0){ 
            callHow('overlay','quiz-div')       
            carregarPergunta();
            clearBnt('iniciar','next');
        }
    });

    function carregarProximaPergunta() {
        cont_perg++;
        if ((cont_perg < questions.length) && (cont_perg != 0) && (vidas > 0)) {
            callHow('overlay', 'quiz-div');
            carregarPergunta();
        } else if (vidas == 0) {
            clearOverlay('overlay', 'quiz-div');
            clearOverlay('sn', 'erro');
            callHow('sn', 'perdeu');
            audioPerdeu();
        }
    }
    buttonProx.addEventListener("click", carregarProximaPergunta);

     function ganharJogo() {
            // Ações quando o jogador atinge a casa 16 e ganha o jogo
            clearOverlay('overlay', 'quiz-div');
            clearOverlay('sn', 'correct');
            clearOverlay('sn', 'perdeu');
            clearOverlay('sn', 'erro');
            clearOverlay('sn', 'urina');
            callHow('sn', 'ganhou');
            audioParabens();
    
            // Remove o event listener do botão de próxima pergunta
            buttonProx.removeEventListener("click", carregarProximaPergunta);
            buttonProx.addEventListener("click", ganharJogo);
    }

    function reiniciarQuiz(){
        cont_perg = 0;
        score = 0;
        buttonProx.removeEventListener("click", ganharJogo);
        buttonProx.addEventListener("click", carregarProximaPergunta);
        console.log("adiconando...");
        Reiniciar();
        clearOverlay('sn','perdeu');
    }

    





