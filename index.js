function theBeatlesPlay(musician, instrument) {
  var musicianArray = [];
  for (var i = 0; i<musician.length; i++) {
    musicianArray.push(musician[i] + " plays " + instrument[i]);
  }
  return musicianArray;
}

function johnLennonFacts(array) {
  let n = 0;
  while (n<array.length) {
    array[n] = array[n] + "!!!";
    n++;
  }
  return array;
}