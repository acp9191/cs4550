(function () {
  "use strict";

  var firstNum,
    secondNum,
    operator,
    outputNum,
    output = document.getElementById('output'),
    decimal = '.'

  function init() {
    clearVars();

    var nums = document.getElementsByClassName('btn-num');
    var ops = document.getElementsByClassName('op');
    var clear = document.getElementById('clear');

    for (var idx = 0; idx < nums.length; idx++) {
      nums[idx].addEventListener('click', handleNumClick);
    }

    for (var idx2 = 0; idx2 < ops.length; idx2++) {
      ops[idx2].addEventListener('click', handleOpClick);
    }

    clear.addEventListener('click', () => {
      clearVars();
      output.innerText = outputNum;
    });
  }

  function clearVars() {
    firstNum = '';
    secondNum = '';
    operator = '';
    outputNum = '0';
  }


  function handleNumClick(e) {
    if (!(e.target.innerText == decimal && outputNum.indexOf(decimal) > -1)) {
      (outputNum === '0' && e.target.innerText != decimal) ? outputNum = e.target.innerText: outputNum += e.target.innerText;
      output.innerText = outputNum;
    }
  }

  function handleOpClick(e) {
    if (operator && e.target.classList.contains('equals')) {
      secondNum = parseFloat(output.innerText);

      output.innerText = ((operator) => {
        switch (operator) {
          case '×':
            return firstNum * secondNum;
          case '÷':
            return firstNum / secondNum;
          case '−':
            return firstNum - secondNum;
          default:
            return firstNum + secondNum;
        }
      })(operator);

      clearVars();

    } else {
      firstNum = parseFloat(output.innerText);
      operator = e.target.innerText;
      outputNum = '0';
    }
  }

  window.addEventListener('load', init, false);
})();