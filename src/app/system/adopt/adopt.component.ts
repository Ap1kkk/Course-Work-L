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
    showConfirmationModal: boolean = false;
    selectedAnimal: Animal|undefined;

    constructor(private animalService: AnimalService){
        
    }
    ngOnInit(): void {
        this.loadAnimals();
    }

    loadAnimals() {
        this.animalService.getAnimals().subscribe((animalsArray)=>{
            this.animals = animalsArray;
        })
    }

    adopt(animal:Animal) {
        console.log(animal)
        this.animalService.adoptAnimalForCurrentUser(animal)
        .add(()=>{
            this.loadAnimals();
        });
    }
    
    openConfirmationModal(animal: any) {
        this.selectedAnimal = animal;
        this.showConfirmationModal = true;
    }

    confirmAdoption() {
        if(this.selectedAnimal != undefined) {
            this.adopt(this.selectedAnimal);
            this.selectedAnimal = undefined;
        }
        this.showConfirmationModal = false;
    }

    cancelAdoption() {
        this.showConfirmationModal = false;
    }
}
