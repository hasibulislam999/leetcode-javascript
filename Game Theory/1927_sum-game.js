/**
 * Title: Sum Game
 * Description: Alice and Bob take turns playing a game, with Alice starting first.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function (num) {
  const middle = num.length / 2;
  // < 0 - the sum on the right side is bigger
  // > 0 - the sum on the left side is bigger
  let diff = 0;
  // < 0 - question marks have left on the left side
  // > 0 - question marks have left on the right side
  let turns = 0;

  // turns- diff+ help to ensure that the sum on the side with question marks
  // is lower than the other one
  for (let i = 0; i < middle; i += 1) {
    if (num[i] === "?") {
      turns -= 1;
    } else {
      diff += num[i] - "0";
    }
  }

  // counting pure diffs
  for (let i = middle; i < num.length; i += 1) {
    if (num[i] === "?") {
      turns += 1;
    } else {
      diff -= num[i] - "0";
    }
  }

  // Alice wins if the number of turns doesn't allow Bob
  // to keep playing a change by 9 per 2 turns: (Alice-Bob) 0-9 1-8 2-7 3-6 etc,
  // which would reduce the diff of sums to 0 in the end.
  return diff !== turns * 4.5;
};
