import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user.model';
import { ChatApiService } from '../services/chat-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public users : User[] = [];

  constructor(
    public router : Router,
    public alertCtrl: AlertController,
    public api: ChatApiService) {
    
    this.users = this.api.getUsers();
  }

  search() {
    this.users = this.api.getUsers().filter((user) => {​
      let name = user.name.toLowerCase();​
      return name.startsWith(user.name);​
  });
  }

  goToChat(formValue : NgForm) {
    let userToSend : User = new User(formValue.value.login, formValue.value.email);

    this.router.navigate(['/chat'], { state : userToSend });
  }

}
