import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
    newsItems = [
        {
          title: 'Заголовок новости 1',
          date: new Date('2023-01-01'),
          content: 'Текст новости 1...',
          image: 'url_to_image_1.jpg' // Добавьте ссылку на изображение
        },
        {
          title: 'Заголовок новости 2',
          date: new Date('2023-01-05'),
          content: 'Текст новости 2...',
          image: 'url_to_image_2.jpg' // Добавьте ссылку на изображение
        },
        // Добавьте другие новости по мере необходимости
      ];
}
