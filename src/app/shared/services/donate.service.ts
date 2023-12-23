import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';

@Injectable()
export class DonateService {

    constructor(private http: HttpClient, private usersService:UsersService, private authService:AuthService) {
    }

    donate(amount: number) {
        let currentUser = this.authService.currentUser;
        currentUser.totalDonated += amount;
        this.usersService.updateUser(currentUser);
    }
}