function escapePyramidHead(room) {
    const size = room.length;
    const moves = [
      [0, 1],  
      [1, 0],  
      [0, -1], 
      [-1, 0], 
    ];
  
    let startPos = null;
    let targetPos = null;
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < room[row].length; col++) {
        if (room[row][col] === '▲') {
          startPos = [row, col];
        } else if (room[row][col] === 'T') {
          targetPos = [row, col];
        }
      }
    }
  
    if (!startPos || !targetPos) return -1;
  
    const queue = [[...startPos, 0]]; 
    const visited = Array.from({ length: size }, () => Array(room[0].length).fill(false));
    visited[startPos[0]][startPos[1]] = true;
  
    while (queue.length > 0) {
      const [x, y, steps] = queue.shift();
  
      if (x === targetPos[0] && y === targetPos[1]) {
        return steps;
      }
  
      for (const [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;
  
        if (
          newX >= 0 && newX < size &&
          newY >= 0 && newY < room[0].length &&
          room[newX][newY] !== '#' && !visited[newX][newY]
        ) {
          visited[newX][newY] = true;
          queue.push([newX, newY, steps + 1]);
        }
      }
    }
  
    return -1;
  }
  