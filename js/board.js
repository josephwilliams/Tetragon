import Player from './player'

class Board {
  constructor(){
    this.grid = [];
    this.populate();
    this.player1 = new Player;
    this.player2 = new Player;
  }

  populate() {
    this.grid = [
                 ["red", false, false, null, null, false, false, "blue"],
                 [false, false, false, false, false, false, false, false],
                 [false, false, null, false, false, null, false, false],
                 [false, null, false, false, false, false, null, false],
                 [false, null, false, false, false, false, null, false],
                 [false, false, null, false, false, null, false, false],
                 [false, false, false, false, false, false, false, false],
                 ["blue", false, false, null, null, false, false, "red"]
               ];
  }

  isOver() {
    this.grid.forEach(arr => {
      arr.forEach(el => {
        if (el === false || el === null)
          return false;
      });
    });
    return true;
  }


}

export default Board;
