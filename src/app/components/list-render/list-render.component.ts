import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Turca', type: 'dod', age: 4 },
    { name: 'Tom', type: 'cat', age: 10 },
    { name: 'Frida', type: 'dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10,
  };

  animalDetails = '';

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}