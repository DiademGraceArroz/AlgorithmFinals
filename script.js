const musicData = [
    // tempo, rhythm, melody, genre
    [120, 2, 5, "Jazz"],
    [140, 3, 7, "Pop"],
    [160, 4, 9, "Rock"],
    // Add more music data entries
  ];
  
  function euclideanDistance(point1, point2) {
    let sumSquaredDistances = 0;
    for (let i = 0; i < point1.length; i++) {
      sumSquaredDistances += Math.pow(point1[i] - point2[i], 2);
    }
    return Math.sqrt(sumSquaredDistances);
  }
  
  function classifySong(title, artist) {
    const songData = getSongDataByTitleOrArtist(title, artist);
    if (!songData) {
      console.log("Song data not found for the given title or artist.");
      return;
    }
  
    const testPoint = songData.slice(0, 3);
    const k = 3;
    let nearestNeighbors = [];
  
    for (let i = 0; i < musicData.length; i++) {
      const distance = euclideanDistance(testPoint, musicData[i].slice(0, 3));
      nearestNeighbors.push({ index: i, distance: distance });
    }
    nearestNeighbors.sort((a, b) => a.distance - b.distance);
  
    const kNearestNeighbors = nearestNeighbors.slice(0, k);
    const genreCounts = {};
  
    for (let i = 0; i < kNearestNeighbors.length; i++) {
      const genre = musicData[kNearestNeighbors[i].index][3];
      genreCounts[genre] = genreCounts[genre] ? genreCounts[genre] + 1 : 1;
    }
  
    let maxCount = 0;
    let maxGenre = null;
  
    for (const genre in genreCounts) {
      if (genreCounts[genre] > maxCount) {
        maxCount = genreCounts[genre];
        maxGenre = genre;
      }
    }
  
    return maxGenre;
  }
  
  function getSongDataByTitleOrArtist(title, artist) {
    // Simulating song data retrieval based on title or artist
    // Replace this with your own logic or API calls to retrieve the song data
    if (title.toLowerCase().includes("halfway") && artist.toLowerCase().includes("black eyed peas")) {
      return [150, 2, 6]; // Tempo, Rhythm, Melody
    }
  
    return null;
  }
  
  // Example usage
  const songTitle = "Meet Me Halfway";
  const artist = "The Black Eyed Peas";
  
  const genre = classifySong(songTitle, artist);
  if (genre) {
    console.log("Genre:", genre);
  
    // Retrieve the tempo, rhythm, and melody based on the genre
    const songData = musicData.find((data) => data[3] === genre);
    const tempo = songData[0];
    const rhythm = songData[1];
    const melody = songData[2];
    console.log("Tempo:", tempo);
    console.log("Rhythm:", rhythm);
    console.log("Melody:", melody);
  }
  
