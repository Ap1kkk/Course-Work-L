import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent {

    donationForm!: FormGroup

    constructor() { 
        this.donationForm = new FormGroup({
            'amount': new FormControl(null, [Validators.required]),
            'message': new FormControl(null),
          });
    }

    submitDonation() {
        // Здесь можно добавить логику для обработки платежа
        const amount = this.donationForm.value.amount;
        const message = this.donationForm.value.message;
    
        // Симулируем успешное завершение оплаты
        alert(`Пожертвование в размере ${amount} успешно совершено! Спасибо за ваш вклад.`);
        
        // Очистим форму после успешного пожертвования
        this.donationForm.reset();
      }
}
