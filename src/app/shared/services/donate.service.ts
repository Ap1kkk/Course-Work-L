import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class DonateService {

    constructor(private http: HttpClient) {
    }

}