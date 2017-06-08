'use strict';

var rightAnswers= 0
var userAnswer1 = prompt ('Have I ever been to Seattle before?').toLowerCase();
function question1 () {
  if (userAnswer1 === 'yes') {
    alert('Correct! I was stationed at Fort Lewis and visited.');
    rightAnswers++;
} else if (userAnswer1 === 'y') {
    alert('Correct! I was stationed at Fort Lewis and visited.');
    rightAnswers++;
} else if (userAnswer1 === 'no') {
    alert('Incorrect! I was stationed at Fort Lewis and visited.');
} else if (userAnswer1 ==='n') {
    alert('Incorrect! I was stationed at Fort Lewis and visited.');
} else {
    alert('Are you sure that is an answer?');
    }
console.log('User answer to question 1 is ' + userAnswer1);
}
question1 ();

var userAnswer2 = prompt ('Have I ever been skydiving?').toLowerCase();
function question2 (){
  if (userAnswer2 === 'yes') {
    alert('Correct! I went skydiving in California.');
    rightAnswers++;
} else if (userAnswer2 === 'y') {
    alert('Correct! I went skydiving in California.');
    rightAnswers++;
} else if (userAnswer2 === 'no') {
    alert('Incorrect! I went skydiving in California.');
} else if (userAnswer2 === 'n') {
    alert('Incorrect! I went skydiving in California.');
} else {
    alert('Are you inputting correctly?');
}
console.log('User answer to question 2 is ' + userAnswer2);
}
question2 ();

var userAnswer3 = prompt ('Have I ever been bungie jumping?').toLowerCase();
function question3 () {
  if (userAnswer3 === 'yes') {
    alert('Correct! I bungie jumped here in Washington!');
    rightAnswers++;
} else if (userAnswer3 === 'y') {
    alert('Correct! I bungie jumped here in Washington!');
    rightAnswers++;
} else if (userAnswer3 === 'no') {
    alert('Incorrect! I bungie jumped here in Washington.');
} else if (userAnswer3 === 'n') {
    alert('Incorrect! I bungie jumped here in Washington.');
} else {
    alert('You have to be messing with me.');
  }
console.log('User answer to question 3 is ' + userAnswer3);
}
question3 ();

var userAnswer4 = prompt ('Have I traveled out of the country?').toLowerCase();
function question4 () {
  if (userAnswer4 === 'yes') {
    alert('Correct! I have traveled to Singapore, Ireland, and Afghanistan.');
    rightAnswers++;
} else if (userAnswer4 === 'y') {
    alert('Correct! I have traveled to Singapore, Ireland, and Afghanistan.');
    rightAnswers++;
} else if (userAnswer4 === 'no') {
    alert('Incorrect! I have traveled to Singapore, Ireland, and Afghanistan.');
} else if (userAnswer4 === 'n') {
    alert('Incorrect! I have traveled to Singapore, Ireland, and Afghanistan.');
} else {
    alert('Why are you doing this?');
}
  console.log('User answer to question 4 is ' + userAnswer4);
}

question4 ();

var userAnswer5 = prompt ('Did I learn if/else statements better because of this?').toLowerCase();
function question5 () {
  if (userAnswer5 === 'yes') {
    alert('Correct! I also learned how to properly place the .toUpperCase and .toLowerCase!');
    rightAnswers++;
} else if (userAnswer5 === 'y') {
    alert('Correct! I also learned how to properly place the .toUpperCase and .toLowerCase!');
    rightAnswers++;
} else if (userAnswer5 === 'no') {
    alert('Incorrect! This was very good practice for things to come.');
} else if (userAnswer5 === 'n') {
    alert('Incorrect! This was very good practice for things to come.');
} else {
    alert('Please stop it.');
}
  console.log('User answer to question 5 is ' + userAnswer5);
}

question5 ();

var userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
var attempts = 0
function question6 () {
  while (attempts < 3) {
    if (userAnswer6 === 19) {
      alert('Correct! 19 is my lucky number');
      attempts = 3;
      rightAnswers++
  } else if (userAnswer6 >= 20) {
    attempts++;
    alert('Sorry! Wrong answer. Try a little lower!');
    userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
  } else if (userAnswer6 <= 18) {
    attempts++;
    alert('Sorry! Wrong answer. Try a little higher!');
    userAnswer6 = parseInt(prompt('Can you guess my lucky number?'));
  } else {
    attempts = 3;
    alert('Sorry! You ran out of guesses. My lucky number was 19.');
  }
    console.log('User answers to question 6 are ' + userAnswer6 );
  }
}

question6 ();

 var countries = ['Singapore', 'Ireland', 'Afghanistan'];
  var attemptsLeft = 5;
function question7 () {
  while (attemptsLeft > 0) {
    var userAnswer7 = prompt('Lets test your memory! Name one country I have visited.');
      for (var i = 0; i < countries.length; i++) {
        if (userAnswer7 === countries[i]) {
          alert('Correct! The countries I have been to are Afghanistan, Ireland, and Singapore.');
          i = countries.length;
          attemptsLeft = -1;
          rightAnswers++;
        }
      }
        if (attemptsLeft === 0) {
          alert('Sorry! You ran out of guesses! Did you pay attention earlier?');
          i = countries.length;
        }
        if (attemptsLeft > 0) {
          alert('Nope! Try again.');
          attemptsLeft--;
          userAnswer7;
      }
      console.log('User answers to question 7 are ' + userAnswer7 );
    }
    {alert('User got ' + rightAnswers + ' out of 7 correct!');}
  }

question7 ();
