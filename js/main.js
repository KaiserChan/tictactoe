document.addEventListener("DOMContentLoaded", function () {

// ---------- Below are variables required ---------- //
  var playerX = 'X';
  var playerO = 'O';
  var activePlayer = playerX;

  var displayMessage = document.createElement('p');
  displayMessage.setAttribute('class', 'display-message');

  var main        = document.querySelector('main');
  var topLeft     = document.querySelector('#top-left');
  var topMid      = document.querySelector('#top-mid');
  var topRight    = document.querySelector('#top-right');
  var midLeft     = document.querySelector('#mid-left');
  var midMid      = document.querySelector('#mid-mid');
  var midRight    = document.querySelector('#mid-right');
  var bottomLeft  = document.querySelector('#bottom-left');
  var bottomMid   = document.querySelector('#bottom-mid');
  var bottomRight = document.querySelector('#bottom-right');

  var allGridBox  = document.querySelectorAll('.grid-box');


// ---------- Below is the loop to iterate thru all grid boxes ---------- //
  for (i = 0; i < allGridBox.length; i++) {
    allGridBox[i].addEventListener('click', clickGridBox);
    allGridBox[i].addEventListener('click', resultCheck);
  }


// ---------- Below is callback function to stamp selected boxes on click ---------- //
  function clickGridBox() {
    if (this.firstChild) {
      console.log('Box is filled already');
    } else {
      if (activePlayer === playerX) {
        this.innerHTML = playerX;
        activePlayer = playerO;
      } else if (activePlayer === playerO) {
        this.innerHTML = playerO;
        activePlayer = playerX;
      }
    }
  }


// ---------- Below is callback function to check result after grid boxes are being stamped ---------- //
  function resultCheck() {
  // ------ Below are the result check for the rows ------ //
    if (topLeft.innerHTML === 'X' && topMid.innerHTML === 'X' && topRight.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topLeft.innerHTML === 'O' && topMid.innerHTML === 'O' && topRight.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (midLeft.innerHTML === 'X' && midMid.innerHTML === 'X' && midRight.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (midLeft.innerHTML === 'O' && midMid.innerHTML === 'O' && midRight.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (bottomLeft.innerHTML === 'X' && bottomMid.innerHTML === 'X' && bottomRight.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (bottomLeft.innerHTML === 'O' && bottomMid.innerHTML === 'O' && bottomRight.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    }

  // ------ Below are the result check for the columns ------ //
    else if (topLeft.innerHTML === 'X' && midLeft.innerHTML === 'X' && bottomLeft.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topLeft.innerHTML === 'O' && midLeft.innerHTML === 'O' && bottomLeft.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topMid.innerHTML === 'X' && midMid.innerHTML === 'X' && bottomMid.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topMid.innerHTML === 'O' && midMid.innerHTML === 'O' && bottomMid.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topRight.innerHTML === 'X' && midRight.innerHTML === 'X' && bottomRight.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topRight.innerHTML === 'O' && midRight.innerHTML === 'O' && bottomRight.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    }

  // ------ Below are the result check for the diagonals ------ //
    else if (topLeft.innerHTML === 'X' && midMid.innerHTML === 'X' && bottomRight.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topLeft.innerHTML === 'O' && midMid.innerHTML === 'O' && bottomRight.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topRight.innerHTML === 'X' && midMid.innerHTML === 'X' && bottomLeft.innerHTML === 'X') {
      var message = 'PlayerX won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    } else if (topRight.innerHTML === 'O' && midMid.innerHTML === 'O' && bottomLeft.innerHTML === 'O') {
      var message = 'PlayerO won!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    }

  // ------ Below are the result check for tie game ------ //
    else {
      for (i = 0; i < allGridBox.length; i++) {
        allGridBox[i] != "";
      }
      var message = 'Its a tie! Please reload and play again!'
      displayMessage.innerHTML = message;
      main.appendChild(displayMessage);
    }
  }

});
