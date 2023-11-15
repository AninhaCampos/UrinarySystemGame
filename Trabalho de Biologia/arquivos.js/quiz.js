const questions = [
    {
        question: "Qual é o maior grupo indígena do Brasil?",
        options: ["Ticuna","Guarani","Guajajara","Yanomami"],
        optionCorreta: "Guarani",
    },
    {
        question: "Qual é o nome do sistema de troca adotado pelos portugueses com os indígenas no início da colonização?",
        options: ["escambo","encomienda","repartimento","mita"],
        optionCorreta: "escambo",
    },
    {
        question: "Qual é o nome do principal grupo indígena que apoiou os franceses na tentativa destes de colonizar terras do Brasil?",
        options: ["Tupinambás","Tamoio","Guarani","Pataxó"],
        optionCorreta: "Tamoio",
    },
    {
        question: "Quantos grupos étnicos indígenas existem no Brasil atualmente?",
        options: ["266","400","257","305"],
        optionCorreta: "305",
    },
    {
        question: "Quais eram as principais mercadorias desejadas pelos indígenas no sistema de escambo?",
        options: ["alimentos","espelhos","objetos metálicos","cavalos"],
        optionCorreta: "objetos metálicos",
    },
    {
        question: "Qual é a capital do Brasil onde se encontra a sede da Fundação Nacional do Índio (FUNAI)?",
        options: ["Rio de Janeiro","Belo Horizonte","Brasília","Manaus"],
        optionCorreta: "Brasília",
    },
    {
        question: "Qual é a língua indígena mais falada no Brasil atualmente?",
        options: ["Tikuna","Mundurukú","Guarani","Macro-Jê"],
        optionCorreta: "Tikuna",
        explication: "Embora exista uma grande diversidade de grupos e línguas indígenas diferentes, a língua mais falada é o Tikuna (pertencente a outros troncos línguisticos) com 34 mil falantes."
    },
    {
        question: "Qual é o tronco-linguístico indígena mais conhecido?",
        options: ["Tupi","Mundurukú","Mawé","Macro-Jê"],
        optionCorreta: "Tupi",
    },
    {
        question: "Quem é o líder indígena que discursou a favor dos povos originários na assembleia constituinte?",
        options: ["Raoni Metuktire","Davi Kopenawa","Daniel Munduruku","Ailton Krenak"],
        optionCorreta: "Ailton Krenak",
    },
    {
        question: "Qual é o(a) lider indígena ministro(a) do Ministério dos Povos Indígenas?",
        options: ["Ailton Krenak","Sõnia Guajajara","Daniel Munduruku","Daiara Tukano"],
        optionCorreta: "Sônia Guajajara",
    }
];

let cont_perg = 0;
let score = 0;

const texto_quest = document.getElementById("texto-questao");
const opcoes = document.getElementById("barra-opcoes");
const resp_texto = document.getElementById("texto-resp");
const buttonProx = document.getElementById("next");
const inicio = document.getElementById("iniciar");

//DAQUI PARA CIMA JÁ FOI

function carregarPergunta(){
    clearOverlay('sn','correct');
    callHow('overlay','quiz-div');
    const perg_atual = questions[cont_perg];
    texto_quest.textContent = perg_atual.question;
    opcoes.innerHTML = "";
    perg_atual.options.forEach((option) => {
        buttonProx.style.display = "none";
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
        desbloqueado = true;
        window.addEventListener("keydown", moverBoneco);
        //limpa overlay e o quiz e exibe a mensagem de acerto
        clearOverlay('sn','erro'); 
        clearOverlay('sn','perdeu');
        clearOverlay('overlay','quiz-div'); 
        callHow('sn','correct');

        //exibe a mensagem de acerto por 3 segundos
        const div = document.getElementById('sn');
        setTimeout(function (){
            clearOverlay('sn','correct')
        }, 3000);

    } else{
        vidas--;
        errou = false;
        perderVida();
        //limpa overlay e o quiz e exibe a mensagem de erro
        clearOverlay('overlay','quiz-div'); 
        clearOverlay('sn','perdeu'); 
        callHow('sn','erro');

        //exibe a mensagem de acerto por 3 segundos
        const div = document.getElementById('sn');
        setTimeout(function (){
            clearOverlay('sn','erro')
        }, 3000);
        //NÃO PODE COLOCAR DESBLOQUEADO
    }

    opcoes.querySelectorAll(".option").forEach((button) => {
        button.removeEventListener("click", verifica_resposta);
    });
        //resp_texto.textContent = `Resposta correta: ${perg_atual.optionCorreta}`;
        buttonProx.style.display = "block";
}

    buttonProx.addEventListener("click", () => {
        cont_perg++;
        if(cont_perg < questions.length && vidas > 0){          
            carregarPergunta();
            desbloqueado = false;
            resp_texto.textContent = "";
            buttonProx.style.display = "none";
        }else if(vidas == 0){
            clearOverlay('overlay','quiz-div'); 
            callHow('sn','perdeu');
            clearBnt('next');
            iniciarQuiz()
        }else {
            texto_quest.textContent = "Quiz concluído!";
            opcoes.innerHTML = ""; 
            resp_texto.textContent = `Pontuação: ${score + 1} de ${questions.length}`;
            buttonProx.style.display = "none";
        }
     });

     function iniciarQuiz() {
        window.addEventListener("keydown", moverBoneco);
        carregarPergunta();
    }
    
    iniciarQuiz()





