// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * The variable count is defined inside the function counterMaker in counter1, and count is defined outside the function in counter2.  Also counter 1 returns a function that increments counter, where as counter2 just returns counter after it has been incremented.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, innings) {
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 0; i < innings; i++) {
    homeScore += callback();
    awayScore += callback();
  }
  return `
  "Home": ${homeScore},
  "Away": ${awayScore}
  `;
}
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
function getInningScore(away, home) {
  return `${away} - ${home}`;
}

function scoreboard(getInningScore, inning, innings) {
  let awayScore = 0;
  let homeScore = 0;
  let scoreLog = '';
  for (let i = 1; i <= innings; i++) {
    awayScore += inning();
    homeScore += inning();
    if (
      i === 11 ||
      i === 12 ||
      i === 13 ||
      i % 100 === 11 ||
      i % 100 === 12 ||
      i % 100 === 13
    ) {
      // Special formatting for 11th, 12th, 13th inning outputs
      scoreLog += `${i}th inning: ${getInningScore(awayScore, homeScore)} \n`;
    } else if (i === 1 || i % 10 === 1) {
      // makes all innings ending in one (other then 11th) have a "st" after the inning number.
      scoreLog += `${i}st inning: ${getInningScore(awayScore, homeScore)} \n`;
    } else if (i === 2 || i % 10 === 2) {
      // makes all innings ending in two (other then 12th) have a "nd" after the inning number.
      scoreLog += `${i}nd inning: ${getInningScore(awayScore, homeScore)} \n`;
    } else if (i === 3 || i % 10 === 3) {
      // makes all innings ending in a three (other then the 13th) have a "rd" after the inning number.
      scoreLog += `${i}rd inning: ${getInningScore(awayScore, homeScore)} \n`;
    } else {
      // all other innings get a "th" after the inning number.
      scoreLog += `${i}th inning: ${getInningScore(awayScore, homeScore)} \n`;
    }
  }
  return scoreLog + `Final Score: ${awayScore} - ${homeScore}`;
}

console.log(scoreboard(getInningScore, inning, 9));
