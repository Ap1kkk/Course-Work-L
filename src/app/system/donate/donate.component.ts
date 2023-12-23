import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DonateService } from 'src/app/shared/services/donate.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

    donationForm!: FormGroup

    constructor(private donateService:DonateService) { 
        this.donationForm = new FormGroup({
            'amount': new FormControl(null, [Validators.required]),
          });
    }

    submitDonation() {
        const amount = this.donationForm.value.amount;

        this.donateService.donate(amount);
        alert(`Пожертвование в размере ${amount} успешно совершено! Спасибо за ваш вклад.`);

        this.donationForm.reset();
      }
}
