import { useState } from "react";
import Button from "../Button/Button";
import Zoo from "../Zoo/Zoo";
import Animal from "../../classes/Animal";
import cheetahImage from "../../images/cheetah.jpg";
import giraphImage from "../../images/giraph.jpg";
import hippoImage from "../../images/hippo.jpg";

const App: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  function randomInteger(min: number, max: number) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function handleCreateAnimal() {
    const animalRandNumber = randomInteger(1, 3);
    const animalRandPower = randomInteger(1, 5);
    let animalName = "";
    let animalImage = "";
    let powerName = "";
    switch (animalRandNumber) {
      case 1:
        animalName = "Cheetah";
        animalImage = cheetahImage;
        powerName = "Speed";
        break;
      case 2:
        animalName = "Giraph";
        animalImage = giraphImage;
        powerName = "Height";
        break;
      case 3:
        animalName = "Hippo";
        animalImage = hippoImage;
        powerName = "Weight";
        break;
    }

    const newAnimal = new Animal(
      animalName,
      powerName,
      animalRandPower,
      animalImage
    );

    return newAnimal;
  }

  function addAnimalToZoo() {
    const newAnimal = handleCreateAnimal();
    setAnimals((prev) => [...prev, newAnimal]);
  }

  function handleAnimalDelete(id: number) {
    const newZoo = animals.filter((a) => a.animalId !== id);
    setAnimals(newZoo);
  }

  return (
    <div className="page">
      <div className="main">
        <Button
          buttonText="Catch"
          buttonType="button"
          addClass="button__catch"
          onClick={() => {
            addAnimalToZoo();
          }}
        />
        <Zoo animals={animals} deleteAnimal={handleAnimalDelete} />
      </div>
    </div>
  );
};

export default App;
