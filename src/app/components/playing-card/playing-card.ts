import {
  Component,
  computed,
  input,
  Input,
  InputSignal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { MonsterTypeProperties } from '../../utils/monster.utils';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css',
})
export class PlayingCard {
  monster = input(new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(() => {
    return MonsterTypeProperties[this.monster().type].color;
  });
}
