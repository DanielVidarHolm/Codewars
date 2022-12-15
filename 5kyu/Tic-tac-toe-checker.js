
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
function isSolved(board) {
    var win = [
      [0,1,2], [3,4,5], [6,7,8], // Horizontal
      [0,3,6], [1,4,7], [2,5,8], // Vertical
      [0,4,8], [2,4,6]           // Diagonal
    ];
  
    board = board[0].concat(board[1], board[2]);
    for (var i = 0, r; i < win.length; i++)
      if (r = val(win[i], board))
        return r;
    
    return ~board.indexOf(0) ? -1 : 0;
  }
  
  // Return the value if all values are the same
  function val(p, b) { return b[p[0]] == b[p[1]] && b[p[0]] == b[p[2]] && b[p[0]]; }