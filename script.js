const gameBoard = (() => {

    let gameStorage = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'O']

    const createGrid = () => {

        const grid = document.querySelector(".gridContainer");
        for (let i = 0; i < 9; i++) {
          const div = document.createElement("div");
          div.classList.add("square");
          grid.appendChild(div);
          div.id = [i + 1]
          div.innerHTML = gameStorage[i]
        }
      };


      const applyXOrO = () => {

      }
      return {
          createGrid,
      }

})();


const player = {


}


const gameFlow = (() => {
    


})();

window.addEventListener('load', (e) => {
    gameBoard.createGrid();
})


