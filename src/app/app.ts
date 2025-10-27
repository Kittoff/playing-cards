import { Component, computed, effect, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`,
})
export class App {
  monsters!: Monster[];
  count: number = 0;
  search = '';

  selectedMonsterIndex = signal(0);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  });

  constructor() {
    effect(() => {
      console.log(this.selectedMonster());
    });
    this.monsters = [];
    const monster1 = new Monster();
    monster1.name = 'Dragon';
    monster1.hp = 60;
    monster1.figureCaption = 'N°002 Dragon';
    this.monsters.push(monster1);
    const monster2 = new Monster();
    monster2.name = 'Car';
    monster2.hp = 60;
    monster2.figureCaption = 'N°003 Car';
    monster2.image = 'assets/img/eclair.png';
    monster2.type = MonsterType.WATER;
    this.monsters.push(monster2);
  }
  increaseCount() {
    this.count++;
  }

  toggleMonster() {
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length);
  }
}
