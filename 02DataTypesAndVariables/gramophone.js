function gramophone(band, album, song) {
  let songAirTime = (album.length * band.length * song.length) / 2;

  console.log(`The plate was rotated ${Math.ceil(songAirTime / 2.5)} times.`);
}
gramophone("Rammstein", "Sehnsucht", "Engel");
