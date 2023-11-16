const questions = [
    {
        question: "A urina é um líquido que tem a função de excretar substâncias do nosso corpo. Sua composição é 95% água e 5% de resíduos dissolvidos, como ureia, amônia, ácido úrico e sais minerais.A sequência correta que indica as etapas de formação de urina no organismo é:",
        options: ["Solubilização, Filtração, Reabsorção e Eliminação.","Secreção, Solubilização, Filtração e Excreção.","Filtração, Reabsorção, Secreção e Excreção.","Eliminação, Concentração, Filtração e Excreção."],
        optionCorreta: "Filtração, Reabsorção, Secreção e Excreção.",
    },
    {
        question: "Sobre o sistema urinário feminino e masculino é correto afirmar que:",
        options: ["O sistema urinário feminino e masculino são idênticos.","O sistema urinário feminino e masculino diferem na quantidade de vias urinárias.","O sistema urinário feminino e masculino diferem no tamanho da uretra.","O sistema urinário feminino e masculino diferem no tamanho da uretra.","O sistema urinário feminino e masculino apresentam as mesmas funções."],
        optionCorreta: "O sistema urinário feminino e masculino diferem no tamanho da uretra.",
    },
    {
        question: "Qual a função do sistema urinário no organismo humano?",
        options: ["Produção de hormônios","Digestão de alimentos", "Eliminação de resíduos metabólicos", "Respiração celular"],
        optionCorreta: "Eliminação de resíduos metabólicos",
    },
    {
        question: "Quais são os órgãos principais do sistema urinário?",
        options: ["Fígado e vesícula biliar","Pulmões e traqueia","Coração e vasos sanguíneos","Rins e bexiga"],
        optionCorreta: "Rins e bexiga",
    },
    {
        question: "O que é a filtração glomerular e qual sua importância no sistema urinário?",
        options: ["Processo de formação da urina nos rins","Transporte da urina do rim até a bexiga","Produção de hormônios renais","Eliminação de resíduos pela pele"],
        optionCorreta: "Processo de formação da urina nos rins",
    },
    {
        question: "Como ocorre a formação da urina nos rins?",
        options: ["Através da ingestão de líquidos","Por meio da digestão dos alimentos","Pela filtração do sangue nos néfrons renais","Pela produção de enzimas no fígado"],
        optionCorreta: "Pela filtração do sangue nos néfrons renais",
    },
    {
        question: " Quais são as principais substâncias presentes na urina?",
        options: ["Glicose e proteínas","Hemácias e plaquetas","Água e sais minerais","Vitaminas e minerais"],
        optionCorreta: "Água e sais minerais",
    },
    {
        question: "Como ocorre o transporte da urina do rim até a bexiga?",
        options: ["Através dos ureteres","Pelo canal uretral","Pela uretra","Por meio dos vasos sanguíneos"],
        optionCorreta: "Através dos ureteres",
    },
    {
        question: "Quais são os problemas de saúde mais comuns relacionados ao sistema urinário?",
        options: ["Diabetes e hipertensão","Asma e bronquite","Câncer de pulmão e enfisema","Infecção urinária e cálculo renal"],
        optionCorreta: "Infecção urinária e cálculo renal",
    },
    {
        question: "Qual é a diferença entre infecção urinária e cálculo renal?",
        options: ["A infecção urinária é causada por bactérias, enquanto o cálculo renal é a formação de pedras nos rins","A infecção urinária afeta os pulmões, enquanto o cálculo renal afeta o fígado","A infecção urinária é uma doença viral, enquanto o cálculo renal é causado por alergias","A infecção urinária é uma condição genética, enquanto o cálculo renal é causado por má alimentação"],
        optionCorreta: "A infecção urinária é causada por bactérias, enquanto o cálculo renal é a formação de pedras nos rins",
    },
    {
        question:"Quais são os fatores de risco para o desenvolvimento de doenças renais?",
        options: ["Consumo excessivo de água e falta de atividade física","Exposição ao sol e falta de sono","Tabagismo e consumo excessivo de álcool","Diabetes e hipertensão"],
        optionCorreta: "Diabetes e hipertensão",
    },
    {
        question: "Como é possível manter a saúde do sistema urinário?",
        options: ["Praticando atividade física regularmente","Consumindo alimentos ricos em gordura saturada","Evitando o consumo de água","Mantendo uma boa hidratação e adotando hábitos alimentares saudáveis"],
        optionCorreta: "Mantendo uma boa hidratação e adotando hábitos alimentares saudáveis",
    },
    {
        question: "Indique qual das alternativas a seguir NÃO apresenta uma função do sistema urinário.",
        options: ["Filtração do sangue para remoção de impurezas","Condução, armazenamento e excreção da urina","Manutenção da concentração de água e sais minerais no organismo","Regulação da quantidade de sangue que circula no corpo."],
        optionCorreta: "Regulação da quantidade de sangue que circula no corpo.",
    },
    {
        question: "Sistema Urinário: Em caso de hipertensão, recomenda-se uma dieta sem sal, porque este atua:",
        options: ["Diminuindo o volume de sangue circulante.","Aumentando o volume de sangue circulante.","Reduzindo o calibre dos vasos sanguíneos.","Dilatando o calibre dos vasos sanguíneos.","Obstruindo os capilares arteriais com placas de ateroma."],
        optionCorreta: "Aumentando o volume de sangue circulante.aumentando o volume de sangue circulante.",
    },
    {
        question: "Uma pessoa passará a excretar maior quantidade de uréia se aumentar, em sua dieta alimentar, a quantidade de:",
        options: ["amido.","cloreto de sódio.","glicídios.","lipídios.","proteínas."],
        optionCorreta: "proteínas.",
    },
    
    {
        question: "“As fezes e auréia são resíduos produzidos  pelos mamíferos. Entretanto somente um deles é considerado excreção”. Escolha a alternativa que condiz com este enunciado:",
        options: ["as fezes, porque resultam da atividade de absorção deágua pelo intestino grosso.","a ureia, porque é produzida por células flama, as quais são encontradas nos rins dos mamíferos.","as fezes, porque resultam da ação da flora intestinal.","a ureia, por ser uma substância nitrogenada tóxica produzida durante o metabolismo celular."],
        optionCorreta: "Infecção urinária e cálculo renal",
    },
  
    {
        question:"Os rins artificiais são aparelhos utilizados por pacientes com distúrbios renais. A função desses aparelhos é:" ,
        options: ["oxigenar o sangue desses pacientes, uma vez que uma menor quantidade de gás oxigênio é liberada em sua corrente sanguínea.","nutrir o sangue desses pacientes, uma vez que sua capacidade de absorver nutrientes orgânicos está diminuída","retirar o excesso de gás carbônico que se acumula no sangue desses pacientes.","retirar o excesso de glicose, proteínas e lipídios que se acumula no sangue desses pacientes.","retirar o excesso de íons e resíduos nitrogenados que se acumula no sangue desses pacientes."],
        optionCorreta: "retirar o excesso de íons e resíduos nitrogenados que se acumula no sangue desses pacientes.",
    },
    /*
    {
        question: ,
        options: ["Diabetes e hipertensão","Asma e bronquite","Câncer de pulmão e enfisema","Infecção urinária e cálculo renal"],
        optionCorreta: "Infecção urinária e cálculo renal",
    },
    {
        question: ,
        options: ["Diabetes e hipertensão","Asma e bronquite","Câncer de pulmão e enfisema","Infecção urinária e cálculo renal"],
        optionCorreta: "Infecção urinária e cálculo renal",
    },
    {
        question: ,
        options: ["Diabetes e hipertensão","Asma e bronquite","Câncer de pulmão e enfisema","Infecção urinária e cálculo renal"],
        optionCorreta: "Infecção urinária e cálculo renal",
    },*/
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





