// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addAnimal(animal: Animal): Observable<any> {
    return this.http.post(`${this.apiUrl}/animals`, animal);
  }

  getAnimals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/animals`);
  }

  deleteAnimal(animalId: number) {
    return this.http.delete(`${this.apiUrl}/animals/${animalId}`)
        .subscribe(() => console.log("animal deleted"));
    }

}
