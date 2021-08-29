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
        console.log(gameStorage)
      }, {
        once: true
      });
      // div.addEventListener('click', event => {
      //         for (let i = 0; i < gameStorage.length; i++){
      //           if (gameStorage[1] === 'X') {
      //             console.log('you won')
      //           }
      //         }
      //       })
    }
  }


  return {
    createGrid,
    roundCount,
    gameStorage
  }

})();


const player = {


}


const gameFlow = (() => {
  //Button for starting game
  const gameLoad = document.getElementById('start').addEventListener('click', (e) => {
    gameBoard.createGrid();
  })

  document.getElementById('grid').addEventListener('click', event => {
    for (let i = 0; i < gameBoard.gameStorage.length; i++) {
      if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[1] === 'X' && gameBoard.gameStorage[2] === 'X') {
        console.log('you won')
      } else if (gameBoard.gameStorage[3] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[5] === 'X'){
        console.log('you won')
      } else if (gameBoard.gameStorage[6] === 'X' && gameBoard.gameStorage[7] === 'X' && gameBoard.gameStorage[8] === 'X'){
        console.log('you won')
      } else if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[3] === 'X' && gameBoard.gameStorage[6] === 'X'){
        console.log('you won')
      } else if (gameBoard.gameStorage[1] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[7] === 'X'){
        console.log('you won')
      } else if (gameBoard.gameStorage[0] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[8] === 'X'){
        console.log('you won')
      } else if (gameBoard.gameStorage[2] === 'X' && gameBoard.gameStorage[4] === 'X' && gameBoard.gameStorage[6] === 'X'){
        console.log('you won')
      }
      if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[1] === 'O' && gameBoard.gameStorage[2] === 'O') {
        console.log('you won')
      } else if (gameBoard.gameStorage[3] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[5] === 'O'){
        console.log('you won')
      } else if (gameBoard.gameStorage[6] === 'O' && gameBoard.gameStorage[7] === 'O' && gameBoard.gameStorage[8] === 'O'){
        console.log('you won')
      } else if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[3] === 'O' && gameBoard.gameStorage[6] === 'O'){
        console.log('you won')
      } else if (gameBoard.gameStorage[1] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[7] === 'O'){
        console.log('you won')
      } else if (gameBoard.gameStorage[0] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[8] === 'O'){
        console.log('you won')
      } else if (gameBoard.gameStorage[2] === 'O' && gameBoard.gameStorage[4] === 'O' && gameBoard.gameStorage[6] === 'O'){
        console.log('you won')
      }
    }
  })


  return {
    gameLoad,
  }
})();