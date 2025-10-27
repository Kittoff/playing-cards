import { MonsterType } from '../utils/monster.utils';

export class Monster {
  name: string = 'Monster';
  image: string = './assets/img/pika.png';
  color: string = 'red';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 60;
  figureCaption: string = 'N°001 Monster';
  attackName: string = 'Geo Impact';
  attackStrenght: number = 80;
  attackDescription: string =
    'A powerful attack that causes massive earth-shaking damage to all enemies.';
}
