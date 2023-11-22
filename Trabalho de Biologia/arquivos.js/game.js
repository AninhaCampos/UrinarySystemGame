/*
let vidas = 5;
let acertos = 0;
let tempoInicial = Date.now();
let posicaoAtual = 0;
let perguntas = [
    { pergunta: "Qual é a função do rim?", respostas: ["Regula a pressão arterial", "Filtra resíduos do sangue", "Regula o pH do corpo", "Regula a concentração de eletrólitos do corpo", "Todas as opções estão corretas"], correta: 4 },
    { pergunta: "As artérias _ fornecem sangue aos rins.", respostas: ["hepáticas", "pulmonares", "renais", "cardíacas"], correta: 2 },
    { pergunta: "A bexiga é revestida por qual tipo de epitélio?", respostas: ["Simples colunar", "Transicional", "Estratificado escamoso", "Simples cúbico"], correta: 1 },
    { pergunta: "Qual é a unidade funcional dos rins?", respostas: ["Neurônio", "Célula glial neural", "Néfron", "Ureteres"], correta: 2 },
    // Adicione mais perguntas aqui...
];

// Função para mostrar a pergunta
function mostrarPergunta() {
    if (vidas > 0 && acertos < 15) {
        let perguntaAtual = perguntas[posicaoAtual];
        let respostaUsuario = prompt(perguntaAtual.pergunta + "\n" + perguntaAtual.respostas.join("\n"));
        if (respostaUsuario == perguntaAtual.respostas[perguntaAtual.correta]) {
            acertos++;
            posicaoAtual++;
            document.getElementsByClassName('personagem').style.left = posicaoAtual * 20 + 'px'; // Mova o personagem para a próxima posição
        } else {
            vidas--;
        }
    } else {
        let tempoFinal = Date.now();
        let tempoTotal = (tempoFinal - tempoInicial) / 1000; // Tempo em segundos
        if (vidas == 0) {
            alert("Você perdeu todas as suas vidas! Você levou " + tempoTotal + " segundos.");
        } else {
            alert("Parabéns! Você ganhou o jogo em " + tempoTotal + " segundos.");
        }
    }
}

// Adicione um evento de clique ao botão
document.getElementById('mostrarPergunta').addEventListener('click', mostrarPergunta);
*/