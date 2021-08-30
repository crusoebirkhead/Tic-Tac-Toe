const gameBoard = (() => {

  let gameStorage = ['', '', '', '', '', '', '', '', '']
  let roundCount = ''


  const createGrid = () => {

    const grid = document.querySelector(".gridContainer");
    //Creates grid and assigns ID per square
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
      div.id = [i + 1]
      div.innerHTML = gameStorage[i]
      //Adds X and O mark to each square and updates array
      div.addEventListener('click', event => {
        roundCount++;
        if (roundCount % 2 == 0) {
          div.innerHTML = 'X'
          gameStorage[i] = 'X'
        } else if (roundCount % 2 != 0) {
          div.innerHTML = 'O'
          gameStorage[i] = 'O'
        }
      }, {
        once: true
      });
    }
  }

  return {
    createGrid,
    roundCount,
    gameStorage
  }

})();

const gameFlow = (() => {

  //Button for starting game
  const start = document.getElementById('start')
  const gameLoad = start.addEventListener('click', (e) => {
    gameBoard.createGrid();
    start.style.display = 'none';
  })

  //Logic for winner
  const announcement = document.getElementById('announcement')
  document.getElementById('grid').addEventListener('click', event => {

      if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[1] === 'X' && gameBoard.gameStorage[2] === 'X') {
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[3] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[5] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[6] === 'X' && gameBoard.gameStorage[7] === 'X' && gameBoard.gameStorage[8] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[3] === 'X' && gameBoard.gameStorage[6] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[1] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[7] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[8] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      } else if (gameBoard.gameStorage[2] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[6] === 'X'){
        announcement.textContent += `'${player1} wins!'`
      }
      if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[1] === 'O' && gameBoard.gameStorage[2] === 'O') {
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[3] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[5] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[6] === 'O' && gameBoard.gameStorage[7] === 'O' && gameBoard.gameStorage[8] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[3] === 'O' && gameBoard.gameStorage[6] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[1] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[7] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[8] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      } else if (gameBoard.gameStorage[2] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[6] === 'O'){
        announcement.textContent += `'${player2} wins!'`
      }
      if (gameBoard.gameStorage[0] === 'X' || gameBoard.gameStorage[0] === 'O'){
        if(gameBoard.gameStorage[1] === 'X' || gameBoard.gameStorage[1] === 'O'){
          if(gameBoard.gameStorage[2] === 'X' || gameBoard.gameStorage[2] === 'O'){
            if (gameBoard.gameStorage[3] === 'X' || gameBoard.gameStorage[3] === 'O'){
              if (gameBoard.gameStorage[4] === 'X' || gameBoard.gameStorage[4] === 'O') {
                if (gameBoard.gameStorage[5] === 'X' || gameBoard.gameStorage[5] === 'O') {
                  if (gameBoard.gameStorage[6] === 'X' || gameBoard.gameStorage[6] === 'O'){
                    if (gameBoard.gameStorage[7] === 'X' || gameBoard.gameStorage[7] === 'O'){
                      if (gameBoard.gameStorage[8] === 'X' || gameBoard.gameStorage[8] === 'O'){
                        announcement.textContent += "It's a tie!"
                      }
                    }
                  } 
                }
              }
            }
          }
        }
      }    
  })
  
  //Button for restarting game
    document.getElementById('restart').addEventListener('click', event => {
        const grid = document.getElementById('grid')
        const square = document.querySelectorAll('.square')
        document.getElementById('name-1').value = '';
        document.getElementById('name-2').value = '';
        gameBoard.roundCount = '';
        announcement.innerHTML = '';
        square.innerHTML = '';
        grid.innerHTML = '';
        start.style.display = 'inline';
        for (let i = 0; i < gameBoard.gameStorage.length; i++){
          gameBoard.gameStorage[i] = '';
        }
    })

  return {
    gameLoad,
  }
})();


let player1 = 'Player X';
let player2 = 'Player O';

  const submit1 = document.getElementById('submit1').addEventListener('click', event => {
    player1 = document.getElementById('name-1').value
  })

  const submit2 = document.getElementById('submit2').addEventListener('click', event => {
    player2 = document.getElementById('name-2').value
  })
