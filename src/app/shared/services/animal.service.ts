// news.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private usersService:UsersService, private authService:AuthService) {}

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

  adoptAnimalForCurrentUser(animal: Animal) {
    return this.adoptAnimal(animal, this.authService.currentUser);
  }

  adoptAnimal(animal: Animal, user:User) {
    return this.http.delete(`${this.apiUrl}/animals/${animal.id}`)
    .subscribe(()=> {
        user.adoptedAnimals.push(animal);
        this.usersService.updateUser(user);
        console.log("animal adopted => ", animal)
    })
  }
}
