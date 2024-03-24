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

  const incompleteDinos1 = incompleteDinos.slice(0, 145);
  const incompleteDinos2 = incompleteDinos.slice(145);

  const filteredData1 = JSON.stringify(incompleteDinos1, null, 2);
  const filteredData2 = JSON.stringify(incompleteDinos2, null, 2);

  fs.writeFile('incomplete_dinos1.json', filteredData1, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(
      `Filtered data saved to incomplete_dinos1.json (${incompleteDinos1.length} dinosaurs found)`
    );
  });

  fs.writeFile('incomplete_dinos2.json', filteredData2, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log(
      `Filtered data saved to incomplete_dinos2.json (${incompleteDinos2.length} dinosaurs found)`
    );
  });
});
