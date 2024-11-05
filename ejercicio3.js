function findSafestPath(dream) {
    const height = dream.length;
    const width = dream[0].length;
  
    const risk = Array.from({ length: height }, () => Array(width).fill(0));
  
    risk[0][0] = dream[0][0];
  
    for (let x = 1; x < width; x++) {
      risk[0][x] = risk[0][x - 1] + dream[0][x];
    }
  
    for (let y = 1; y < height; y++) {
      risk[y][0] = risk[y - 1][0] + dream[y][0];
    }
  
    for (let y = 1; y < height; y++) {
      for (let x = 1; x < width; x++) {
        risk[y][x] = dream[y][x] + Math.min(risk[y - 1][x], risk[y][x - 1]);
      }
    }
  
    return risk[height - 1][width - 1];
  }
  