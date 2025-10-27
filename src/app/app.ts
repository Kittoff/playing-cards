import { Component } from '@angular/core';
import { PlayingCard } from './components/playing-card/playing-card';
import { Monster } from './models/monster.model';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCard, SearchBar],
  templateUrl: './app.component.html',
  styleUrl: `./app.component.css`,
})
export class App {
  monster1!: Monster;
  count: number = 0;
  search = '';
  constructor() {
    this.monster1 = new Monster();
    this.monster1.name = 'Dragon';
    this.monster1.hp = 60;
    this.monster1.figureCaption = 'N°002 Dragon';
  }
  increaseCount() {
    this.count++;
  }
}
