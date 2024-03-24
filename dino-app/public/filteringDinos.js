import fs from 'fs';

fs.readFile('dinosaur_data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const dinos = JSON.parse(data);

  const incompleteDinos = dinos.filter((dino) => {
    return Object.values(dino).some((value) => value === 'N/A');
  });

  const filteredData = JSON.stringify(incompleteDinos, null, 2);

  fs.writeFile('incomplete_dinos.json', filteredData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('Filtered data saved to incomplete_dinos.json');
  });
});
