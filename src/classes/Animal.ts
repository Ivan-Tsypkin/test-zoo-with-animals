export default class Animal {
  animalId: number;

  animalName: string;

  powerName: string;

  powerCount: number;

  image: string;

  constructor(
    animalName: string,
    powerName: string,
    powerCount: number,
    image: string
  ) {
    this.animalId = Date.now();
    this.animalName = animalName;
    this.powerName = powerName;
    this.powerCount = powerCount;
    this.image = image;
  }

  feed() {
    this.powerCount++;
  }
}
