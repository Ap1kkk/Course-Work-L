import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
    newsItems!: News[];

    constructor(private newsService: NewsService){

    }

    ngOnInit(): void {
        this.newsService.getNews().subscribe((news: News[])=>{
            this.newsItems = news
            console.log(news);
        })
    }

      
}
