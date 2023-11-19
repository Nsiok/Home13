var secretNumber = Math.floor(Math.random() * 20) + 1;
var attempts = 0;

document.getElementById('check-btn').addEventListener('click', function() {
  var guess = parseInt(document.getElementById('guess').value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById('result').textContent = 'Поздравляю! Вы угадали число ' + secretNumber + ' за ' + attempts + ' попыток.';
  } else if (guess < secretNumber) {
    document.getElementById('result').textContent = 'Попробуйте число больше.';
  } else {
    document.getElementById('result').textContent = 'Попробуйте число меньше.';
  }
});
