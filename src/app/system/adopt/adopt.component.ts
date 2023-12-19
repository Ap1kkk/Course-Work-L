import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit{
    animals!: Animal[];

    constructor(private animalService: AnimalService){
        
    }
    ngOnInit(): void {
        this.animalService.getAnimals().subscribe((animalsArray)=>{
            this.animals = animalsArray;
        })
    }
}
