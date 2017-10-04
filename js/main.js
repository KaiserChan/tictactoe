document.addEventListener("DOMContentLoaded", function () {

  var playerX = 'X';
  var playerO = 'O';
  var activePlayer = playerX;


// OPTION 1 BELOW

  // var topLeftMove = document.createElement('p');
  // topLeftMove.setAttribute('class', 'player-move');
  // var topMidMove = document.createElement('p');
  // topMidMove.setAttribute('class', 'player-move');
  // var topRightMove = document.createElement('p');
  // topRightMove.setAttribute('class', 'player-move');
  // var midLeftMove = document.createElement('p');
  // midLeftMove.setAttribute('class', 'player-move');
  // var midMidMove = document.createElement('p');
  // midMidMove.setAttribute('class', 'player-move');
  // var midRightMove = document.createElement('p');
  // midRightMove.setAttribute('class', 'player-move');
  // var bottomLeftMove = document.createElement('p');
  // bottomLeftMove.setAttribute('class', 'player-move');
  // var bottomMidMove = document.createElement('p');
  // bottomMidMove.setAttribute('class', 'player-move');
  // var bottomRightMove = document.createElement('p');
  // bottomRightMove.setAttribute('class', 'player-move');
  //
  // var topLeft     = document.querySelector('#top-left');
  // var topMid      = document.querySelector('#top-mid');
  // var topRight    = document.querySelector('#top-right');
  // var midLeft     = document.querySelector('#mid-left');
  // var midMid      = document.querySelector('#mid-mid');
  // var midRight    = document.querySelector('#mid-right');
  // var bottomLeft  = document.querySelector('#bottom-left');
  // var bottomMid   = document.querySelector('#bottom-mid');
  // var bottomRight = document.querySelector('#bottom-right');
  //
  // topLeft.addEventListener('click', clickTopLeft);
  // topMid.addEventListener('click', clickTopMid);
  // topRight.addEventListener('click', clickTopRight);
  // midLeft.addEventListener('click', clickMidLeft);
  // midMid.addEventListener('click', clickMidMid);
  // midRight.addEventListener('click', clickMidRight);
  // bottomLeft.addEventListener('click', clickBottomLeft);
  // bottomMid.addEventListener('click', clickBottomMid);
  // bottomRight.addEventListener('click', clickBottomRight);
  //
  //
  // function clickTopLeft() {
  //   if (activePlayer === playerX) {
  //     topLeftMove.innerHTML = playerX;
  //     topLeft.appendChild(topLeftMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     topLeftMove.innerHTML = playerO;
  //     topLeft.appendChild(topLeftMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickTopMid() {
  //   if (activePlayer === playerX) {
  //     topMidMove.innerHTML = playerX;
  //     topMid.appendChild(topMidMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     topMidMove.innerHTML = playerO;
  //     topMid.appendChild(topMidMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickTopRight() {
  //   if (activePlayer === playerX) {
  //     topRightMove.innerHTML = playerX;
  //     topRight.appendChild(topRightMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     topRightMove.innerHTML = playerO;
  //     topRight.appendChild(topRightMove);
  //     activePlayer = playerX;
  //   }
  // }
  // function clickMidLeft() {
  //   if (activePlayer === playerX) {
  //     midLeftMove.innerHTML = playerX;
  //     midLeft.appendChild(midLeftMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     midLeftMove.innerHTML = playerO;
  //     midLeft.appendChild(midLeftMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickMidMid() {
  //   if (activePlayer === playerX) {
  //     midMidMove.innerHTML = playerX;
  //     midMid.appendChild(midMidMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     midMidMove.innerHTML = playerO;
  //     midMid.appendChild(midMidMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickMidRight() {
  //   if (activePlayer === playerX) {
  //     midRightMove.innerHTML = playerX;
  //     midRight.appendChild(midRightMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     midRightMove.innerHTML = playerO;
  //     midRight.appendChild(midRightMove);
  //     activePlayer = playerX;
  //   }
  // }
  // function clickBottomLeft() {
  //   if (activePlayer === playerX) {
  //     bottomLeftMove.innerHTML = playerX;
  //     bottomLeft.appendChild(bottomLeftMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     bottomLeftMove.innerHTML = playerO;
  //     bottomLeft.appendChild(bottomLeftMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickBottomMid() {
  //   if (activePlayer === playerX) {
  //     bottomMidMove.innerHTML = playerX;
  //     bottomMid.appendChild(bottomMidMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     bottomMidMove.innerHTML = playerO;
  //     bottomMid.appendChild(bottomMidMove);
  //     activePlayer = playerX;
  //   }
  // }
  //
  // function clickBottomRight() {
  //   if (activePlayer === playerX) {
  //     bottomRightMove.innerHTML = playerX;
  //     bottomRight.appendChild(bottomRightMove);
  //     activePlayer = playerO;
  //   } else if (activePlayer === playerO) {
  //     bottomRightMove.innerHTML = playerO;
  //     bottomRight.appendChild(bottomRightMove);
  //     activePlayer = playerX;
  //   }
  // }

  // if (topLeft === 'X' &&)
  
// OPTION 2 BELOW



  var allGridBox  = document.querySelectorAll('.grid-box');

  for (i = 0; i < allGridBox.length; i++) {
    allGridBox[i].addEventListener('click', clickGridBox);
  }
  function clickGridBox() {
    var move = document.createElement('p');
    move.setAttribute('class', 'player-move');
    if (this.firstChild) {
      console.log('Box is filled already');
    } else {
      if (activePlayer === playerX) {
        move.innerHTML = playerX;
        this.appendChild(move);
        activePlayer = playerO;
      } else if (activePlayer === playerO) {
        move.innerHTML = playerO;
        this.appendChild(move);
        activePlayer = playerX;
      }
    }
  }

});
