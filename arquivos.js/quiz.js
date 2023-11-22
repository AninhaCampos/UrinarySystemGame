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
    /*iniciarTempo();*/
    texto_quest.textContent = perg_atual.question;
    opcoes.innerHTML = "";
    perg_atual.options.forEach((option) => {
        //buttonProx.style.display = "none";
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

        //exibe a mensagem de erro por 3 segundos
        setTimeout(function (){
            clearOverlay('sn','erro')
        }, 3000);
        
        perderVida();
    }

    opcoes.querySelectorAll(".option").forEach((button) => {
        button.removeEventListener("click", verifica_resposta);
    });
        //resp_texto.textContent = `Resposta correta: ${perg_atual.optionCorreta}`;
        //inicio.style.display = "none";
        buttonProx.style.display = "block";
}

    iniciar.addEventListener("click", () => {
        if(cont_perg < questions.length && cont_perg == 0){ 
            callHow('overlay','quiz-div')       
            carregarPergunta();
        }
    });

    buttonProx.addEventListener("click", () => {
        cont_perg++;
        if((cont_perg < questions.length) && (cont_perg != 0) && (vidas > 0)){        
            carregarPergunta();
            //buttonProx.style.display = "none"; //ISSO SOME O BOTÃO E BUGA APARECENDO O "Iniciar Jogo"
        }else if(vidas == 0){
            /*pararTempo();*/
            clearOverlay('overlay','quiz-div'); 
            clearOverlay('sn','erro'); 
            callHow('sn','perdeu');
        }else {
            /*pararTempo();*/
            clearOverlay('overlay','quiz-div');
            callHow('sn','ganhou');
        }
    });

    function reiniciarQuiz(){
        cont_perg = 0;
        Reiniciar();
        clearOverlay('sn','perdeu');
        clearBnt('next','iniciar');
    }

    





