const wordSearch = (letters, word) => {
  const transposedMatrix = [];

  if (letters.length === 0 || letters[0].length === 0) {
    return false;
  }
  const rows = letters.length;
  const columns = letters[0].length;
 
  for (let col = 0; col < columns; col++) {
    const newRow = [];
    for (let row = 0; row < rows; row++) {
      newRow.push(letters[row][col]);
                  
    }
    transposedMatrix.push(newRow);
  }
  const horizontalJoin = letters.map(ls => ls.join(''));

  const verticalJoin = transposedMatrix.map(ls => ls.join(''));
   
  for (const line of horizontalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }
  for (const line of verticalJoin) {
    if (line.includes(word)) {
      return true;
    }
  }

  return false;

};

module.exports = wordSearch;