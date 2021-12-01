/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
 */

var romanToInt = function (s) {
  let num = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    //check index of integer s and num object to match the value exists here
    if (num[s[i]] < num[s[i + 1]]) {
      total += num[s[i + 1]] - num[s[i]];
    } else {
      total += num[s[i]];
    }
  }
  return total;
};

romanToInt("III");
