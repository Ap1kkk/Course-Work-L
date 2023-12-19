import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Animal } from 'src/app/shared/models/animal.model';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css']
})
export class AddAnimalComponent {
    animalForm: FormGroup|any;

    constructor(private fb: FormBuilder, private animalService:AnimalService) {
      this.animalForm = this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
      });
    }
  
    ngOnInit(): void {}
  
    onSubmit() {
        if (this.animalForm.valid) {
            const formData = this.animalForm.value;
            let animal = new Animal(formData.name, formData.type, formData.description, formData.image);
            this.animalService.addAnimal(animal).subscribe(()=>{
                console.log('added animal', animal)
                this.animalForm.reset;
            })
      }
    }
}
