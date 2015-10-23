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

///////////

class Car {
    constructor(make) { 
        this.make = make;
      this.currentSpeed = 25;
    }

    printCurrentSpeed(){
          console.log(this.make + ' is going ' + this.currentSpeed + ' kph.');
    }
}

class RaceCar extends Car { 
    constructor(make, topSpeed) {
        super(make); 
        this.topSpeed = topSpeed;
    }

    goFast(){
          this.currentSpeed = this.topSpeed;
    }
}

let stang = new RaceCar('Ford Focus', 150);

stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();


//////

let x = [0,1,2];
x.map(x => console.log(x * x)); 