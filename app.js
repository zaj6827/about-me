'use strict';

var rightAnswers= 0
var yesNoArray = [ ['Have I ever been to Seattle before?', ['yes', 'y'], 'Correct!', 'Incorrect!'],
                 ['Have I ever been skydiving?', ['yes', 'y'], 'Correct!', 'Incorrect!'],
                 ['Have I ever been out of country?',['yes', 'y'], 'Correct!', 'Incorrect!'],
                 ['Have I ever been skydiving?',['yes', 'y'], 'Correct!', 'Incorrect!'],
                 ['Did I learn a lot doing this?', ['yes', 'y'], 'Correct!', 'Incorrect!']];
var rightAnswer = 0;
function yesNoGame (question,answer,correct,incorrect) {
  var userAnswer = prompt(question).toLowerCase();
  var flag = false;
  if (answer.includes(userAnswer)) {
    flag = true;
    rightAnswers++;
  }
  if (flag === true) {
    alert('correct');
  } else {
    alert('incorrect');
  }
}
console.log(yesNoArray.length)
for(var b = 0; b < yesNoArray.length; b++){
console.log('yesNoArray', yesNoArray[b], b);
  yesNoGame(yesNoArray[b][0],yesNoArray[b][1],yesNoArray[b][2], yesNoArray[b][3]);
}
var userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
var attempts = 0
function question6 () {
  while (attempts < 3) {
    if (userAnswer6 === 19) {
      alert('Correct! 19 is my lucky number');
      attempts = 4;
      rightAnswers++
  } else if (userAnswer6 >= 20) {
    attempts++;
    alert('Sorry! Wrong answer. Try a little lower!');
    userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
  } else if (userAnswer6 <= 18) {
    attempts++;
    alert('Sorry! Wrong answer. Try a little higher!');
    userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
  }
  if (attempts === 3) {
    alert('Sorry! You ran out of guesses. My lucky number was 19.');
    console.log('User answers to question 6 are ' + userAnswer6 );
  }
}
}
question6 ();

 var countries = ['Singapore', 'Ireland', 'Afghanistan'];
 var attemptsLeft = 6;
function question7 () {
  while (attemptsLeft > 0) {
      for (var i = 0; i < 6 ; i++) {
        var userAnswer7 = prompt('Lets test your memory! Name one country I have visited.');
        if (countries.includes(userAnswer7)){
          alert('Correct! The countries I have been to are Afghanistan, Ireland, and Singapore.');
          i = 6;
          attemptsLeft = -1;
          rightAnswers++;
        } else {
          attemptsLeft--;
          if (attemptsLeft === 0) {
            alert('Sorry! You ran out of guesses! Did you pay attention earlier?');
            i = 6;
            console.log('User answers to question 7 are ' + userAnswer7 );
          } else {
          alert('Nope! Try again.');
          console.log(attemptsLeft);
        }
          }

          }

    {alert('User got ' + rightAnswers + ' out of 7 correct!');}
  }
}
  question7 ();
