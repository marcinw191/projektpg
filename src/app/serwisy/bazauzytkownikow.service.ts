import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

interface User {
  id?        : number;
  nazwa?     : string;
  e_mail?    : string;
  typ?       : string;
  id_zlecen? : Array<string>;
  id_ofert?  : Array<string>;
}

@Injectable()
export class BazaUzytkownikowService {
  users: FirebaseListObservable<any[]>;
  user:  FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af:AngularFire) {
    this.folder = 'userimages';
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
    //Create root ref
    // let storageRef = firebase.storage().ref();
    // for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
    //   let path = `/${this.folder}/${selectedFile.name}`;
    //   let iRef = storageRef.child(path);
    //   iRef.put(selectedFile).then((snapshot) => {
    //     user.image = selectedFile.name;
    //     user.path = path;
    return this.users.push(user);
    // });
    // }
  }

  updateUser(key, user){
    return this.users.update(key,user);
  }

  deleteUser(key){
    return this.users.remove(key);
  }

}
