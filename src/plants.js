let plants = [
  {id: 100, name: 'sunflower'},
  {id: 101, name: 'rose'},
  {id: 102, name: 'petunia'}
];

for (let plant of plants) {
  let message = `ID: ${plant.id} Name: ${plant.name}`;

  console.log(message);
}

console.log(`List total: ${plants.length}`);