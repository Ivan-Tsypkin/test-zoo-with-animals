import Animal from "../classes/Animal";

export default interface ZooProps {
  animals: Animal[];
  deleteAnimal: (id: number) => void;
}
