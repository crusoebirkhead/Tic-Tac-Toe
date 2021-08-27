const gameBoard = (() => {

    let gameStorage = ['', '', '', '', '', '', '', '', '']
    let roundCount = ''


    const createGrid = () => {

        const grid = document.querySelector(".gridContainer");
        for (let i = 0; i < 9; i++) {
          const div = document.createElement("div");
          div.classList.add("square");
          grid.appendChild(div);
          div.id = [i + 1]
          div.innerHTML = gameStorage[i]
          div.addEventListener('click', event => {
                roundCount++;
            if (roundCount % 2 == 0) {
                div.innerHTML = 'X'
                gameStorage[i] = 'X'
            } else if (roundCount % 2 != 0) {
                div.innerHTML = 'O'
                gameStorage[i] = 'O'
            } console.log(gameStorage)
        })
      };
    } 


      return {
          createGrid,
          gameStorage
          // applyXOrO,
      }

})();


const player = {


}


const gameFlow = (() => {
   


})();

window.addEventListener('load', (e) => {
    gameBoard.createGrid();
})




