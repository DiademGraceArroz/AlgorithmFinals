const songData = [
  //number,acousticness,danceability,duration_ms,energy,instrumentalness,key,liveness,loudness,mode,speechiness,tempo,time_signature,valence,target,song_title,artist
  [0, 0.0102, 0.833, 204600, 0.434, 0.0219, 2, 0.165, -8.795, 1, 0.431, 150.062, 4.0, 0.286, 1, "Mask Off", "Future"],
  [1, 0.199, 0.743, 326933, 0.359, 0.00611, 1, 0.137, -10.401, 1, 0.0794, 160.083, 4.0, 0.588, 1, "Redbone", "Childish Gambino"],
  [2, 0.0344, 0.838, 185707, 0.412, 0.000234, 2, 0.159, -7.148, 1, 0.289, 75.044, 4.0, 0.173, 1, "Xanny Family", "Future"],
  [4, 0.18, 0.678, 392893, 0.561, 0.512, 5, 0.439, -11.648, 0, 0.0694, 174.004, 4.0, 0.904, 1, "Parallel Lines", "Junior Boys"],
  [5, 0.00479, 0.804, 251333, 0.56, 0.0, 8, 0.164, -6.682, 1, 0.185, 85.023, 4.0, 0.264, 1, "Sneakin", "Drake"],
  [6, 0.0145, 0.739, 241400, 0.472, 7.27e-06, 1, 0.207, -11.204, 1, 0.156, 80.03, 4.0, 0.308, 1, "Childs Play", "Drake"],
  [7, 0.0202, 0.266, 349667, 0.348, 0.664, 10, 0.16, -11.609, 0, 0.0371, 144.154, 4.0, 0.393, 1, "Gyöngyhajú lány", "Omega"],
  [8, 0.0481, 0.603, 202853, 0.944, 0.0, 11, 0.342, -3.626, 0, 0.347, 130.035, 4.0, 0.398, 1, "I've Seen Footage", "Death Grips"],
  [9, 0.00208, 0.836, 226840, 0.603, 0.0, 7, 0.571, -7.792, 1, 0.237, 99.994, 4.0, 0.386, 1, "Digital Animal", "Honey Claws"],
  [10, 0.0572, 0.525, 358187, 0.855, 0.0143, 5, 0.649, -7.372, 0, 0.0548, 111.951, 3.0, 0.524, 1, "Subways - In Flagranti Extended Edit", "The Avalanches"],
  [11, 0.0915, 0.753, 324880, 0.748, 0.00348, 10, 0.212, -8.62, 1, 0.0494, 104.322, 4.0, 0.642, 1, "Donme Dolap - Baris K Edit", "Modern Folk Üçlüsü"],
  [12, 0.253, 0.603, 356973, 0.434, 0.0619, 0, 0.108, -11.062, 1, 0.0342, 127.681, 4.0, 0.381, 1, "Cemalim", "Erkin Koray"],
  [13, 0.366, 0.762, 243270, 0.476, 0.0, 2, 0.155, -6.708, 1, 0.0289, 127.087, 4.0, 0.414, 1, "Do It Again", "Holy Ghost!"]
  // ... rest of the data
];

function euclideanDistance(point1, point2) {
  const danceabilityDiff = Math.pow(point1[2] - point2[2], 2);
  const energyDiff = Math.pow(point1[4] - point2[4], 2);
  const tempoDiff = Math.pow(point1[11] - point2[11], 2);
  return Math.sqrt(danceabilityDiff + energyDiff + tempoDiff);
}

function classifySongKNN(testPoint, k) {
  let nearestNeighbors = [];

  for (let i = 0; i < songData.length; i++) {
      const distance = euclideanDistance(testPoint, songData[i]);
      nearestNeighbors.push({ index: i, distance: distance });
  }
  nearestNeighbors.sort((a, b) => a.distance - b.distance);

  const kNearestNeighbors = nearestNeighbors.slice(0, k);
  const songTitles = {};

  for (let i = 0; i < kNearestNeighbors.length; i++) {
      const title = songData[kNearestNeighbors[i].index][15];
      const artist = songData[kNearestNeighbors[i].index][16];
      const songKey = title + " - " + artist;
      songTitles[songKey] = songTitles[songKey] ? songTitles[songKey] + 1 : 1;
  }

  let maxCount = 0;
  let maxSongTitle = null;

  for (const song in songTitles) {
      if (songTitles[song] > maxCount) {
          maxCount = songTitles[song];
          maxSongTitle = song;
      }
  }

  return maxSongTitle;
}

function classifySong() {
  const danceabilityInput = parseFloat(document.getElementById('danceabilityInput').value);
  const energyInput = parseFloat(document.getElementById('energyInput').value);
  const tempoInput = parseFloat(document.getElementById('tempoInput').value);

  const testPoint = [0, 0, danceabilityInput, 0, energyInput, 0, 0, 0, 0, 0, 0, tempoInput, 0, 0, 0];

  const k = 3; // Set the desired value of k

  const predictedSong = classifySongKNN(testPoint, k);

  document.getElementById('result').textContent = predictedSong;
}
