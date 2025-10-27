export enum MonsterType {
  PLANT = 'Plant',
  ELECTRIC = 'Electric',
  WATER = 'Water',
  FIRE = 'Fire',
}

export interface ImonsterPropserties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: ImonsterPropserties } = {
  [MonsterType.PLANT]: {
    imageUrl: './assets/plant.png',
    color: 'green',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: './assets/electric.jpg',
    color: 'yellow',
  },
  [MonsterType.WATER]: {
    imageUrl: './assets/water.png',
    color: 'blue',
  },
  [MonsterType.FIRE]: {
    imageUrl: './assets/fire.png',
    color: 'red',
  },
};
