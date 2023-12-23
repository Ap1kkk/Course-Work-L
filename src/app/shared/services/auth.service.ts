import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { UsersService } from "./users.service";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

    private userChanged = new EventEmitter<User>();

    private emitUserChangedEvent(user:User) {
        this.userChanged.emit(user);
    }
    getUserChangedEmitter() {
        return this.userChanged;
    }


    constructor(private usersService: UsersService)
    {
        this.usersService.getUserChangedEmitter()
        .subscribe(user => {
            this.rewriteUser(user);
        })
    }

    private rewriteUser(user:User) {
        window.localStorage.clear();
        window.localStorage.setItem('user', JSON.stringify(user));
        this.emitUserChangedEvent(user)
    }

    public get currentUser(): User {
        return JSON.parse(window.localStorage.getItem("user")!);
    }
    
    updateCurrentUser() {
        let request = this.usersService.getUser(this.currentUser.email);
        request.subscribe((user:User)=>{
            this.rewriteUser(user);
        });
        return request;
    }

    login(user:User) {
      window.localStorage.setItem('user', JSON.stringify(user));
      this.userChanged.emit(this.currentUser);
      console.log(this.currentUser);
    }
  
    logout() {
        window.localStorage.clear();
    }
  
    isAuthenticated(): boolean {
      if(this.currentUser)
      {
        return true;
      }
      return false;
    }
    
    isUserAdmin(): boolean
    {
        if(this.isAuthenticated())
            return this.currentUser.isAdmin;
        return false;
    }
  }