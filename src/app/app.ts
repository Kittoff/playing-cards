import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PlayingCard, SearchBar],
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`,
})
export class App {
  monsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter((monster) => monster.name.includes(this.search()));
  });

  selectedMonsterIndex = signal(0);
  // selectedMonster = computed(() => {
  //   return this.monsters[this.selectedMonsterIndex()];
  // });

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
}
