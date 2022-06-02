import { useState } from "react";
import Button from "../Button/Button";
import AnimalCardProps from "../../interfaces/AnimalCardProps";

const AnimalCard: React.FC<AnimalCardProps> = ({
  animalId,
  animalImage,
  animalName,
  animalPower,
  animalPowerCount,
  feed,
  deleteAnimal,
}) => {
  const [powerCount, setPowerCount] = useState(animalPowerCount);

  const handleFeed = () => {
    feed();
    setPowerCount((prev) => prev + 1);
  };

  return (
    <div className="animal">
      <img src={animalImage} className="animal__image"></img>
      <div className="animal__info">
        <div className="animal__specs">
          <span className="animal__name">{animalName}</span>
          <span className="animal__super-power">
            {animalPower}: {powerCount}
          </span>
        </div>
        <div className="animal__control">
          <Button
            buttonType="button"
            buttonText="Feed"
            addClass="button__animal-control"
            onClick={() => handleFeed()}
          />
          <Button
            buttonType="button"
            buttonText="Free"
            addClass="button__animal-control"
            onClick={() => deleteAnimal(animalId)}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
