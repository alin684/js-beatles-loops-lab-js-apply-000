function theBeatlesPlay(musician, instrument) {
  var musicianArray = [];
  for (i = 0; i<musician.length; i++) {
    musicianArray += `${musician[i]} plays ${instrument[i]}.`;
  }
  return musicianArray;
}