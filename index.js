function theBeatlesPlay(musician, instrument) {
  var musicianArray = [];
  for (i = 0; i<musician.length; i++) {
    musicianArray.push(`${musician[i]} plays ${instrument[i]}.`);
  }
  return musicianArray;
}