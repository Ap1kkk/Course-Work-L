import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EMAIL_PATTERN } from 'src/app/shared/models/email.pattern';
import { Message } from 'src/app/shared/models/message.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
    user:User|any;
    form: FormGroup|any
    message: Message|any
    
    editMode = false;
  
    subscription: Subscription;

    constructor(private authService: AuthService, private usersService: UsersService, private router: Router)
    {
        this.user = this.authService.currentUser;

        this.subscription = authService.getUserChangedEmitter()
        .subscribe(user => this.user = user)

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.authService.updateCurrentUser().subscribe((user:User)=>{
            this.user = user;
        })

        this.message = new Message('danger', '');

        this.form = new FormGroup({
            'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
            'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]),
            'totalDonated': new FormControl(null, [Validators.required]),
          });
          this.form.value.name = this.user.name;
          this.form.value.email = this.user.email;
          this.form.value.totalDonated = this.user.totalDonated;
    }


    toggleEditMode() {
      this.editMode = !this.editMode;
    }
  
    saveChanges() {
      this.toggleEditMode();
    }
  
    cancelEdit() {
      this.toggleEditMode();
    }

    logout()
    {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    
    deleteAccount()
    {
        this.usersService.deleteUser(this.user);
        this.logout();
    }

    onSubmit()
    {
        let formData = this.form.value;

        if(formData.name == null || formData.name == '')
        {
            formData.name = this.user.name;
        }
        if(formData.email == null || formData.email == '')
        {
            formData.email = this.user.email;
        }
        if(formData.password == null || formData.password == '')
        {
            formData.password = this.user.password;
        }
        if(formData.totalDonated == null)
        {
            formData.totalDonated = this.user.totalDonated;
        }

        let re = new RegExp(EMAIL_PATTERN);
        if(!re.test(formData.email))
        {
            console.log('invalid email')
            this.showMessage({
                text: 'Почта введена неверно',
                type: 'danger'
              });
    
            return;
        }

        console.log(formData)

        console.log("new user id", this.user.id)
        let newUser = new User(formData.email, this.user.password, formData.name, formData.totalDonated, this.user.isAdmin, this.user.id); 
        this.usersService.getUser(formData.email)
        .subscribe((user: User) => {
            if (user) {
                if(this.user.email !== user.email)
                {
                    console.log('already exist')
                    this.showMessage({
                        text: 'Пользователь с такой почтой уже существует',
                        type: 'danger'
                      });
                    return;
                }
            } 
            this.changeUser(newUser);
            this.saveChanges();
          });   
    }

    private changeUser(newUser: User)
    {
        const formData = this.form.value; 
        this.usersService.updateUser(newUser);
    }

    private showMessage(message:Message){
        this.message = message;
        window.setTimeout(()=>{
            this.message.text ='';
        }, 5000);
      }
}
