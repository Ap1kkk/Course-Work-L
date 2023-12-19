// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addNews(newsData: News): Observable<any> {
    return this.http.post(`${this.apiUrl}/news`, newsData);
  }

  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news`);
  }

  deleteNews(newsId: number) {
    return this.http.delete(`http://localhost:3000/news/${newsId}`)
        .subscribe(() => console.log("news deleted"));
    }

}
