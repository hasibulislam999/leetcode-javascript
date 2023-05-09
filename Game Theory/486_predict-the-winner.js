/**
 * Title: Predict the Winner
 * Description: You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.
 * Author: Hasibul Islam
 * Date: 06/05/2023
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const n = nums.length;
  const dp = [];

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][i] = nums[i];
  }

  for (let len = 2; len <= n; len++) {
    for (let start = 0; start < n - len + 1; start++) {
      const end = start + len - 1;
      dp[start][end] = Math.max(
        nums[start] - dp[start + 1][end],
        nums[end] - dp[start][end - 1]
      );
    }
  }

  return dp[0][n - 1] >= 0;
};
