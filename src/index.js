module.exports = function count(s, pairs) {

  var N = 1,
    answer = 0,
    check, val;

  for (var i = 0; i < pairs.length; i++) {
    N = parseInt(N * Math.pow(pairs[i][0], pairs[i][1]));
    if (N > 100000000) return 0;
  }

  for (var k = 0; k < N; k++) {
    for (var j = 0; j < s.length; j++) {
      val = ( getCommonDiviser(k + j, N) === 1 ) ? 1 : 0;
      check = ( val === +s[j] ) ? true : false;
      if (!check) break;
    }
    if (check) answer++;
  }

  const result = answer % 1000000007;
  return result;
}


function getCommonDiviser(a, b) {
  if (b == 0) return a;
  return getCommonDiviser(b, a % b);
}