import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  private users: User[] = [];

  constructor(public router : Router) {

    console.log(this.router.getCurrentNavigation().extras.state)
    this.users = [
      { name: 'Adrien', email: 'adrien.vossough@gmail.com' },
      { name: 'Math', email: 'ba@gmail.com' },
      { name: 'Hervé', email: 'ab@gmail.com' }
    ];
  }

  getUsers() {
    return this.users;
  }
}
