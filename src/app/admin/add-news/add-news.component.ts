import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/shared/models/news.model';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
    newsForm: FormGroup|any;

    constructor(private fb: FormBuilder, private newsService: NewsService) {
      this.newsForm = this.fb.group({
        title: ['', Validators.required],
        date: ['', Validators.required,],
        content: ['', Validators.required],
        image: ['', Validators.required],
      });
    }
  
    onSubmit() {
      if (this.newsForm.valid) {
        const newsData = this.newsForm.value;
        let news = new News(newsData.title, newsData.date, newsData.content, newsData.image);

        this.newsService.addNews(news).subscribe(
          response => {
            console.log('News added successfully:', response);
            this.newsForm.reset();
          },
          error => {
            console.error('Error adding news:', error);
          }
        );
      }
    }
}
