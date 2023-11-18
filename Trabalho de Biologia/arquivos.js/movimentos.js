        var x = 0;
        var y = 0;
        var casaAtual = 1;  // Inicializa a casaAtual como 1

        function moverParaCasa(casa) {
            // Atualiza as coordenadas do jogador para a casa desejada
        switch(casa){
            case 1: 
            x=10.75 + 'vw';
            y=3.25 + 'vh';
            break;

            case 2: 
            x=10.75 + 'vw';
            y=25.25 + 'vh';
            break;

            case 3: 
            x=10.75 + 'vw';
            y=48.25 + 'vh';
            break;

            case 4: 
            x=10.75 + 'vw';
            y=72.25 + 'vh';
            break;

            case 5: 
            x=22.5 + 'vw';
            y=72.25 + 'vh';
            break;

            case 6: 
            x=34.25 + 'vw';
            y=72.25 + 'vh';
            break;

            case 7: 
            x=34.25 + 'vw';
            y=48.25 + 'vh';
            break;

            case 8: 
            x=34.25 + 'vw';
            y=25.25 + 'vh';
            break;

            case 9: 
            x=34.25 + 'vw';
            y=3.25 + 'vh';
            break;

            case 10: 
            x=46.0+ 'vw';
            y=3.25 + 'vh';
            break;

            case 11: 
            x=57.75 + 'vw';
            y=3.25 + 'vh';
            break;

            case 12: 
            x=57.75 + 'vw';
            y=25.25 + 'vh';
            break;

            case 13: 
            x=57.75 + 'vw';
            y=48.25 + 'vh';
            break; 

            case 14: 
            x=57.75 + 'vw';
            y=72.25 + 'vh';
            break;
        }
        // Atualiza a posição do jogador no elemento HTML
        document.getElementById("gotaSg").style.left = x;
        document.getElementById("gotaSg").style.top = y;
            
        }

        function verificarResposta() {
            if (casaAtual <= 15) {
                moverParaCasa(casaAtual);
                casaAtual++; // Mova para a próxima casa
            } else {
                // O jogador atingiu o final do jogo
                alert("Parabéns! Você concluiu o jogo.");
            }
        }