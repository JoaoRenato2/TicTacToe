<h1 align="center"> Tic Tac Toe using Minimax</h1>
<img src="https://user-images.githubusercontent.com/102429743/177063761-6e8fdad1-d8bf-4db8-9932-3f8fdb2b6fce.gif"/>

<p align="center"></p>

<h2>📚 Sobre esse projeto </h2>
<p> Projeto desenvolvido para praticar alguns conceitos de programação Web e algoritmos. </p>

## 💻 O que é Minimax?
Minimax é uma inteligência artificial aplicada em jogos de dois jogadores, como jogo da velha, damas, xadrez e go. Esses jogos são conhecidos como jogos de soma zero, pois em uma representação matemática: um jogador ganha (+1) e outro perde (-1) ou ambos para não ganhar (0).

## 🤯 Como funciona?
O algoritmo busca, recursivamente, a melhor jogada que leva o jogador Max a ganhar ou não perder (empate). Ele considera o estado atual do jogo e os movimentos disponíveis nesse estado, então para cada movimento válido ele joga (alternando min e max) até encontrar um estado terminal (ganhar, empatar ou perder).

## Game tree
Abaixo, o melhor movimento está no meio porque o valor máximo está no 2º nó à esquerda.

<img src="https://user-images.githubusercontent.com/102429743/177064304-a2fe461b-f06c-49c7-bacb-6f1c97051ff1.png"/>

É mecanismo é igual aos movimentos válidos no tabuleiro.

Árvore de jogo simplificada:

<img src="https://user-images.githubusercontent.com/102429743/177064398-fe448ce5-74f8-4e47-afae-2fdbab5b7b51.png"/>

Essa árvore tem 11 nós. A árvore de jogo completa tem 549.946 nós!

Em um jogo mais complexo, como o xadrez, é difícil pesquisar toda a árvore do jogo. No entanto, Alpha–beta Pruning é um método de otimização do algoritmo minimax que permite desconsiderar alguns ramos na árvore de busca, pois ele corta nós irrelevantes (subárvores) na busca.

<h2>🔎 Detalhes </h2>
<p> Foi utilizado diversos componentes tanto de estilização quanto de mecânica no JavaScript. </p>

<h2>👷🏻‍♂️ Como contribuir</h2>
<p> Fork este respositório <br>
Faça as mudanças<br>
Abra um pull request. </p>

## 👨🏻‍💻 Tecnologias Usadas
- [x] HTML<br>
- [x] CSS<br>
- [x] JAVASCRIPT

