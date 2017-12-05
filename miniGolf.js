var bobScore = [3, 2, 6 ,11, 9, 2, 6, 9 ,10];
var jimboScore = [5, 12, 9 ,22, 13, 7, 16, 10, 11];
var fishScore = [2, 2, 4, 5, 4, 3, 6, 4, 1];
var par = [3, 4, 5, 5, 3, 3, 4, 3, 5];
var totalWinArray = [];

var getSum = function(total, num) {
  return total + num;
}

var totalScores = function(arrayName){
  var total = arrayName.reduce(getSum);
  return total;
}
console.log('Bob\'s Total Scores: ' + totalScores(bobScore));
console.log('Jimbo\'s Total Scores: ' + totalScores(jimboScore));
console.log('Fish\'s Total Scores: ' + totalScores(fishScore));

var comparePar = function(arrayName){
  for (var i = 0; i < arrayName.length; i++) {
    console.log('Hole ' + (i+1) + ': ' + (arrayName[i] - par[i]));
  }
}

var compareParTotal = function(arrayName){
  for (var i = 0; i < arrayName.length; i++) {
    totalWinArray.push(arrayName[i] - par[i]);
  }
  totalWin = totalWinArray.reduce(getSum);
  return totalWin;
}

console.log('Bob\'s Each Round Score: ');
comparePar(bobScore);
console.log('Jimbo\'s Each Round Score: ');
comparePar(jimboScore);
console.log('Fish\'s Each Round Score: ');
comparePar(fishScore);

console.log('');

var compareParTotalBob = compareParTotal(bobScore);
var compareParTotalJimbo = compareParTotal(jimboScore);

console.log('Bob\'s Total Scores Compare to Par: ' + compareParTotalBob);
console.log('Fish Won: $' + compareParTotalBob);

console.log('Jimbo\'s Total Scores Compare to Par: ' + compareParTotalJimbo);
console.log('Fish Won: $' + compareParTotalJimbo);

