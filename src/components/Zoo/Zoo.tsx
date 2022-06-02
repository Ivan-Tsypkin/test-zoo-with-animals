import AnimalCard from "../AnimalCard/AnimalCard";
import Animal from "../../classes/Animal";
import ZooProps from "../../interfaces/ZooProps";

const Zoo: React.FC<ZooProps> = ({ animals, deleteAnimal }) => {
  return (
    <div className="zoo">
      <header className="zoo__header">
        <h1 className="zoo__title">Zoo</h1>
      </header>
      <div className="zoo__animals">
        {animals.map((animal: Animal) => {
          return (
            <AnimalCard
              key={animal.animalId}
              animalId={animal.animalId}
              animalImage={animal.image}
              animalName={animal.animalName}
              animalPower={animal.powerName}
              animalPowerCount={animal.powerCount}
              feed={animal.feed.bind(animal)}
              deleteAnimal={deleteAnimal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Zoo;
