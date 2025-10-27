import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  monster: InputSignal<Monster> = input(new Monster(), {
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp /= 2;
      return value;
    },
  });
}
