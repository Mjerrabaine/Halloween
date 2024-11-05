function findTheKiller(whisper, suspects) {
    whisper = whisper.toLowerCase();
  
    let potentialMatches = [];
  
    for (let index = 0; index < suspects.length; index++) {
      const suspectName = suspects[index].toLowerCase();
      let isPotential = true;
  
      if (whisper.endsWith('$')) {
        if (suspectName.length !== whisper.length - 1) {
          continue;
        }
      } else if (suspectName.length < whisper.length) {
        continue;
      }
  
      for (let charIndex = 0; charIndex < whisper.length; charIndex++) {
        if (whisper[charIndex] !== '~' && whisper[charIndex] !== '$' && whisper[charIndex] !== suspectName[charIndex]) {
          isPotential = false;
          break;
        }
      }
  
      if (isPotential) {
        potentialMatches.push(suspects[index]);
      }
    }
  
    if (potentialMatches.length === 1) {
      return potentialMatches[0];
    } else if (potentialMatches.length > 1) {
      return potentialMatches.join(',');
    } else {
      return '';
    }
  }
  