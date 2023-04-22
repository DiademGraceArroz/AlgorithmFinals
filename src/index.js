// Define distance using Euclidean
function eDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

// Define KNN Algorithm
function classifyData(data, query, k) {
  const distances = [];

  // Calculate the distance between each data and query point
  for (let i = 0; i < data.length; i++) {
    const dist = eDistance(data[i].x. data[i].y, query.x, query.y);
    distances.push({ index: i, distance: dist });
  }

  // Sort the distance in ascending order
  distances.sort((a, b) => a.distance - b.distance);
}