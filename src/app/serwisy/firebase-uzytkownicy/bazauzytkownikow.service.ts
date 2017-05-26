import { Injectable, Inject  } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseApp  } from 'angularfire2';

interface User {
  nazwa : string;
  e_mail: string;
  typ   : string;
}

@Injectable()
export class BazaUzytkownikowService {
  users: FirebaseListObservable<any[]>;
  user:  FirebaseObjectObservable<any>;

  constructor(private af:AngularFire, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
    this.users  = this.af.database.list('/users') as FirebaseListObservable<User[]>;
  }

  getUsers(){
    this.users  = this.af.database.list('/users') as FirebaseListObservable<User[]>;
    return this.users;
  }

  getUserDetails(key){
    this.user = this.af.database.object('/users/'+key) as FirebaseObjectObservable<User>;
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

  getUserById(id: string) {
    return this.users = this.af.database.list('/users', {
      query: {
        orderByChild: 'user_id',
        equalTo: id
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
