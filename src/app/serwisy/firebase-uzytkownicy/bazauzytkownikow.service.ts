import { Injectable, Inject  } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database'

interface User {
  nazwa : string;
  e_mail: string;
  typ   : string;
}

@Injectable()
export class BazaUzytkownikowService {
  users: FirebaseListObservable<any[]>;
  user:  FirebaseObjectObservable<any>;

  constructor(private db:AngularFireDatabase, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
    this.users  = this.db.list('/users') as FirebaseListObservable<User[]>;
  }

  getUsers(){
    this.users  = this.db.list('/users') as FirebaseListObservable<User[]>;
    return this.users;
  }

  getUserDetails(key){
    this.user = this.db.object('/users/'+key) as FirebaseObjectObservable<User>;
    return this.user;
  }

  getUserByEmail(e_mail: string) {
    return this.users = this.db.list('/users', {
      query: {
        orderByChild: 'e_mail',
        equalTo: e_mail
      }
    });
  }

  getUserById(id: string) {
    return this.users = this.db.list('/users', {
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
