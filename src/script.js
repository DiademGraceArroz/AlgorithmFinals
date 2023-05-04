// Define the music data sets
const musicData = [
  // tempo, rhythm, melody
  { features: [120, 2, 5], genre: "Jazz" },
  { features: [140, 3, 7], genre: "Pop" },
  { features: [160, 4, 9], genre: "Rock" },
  { features: [118, 1, 4], genre: "Jazz" },
  { features: [124, 2, 5], genre: "Pop" },
  { features: [132, 3, 7], genre: "Rock" },
  { features: [136, 4, 8], genre: "Classical" },
  { features: [140, 2, 6], genre: "Country" },
  { features: [126, 3, 5], genre: "Jazz" },
  { features: [130, 4, 7], genre: "Pop" },
  { features: [148, 2, 8], genre: "Rock" },
  { features: [150, 3, 9], genre: "Classical" },
  { features: [144, 4, 7], genre: "Country" },
  { features: [122, 2, 5], genre: "Jazz" },
  { features: [126, 3, 6], genre: "Pop" },
  { features: [138, 4, 8], genre: "Rock" },
  { features: [142, 2, 7], genre: "Classical" },
  { features: [138, 3, 6], genre: "Country" },
  { features: [124, 1, 5], genre: "Jazz" },
  { features: [132, 3, 6], genre: "Pop" },
  { features: [144, 4, 9], genre: "Rock" },
  { features: [156, 2, 7], genre: "Classical" },
  { features: [146, 3, 8], genre: "Country" },
  { features: [120, 2, 4], genre: "Jazz" },
  { features: [128, 4, 6], genre: "Pop" },
  { features: [120, 2, 5], genre: "Jazz" },
  { features: [140, 3, 7], genre: "Pop" },
  { features: [160, 4, 9], genre: "Rock" },
  { features: [130, 2, 6], genre: "Classical" },
  { features: [150, 3, 8], genre: "Country" },
  { features: [125, 2, 5], genre: "Jazz" },
  { features: [135, 3, 6], genre: "Pop" },
  { features: [165, 4, 10], genre: "Rock" },
  { features: [140, 2, 6], genre: "Classical" },
  { features: [155, 3, 7], genre: "Country" },
  { features: [130, 2, 4], genre: "Jazz" },
  { features: [145, 3, 7], genre: "Pop" },
  { features: [170, 4, 9], genre: "Rock" },
  { features: [135, 2, 7], genre: "Classical" },
  { features: [160, 3, 8], genre: "Country" },
  { features: [140, 2, 6], genre: "Jazz" },
  { features: [150, 3, 6], genre: "Pop" },
  { features: [175, 4, 10], genre: "Rock" },
  { features: [145, 2, 5], genre: "Classical" },
  { features: [165, 3, 7], genre: "Country" },
  { features: [135, 2, 4], genre: "Jazz" },
  { features: [155, 3, 8], genre: "Pop" },
  { features: [180, 4, 9], genre: "Rock" },
  { features: [140, 2, 6], genre: "Classical" },
  { features: [170, 3, 7], genre: "Country" },
  { features: [130, 2, 5], genre: "Jazz" },
  { features: [145, 3, 6], genre: "Pop" },
  { features: [165, 4, 10], genre: "Rock" },
  { features: [150, 2, 7], genre: "Classical" },
  { features: [160, 3, 8], genre: "Country" },
  { features: [120, 2, 5], genre: "Jazz" },
  { features: [140, 3, 7], genre: "Pop" },
  { features: [160, 4, 9], genre: "Rock" },
  { features: [110, 1, 4], genre: "Classical" },
  { features: [130, 2, 6], genre: "Country" },
  { features: [118, 3, 4], genre: "Jazz" },
  { features: [142, 4, 7], genre: "Pop" },
  { features: [155, 2, 8], genre: "Rock" },
  { features: [115, 3, 3], genre: "Classical" },
  { features: [135, 1, 6], genre: "Country" },
  { features: [121, 2, 5], genre: "Jazz" },
  { features: [138, 4, 7], genre: "Pop" },
  { features: [152, 3, 9], genre: "Rock" },
  { features: [112, 2, 4], genre: "Classical" },
  { features: [130, 3, 6], genre: "Country" },
  { features: [123, 1, 5], genre: "Cazz" },
  { features: [145, 4, 8], genre: "Pop" },
  { features: [157, 3, 9], genre: "Rock" },
  { features: [109, 2, 3], genre: "Classical" },
  { features: [128, 1, 6], genre: "Country" },
  { features: [120, 3, 5], genre: "Jazz" },
  { features: [140, 4, 7], genre: "Pop" },
  { features: [150, 2, 8], genre: "Rock" },
  { features: [108, 1, 3], genre: "Classical" },
  { features: [132, 2, 6], genre: "Country" },
  { features: [128, 3, 6], genre: "Jazz" },
  { features: [132, 2, 8], genre: "Pop" },
  { features: [136, 4, 7], genre: "Rock" },
  { features: [120, 1, 5], genre: "Classical" },
  { features: [144, 3, 9], genre: "Country" },
  { features: [118, 2, 4], genre: "Jazz" },
  { features: [150, 4, 8], genre: "Pop" },
  { features: [162, 5, 9], genre: "Rock" },
  { features: [125, 2, 6], genre: "Classical" },
  { features: [138, 3, 7], genre: "Country" },
  { features: [130, 3, 5], genre: "Jazz" },
  { features: [142, 4, 8], genre: "Pop" },
  { features: [155, 5, 9], genre: "Rock" },
  { features: [122, 1, 7], genre: "Classical" },
  { features: [146, 3, 6], genre: "Country" },
  { features: [135, 2, 5], genre: "Jazz" },
  { features: [128, 4, 8], genre: "Pop" },
  { features: [168, 5, 9], genre: "Rock" },
  { features: [130, 1, 6], genre: "Classical" },
  { features: [150, 3, 7], genre: "Country" },
];

function euclideanDistance(point1, point2) {
  let sumSquaredDistances = 0;
  for (let i = 0; i < point1.length; i++) {
    sumSquaredDistances += Math.pow(point1[i] - point2[i], 2);
  }
  return Math.sqrt(sumSquaredDistances);
}

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