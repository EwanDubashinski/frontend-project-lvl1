import readlineSync from 'readline-sync';

function makeRound() {
  let result = false;
  const i = Math.floor(Math.random() * Math.floor(100));
  console.log(`Question: ${i}`);
  const correctAnswer = i % 2 === 0 ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if (answer === correctAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return result;
}

export default function game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let index = 0; index < 3; index++) {
    if (!makeRound()) return;
  }
  console.log(`Congratulations, ${name}!`);
}
