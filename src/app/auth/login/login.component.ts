import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/shared/models/user.model';
import { Message } from 'src/app/shared/models/message.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


const EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup | any;
  message: Message | any;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.message = new Message('danger', '');

    this.route.queryParams.subscribe((params: Params) => {
      if (params['canLogin']) {
        this.showMessage({
          text: 'Теперь вы можете зайти в систему',
          type: 'success'
        });
      }
    });

    this.form = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(EMAIL_PATTERN)
      ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  onSubmit() {
    console.log(this.form);
    const formData = this.form.value;

    this.usersService.getUser(formData.email).subscribe((user: User) => {
      if (user) {
        if (user.password === formData.password) {
          this.authService.login(user);
          this.router.navigate(['/system/home']);
        } else {
          this.showMessage({
            text: 'Пароль не верный',
            type: 'danger'
          });
        }
      } else {
        this.showMessage({
          text: 'Такого пользователя не существует',
          type: 'danger'
        });
      }
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
