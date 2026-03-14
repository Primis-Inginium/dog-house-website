export type DogHouseStyle = 'Modern' | 'Classic' | 'Eco';

export interface DogHouse {
  id: string;
  name: string;
  description: string;
  price: number;
  style: DogHouseStyle;
  colors: {
    primary: string;
    secondary: string;
    roof: string;
  };
}
