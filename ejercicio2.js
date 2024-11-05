function battleHorde(zombies, humans) {
    let zTotal = 0;
    let hTotal = 0;
  
    for (let round = 0; round < zombies.length; round++) {
      const zPower = parseInt(zombies[round], 10) + zTotal;
      const hPower = parseInt(humans[round], 10) + hTotal;
  
      if (zPower > hPower) {
        zTotal = zPower - hPower;
        hTotal = 0;
      } else if (hPower > zPower) {
        hTotal = hPower - zPower;
        zTotal = 0;
      } else {
        zTotal = 0;
        hTotal = 0;
      }
    }
  
    if (zTotal > hTotal) {
      return `${zTotal}z`;
    } else if (hTotal > zTotal) {
      return `${hTotal}h`;
    } else {
      return 'x';
    }
  }
  