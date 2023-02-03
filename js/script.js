function getMoveName(numberMove){
  if(numberMove == 1) return 'kamień'
  if(numberMove== 2) return 'papier'
  if(numberMove == 3) return 'nożyce'
}

let randomNumber = Math.floor(Math.random() * 3 + 1); // 3
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber); // nożyce
printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); // 1
let playerMove = getMoveName(playerInput); // 'kamień'
printMessage('Twój ruch to: ' + playerMove);

if( computerMove == playerMove ) printMessage('Mamy remis!');
else if(( computerMove == 'kamień' && playerMove == 'papier' ) || ( computerMove == 'papier' && playerMove == 'nożyce') || ( computerMove == 'nożyce' && playerMove == 'kamień'))
  printMessage('Ty wygrywasz!');
else printMessage('Ty przegrywasz!');
