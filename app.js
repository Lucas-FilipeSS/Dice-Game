/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score, roundScore, activePlayer, gamePlaying;
//Função que zera tudo antes de começar
init();

document.querySelector('.btn-roll').addEventListener('click',function() {

  if(gamePlaying){

    //1. Gera um número aleatorio
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    
    //2. Põe o resultado no display
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Atualiza o score se ele for diferenrte de 1
    if(dice !== 1){
      //adiciona ao score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
      //Função que troca de jogador
      nextPlayer();
    }

  }

});


document.querySelector('.btn-hold').addEventListener('click',function() {

  if(gamePlaying){
    //Adicionar a pontuação local à pontuação global
    scores[activePlayer] += roundScore;

    //Atualiza o placar na tela
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Checar se o jogador venceu a partida
    if(scores[activePlayer] >= 100){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }else{
      //Troca de jogador
      nextPlayer();
    }
  }

});

//Zerando todos os placares para começar uma nova partida
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
      //troca de player
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;
  
      //zera o placar quando for trocar de jogador
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
  
      //troca a cor do fundo adicionando ou removendo a classe active para indicar quem esta jogando
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      
      //apaga o dado central quando troca de jogador
      document.querySelector('.dice').style.display = 'none';
}

function init() {
  //Função que zera tudo antes de começar
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}

//**************************************************************************************************************************** */
//Solução dos desafios

// var score, roundScore, activePlayer, gamePlaying, contDice;
// //Função que zera tudo antes de começar
// init();

// document.querySelector('.btn-roll').addEventListener('click',function() {

//   if(gamePlaying){

//     //1. Gera um número aleatorio
//     var dice1 = Math.floor(Math.random() * 6) + 1;
//     var dice2 = Math.floor(Math.random() * 6) + 1;
    
//     //2. Põe o resultado no display
//     document.getElementById('dice-1').style.display = 'block';
//     document.getElementById('dice-2').style.display = 'block';
//     document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
//     document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

//     //3. Atualiza o score se ele for diferenrte de 1
//     if(dice1 !== 1 && dice2 !==1){
//       roundScore += dice1 + dice2;
//       document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     }else{
//       nextPlayer();
//     }
//   }
//     //desafio 2
//   //   if (dice === 6 && contDice === 6){
//   //     scores[activePlayer] = 0;
//   //     document.getElementById('score-' + activePlayer).textContent = 0;
//   //     nextPlayer();
//   //   }else if(dice !== 1){
//   //     //adiciona ao score
//   //     contDice = dice;
//   //     roundScore += dice;
//   //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
//   //   }else{
//   //     //Função que troca de jogador
//   //     nextPlayer();
//   //   }
//   //   contDice = dice;
//   // }

// });


// document.querySelector('.btn-hold').addEventListener('click',function() {

//   if(gamePlaying){

//     //Adicionar a pontuação local à pontuação global
//     scores[activePlayer] += roundScore;

//     //Atualiza o placar na tela
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

//     //Recebe o input do usuário e verifica 
//     var input = document.querySelector('.final-score').value;
//     var winningScore;

//     if(input){
//       if(typeof input !== 'string')winningScore = input;
//       else winningScore = 100;
//     }else{
//       winningScore = 100;
//     }

//     //Checar se o jogador venceu a partida
//     if(scores[activePlayer] >= winningScore){
//       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//       document.getElementById('dice-1').style.display = 'none';
//       document.getElementById('dice-2').style.display = 'none';
//       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//       gamePlaying = false;
//     }else{
//       //Troca de jogador
//       nextPlayer();
//     }
//   }

// });

// //Zerando todos os placares para começar uma nova partida
// document.querySelector('.btn-new').addEventListener('click', init);

// function nextPlayer() {
//       //troca de player
//       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//       roundScore = 0;
  
//       //zera o placar quando for trocar de jogador
//       document.getElementById('current-0').textContent = '0';
//       document.getElementById('current-1').textContent = '0';
  
//       //troca a cor do fundo adicionando ou removendo a classe active para indicar quem esta jogando
//       document.querySelector('.player-0-panel').classList.toggle('active');
//       document.querySelector('.player-1-panel').classList.toggle('active');
      
//       //apaga o dado central quando troca de jogador
//       document.getElementById('dice-1').style.display = 'none';
//       document.getElementById('dice-2').style.display = 'none';
// }

// function init() {
//   //Função que zera tudo antes de começar

//   scores = [0,0];
//   roundScore = 0;
//   activePlayer = 0;
//   gamePlaying = true;
//   contDice = 0;

//   document.getElementById('dice-1').style.display = 'none';
//   document.getElementById('dice-2').style.display = 'none';

//   document.getElementById('score-0').textContent = '0';
//   document.getElementById('score-1').textContent = '0';
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';
//   document.getElementById('name-0').textContent = 'Player 1';
//   document.getElementById('name-1').textContent = 'Player 2';

//   document.querySelector('.player-0-panel').classList.remove('winner');
//   document.querySelector('.player-1-panel').classList.remove('winner');
//   document.querySelector('.player-0-panel').classList.remove('active');
//   document.querySelector('.player-1-panel').classList.remove('active');
//   document.querySelector('.player-0-panel').classList.add('active');
// }

