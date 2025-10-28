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
    imageUrl: './assets/img/plant.png',
    color: 'green',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: './assets/img/electric.jpg',
    color: 'yellow',
  },
  [MonsterType.WATER]: {
    imageUrl: './assets/img/water.png',
    color: 'blue',
  },
  [MonsterType.FIRE]: {
    imageUrl: './assets/img/fire.png',
    color: 'red',
  },
};
