import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

interface User {
  nazwa     : string;
  e_mail    : string;
  typ       : string;
}

@Injectable()
export class BazaUzytkownikowService {
  users: FirebaseListObservable<any[]>;
  user:  FirebaseObjectObservable<any>;

  constructor(private af:AngularFire) {
    this.users  = this.af.database.list('/users') as FirebaseListObservable<User[]>
  }

  getUsers(){
    return this.users;
  }

  getUserDetails(key){
    this.user = this.af.database.object('/users/'+key) as FirebaseObjectObservable<User>
    return this.user;
  }

  getUserByEmail(e_mail: string) {
    return this.users = this.af.database.list('/users', {
      query: {
        orderByChild: 'e_mail',
        equalTo: e_mail
      }
    });
  }

  addUser(user) {
    return this.users.push(user);
  }

  updateUser(key, user){
    return this.users.update(key,user);
  }

  deleteUser(key){
    return this.users.remove(key);
  }

}
