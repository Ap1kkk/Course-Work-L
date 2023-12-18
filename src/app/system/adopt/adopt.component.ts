import { Component } from '@angular/core';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent {
  animals = [
    { id: 1, name: 'Животное 1', description: 'Описание животного 1', imageUrl: 'animal1.jpg' },
    { id: 2, name: 'Животное 2', description: 'Описание животного 2', imageUrl: 'animal2.jpg' },
    // Добавьте больше данных о животных по мере необходимости
  ];
}
