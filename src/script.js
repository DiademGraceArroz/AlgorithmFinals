// Define the music data sets
const musicData = [];

function classify() {
  const tempo = parseInt(document.getElementById("tempo").value);
  const rhythm = parseInt(document.getElementById("rhythm").value);
  const melody = parseInt(document.getElementById("melody").value);
  const testPoint = [tempo, rhythm, melody];

  let k = 3;
  let nearestNeighbors = [];

  for (let i = 0; i < musicData.length; i++) {
    const distance = euclideanDistance(testPoint, musicData[i].features);
    nearestNeighbors.push({ index: i, distance: distance });
  }
  nearestNeighbors.sort((a, b) => a.distance - b.distance);

  const kNearestNeighbors = nearestNeighbors.slice(0, k);
  const genreCounts = {};

  for (let i = 0; i < kNearestNeighbors.length; i++) {
    const genre = musicData[kNearestNeighbors[i].index].genre;
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
  document.getElementById("result").innerHTML = maxGenre;
}