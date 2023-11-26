import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms'; 
import { HEROES } from '../mock-heroes';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,HeroesComponent,FormsModule,NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'

})
export class HeroesComponent {
 heroes = HEROES;

}
