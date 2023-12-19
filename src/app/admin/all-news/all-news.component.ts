import { Component } from '@angular/core';
import { News } from 'src/app/shared/models/news.model';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent {
    newsItems!: News[];

    constructor(private newsService: NewsService){

    }

    ngOnInit(): void {
        this.loadNews();
    }

    loadNews(){
        this.newsService.getNews().subscribe((news: News[])=>{
            this.newsItems = news
            console.log(news);
        })
    }

    editNews(newsId: number|undefined) {

      }
    
      deleteNews(newsId: number|undefined) {
        if(newsId == undefined)
        {
            alert("News Id is undefined")
            return;
        }
        this.newsService.deleteNews(newsId);
        this.loadNews();
      }
      
}
