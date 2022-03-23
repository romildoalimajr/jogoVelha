let jogador = null;
let vencedor = null;
let jogadorSelecionado = document.getElementById('jogadorSelecionado');
let vencedorSelecionado = document.getElementById('vencedorSelecionado');

mudarJogador('X');

function escolherQuadrado(id){
    if(vencedor !== null){
        return;
    };

    let quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();

};
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador
};

function checarVencedor(){
    let q1 = document.getElementById('q1');
    let q2 = document.getElementById('q2');
    let q3 = document.getElementById('q3');
    let q4 = document.getElementById('q4');
    let q5 = document.getElementById('q5');
    let q6 = document.getElementById('q6');
    let q7 = document.getElementById('q7');
    let q8 = document.getElementById('q8');
    let q9 = document.getElementById('q9');

    if(checarSequencia(q1, q2, q3)){
        mudarCorQuadrado(q1, q2, q3);
        mudarVencedor(q1);
        return;
    };
    if(checarSequencia(q4, q5, q6)){
        mudarCorQuadrado(q4, q5, q6);
        mudarVencedor(q4);
        return;
    };

    if(checarSequencia(q7, q8, q9)){
        mudarCorQuadrado(q7, q8, q9);
        mudarVencedor(q7);
        return;
    };
    if(checarSequencia(q1, q4, q7)){
        mudarCorQuadrado(q1, q4, q7);
        mudarVencedor(q1);
        return;
    };
    if(checarSequencia(q2, q5, q8)){
        mudarCorQuadrado(q2, q5, q8);
        mudarVencedor(q2);
        return;
    };

    if(checarSequencia(q3, q6, q9)){
        mudarCorQuadrado(q3, q6, q9);
        mudarVencedor(q3);
        return;
    };
    if(checarSequencia(q1, q5, q9)){
        mudarCorQuadrado(q1, q5, q9);
        mudarVencedor(q1);
        return;
    };
    if(checarSequencia(q3, q5, q7)){
        mudarCorQuadrado(q3, q5, q7);
        mudarVencedor(q3);
        return;
    };
};

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
};

function mudarCorQuadrado(q1, q2, q3){
    q1.style.background = '#0f0';
    q2.style.background = '#0f0';
    q3.style.background = '#0f0';
};

function checarSequencia(q1, q2, q3 ){
    let ehIgual = false;

    if(q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        ehIgual = true;
    };
};

function reiniciar(){
    vencedor = null;
    vencedorSelecionado = '';

    for(let i = 1; i <= 9; i++){
        let quadrado = document.getElementById('q'+i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    };

    mudarJogador('X');
};

