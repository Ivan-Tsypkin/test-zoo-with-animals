export default interface AnimalCardProps {
  animalId: number;
  animalImage: string;
  animalName: string;
  animalPower: string;
  animalPowerCount: number;
  feed: () => void;
  deleteAnimal: (id: number) => void;
}
