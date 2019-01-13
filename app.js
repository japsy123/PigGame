/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random()*6) + 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){

    // Random number
    var dice = Math.floor(Math.random()*6) + 1;

    // show dice 
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';

    // Update dice
    diceDom.src = 'dice-' + dice + '.png';

    // update round score if the rolled number was not 1

    if( dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
            // set roundscore to zero. 
            //  Hide the dice
            // update the both the current scores in UI
            //  Change the active player and its class
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;

            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';

    }

})

document.querySelector('.btn-hold').addEventListener('click', function(){

    // Save the score
    scores[activePlayer] += roundScore;

    //  Update the UI
    document.querySelector("#score-0").textContent = scores[0];
    document.querySelector("#score-1").textContent = scores[1];

    // Change the player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    // roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';

    //  Check for winning condition 
})