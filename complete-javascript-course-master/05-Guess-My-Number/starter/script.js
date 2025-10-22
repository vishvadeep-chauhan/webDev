// Selecting and manipulating elements

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// Reading values back

// console.log(document.querySelector('.message').textContent); // '🎉 Correct Number!'
// console.log(document.querySelector('.number').textContent);  // '13'

// Input field: use .value (not textContent)

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); // '23'

let score = 20;
// Example: later you’ll add a click handler (covered in next lecture)
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(number)
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Guess:', typeof guess);

  // when there is no input ,

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'NO Number \u26D4')
    );
    if (score > 1) {
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent =
          '😂 you lost the GAME')
      );
      console.log((document.querySelector('.score').textContent = 0));
    }

    // where player win
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = 'Correct  Number')
    );

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when gauss is too High .
  } else if (guess > secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = 'too Big NUMber')
    );

    if (score > 1) {
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent =
          '😂 you lost the GAME')
      );
      console.log((document.querySelector('.score').textContent = 0));
    }

    // when gauss is too low
  } else if (guess < secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = 'too low num ')
    );
    if (score > 1) {
      score--;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent =
          '😂 you lost the GAME')
      );
      console.log((document.querySelector('.score').textContent = 0));
    }
  }
});
