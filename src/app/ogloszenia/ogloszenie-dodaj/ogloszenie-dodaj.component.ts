import { Component, OnInit, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase/app'; // for typings
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AuthService } from '../../serwisy/auth0/auth.service'

@Component({
  selector: 'app-dodaj-ogloszenie',
  templateUrl: './ogloszenie-dodaj.component.html',
  styleUrls: ['./ogloszenie-dodaj.component.css']
})

export class DodajOgloszenieComponent implements OnInit {
  tytul: string;
  opis: string;
  czasWykonania: number;
  telefon: number;
  maxCena: number;
  ulica: string;
  ulica_numer: number;
  miasto: string;
  koniecLicytacji: Date;
  dataPublikacji: Date;
  zlecajacy: number;
  pliki: Array<File>;
  poprawneOgloszenie: boolean;
  zakonczone: boolean;
  statusDodawania: any;
  items: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase, private fbApp: FirebaseApp, private authService: AuthService) {
    this.dataPublikacji = new Date();
    this.zlecajacy = 1;
    this.poprawneOgloszenie = true;
    this.pliki = new Array<File>();
    this.items = db.list('/ogloszenia', {
      query: {
        limitToLast: 1
      }});
    this.zakonczone = false;
    this.statusDodawania = {
      status: "",
      text: "",
      id: 0
    }
  }

  ngOnInit() {
  }

  getFiles(event) {
    for (let i = 0; i < event.target.files.length; i++)
    {
      if(this.pliki.length == 5)
        break;
      this.pliki.push(event.target.files[i]);
    }
  }

  checkFileSize(size: number): boolean {
    return size <= 300000;
  }

  checkFileType(type: string): boolean {
    return (type == "image/png" || type == "image/jpeg")
  }

  checkFilesValidity() {
    for(let plik of this.pliki)
    {
      if(!this.checkFileSize(plik.size) || !this.checkFileType(plik.type))
      {
        this.poprawneOgloszenie = false;
        break;
      }
      this.poprawneOgloszenie = true;
    }
  }

  removeFile(idx: number) {
    this.pliki.splice(idx, 1);

  }

  clearData() {
    for (let prop of Object.keys(this))
    {
      if (typeof this[prop] == 'string' || typeof this[prop] == 'number')
        this[prop] = "";
    }
    this.pliki = new Array<File>();
  }

  save(){

    var _this = this;

    this.fbApp.database().ref('/ogloszenia').limitToLast(1).once('value').then(function (snapshot) {
      var ostatnieOgloszenie = snapshot.val();
      var ostatniKlucz = Object.keys(ostatnieOgloszenie)[0];
      var biezacyNumerOgloszenia = ostatnieOgloszenie[ostatniKlucz].numerOgloszenia + 1;

      _this.dataPublikacji = new Date();
      var __this = _this;

      _this.items.push({
        numerOgloszenia: biezacyNumerOgloszenia,
        tytul: _this.tytul,
        opis: _this.opis,
        czasWykonania: _this.czasWykonania,
        telefon: _this.telefon,
        maxCena: _this.maxCena,
        ulica: _this.ulica,
        ulica_numer: _this.ulica_numer,
        miasto: _this.miasto,
        koniecLicytacji: new Date(_this.koniecLicytacji).toISOString(),
        dataPublikacji: _this.dataPublikacji.toISOString(),
        zlecajacy: _this.authService.getProfileAuth().sub,
      }).then(function(data){
          var key = data.key;

          if(__this.pliki.length > 0)
          {
            __this.saveFiles(key);
            __this.updateFileList(key);
            __this.zakonczone = true;
            __this.statusDodawania.status = "success";
            __this.statusDodawania.text = "";
            __this.statusDodawania.id = biezacyNumerOgloszenia;
          }
          else
          {
            __this.updateFileList(key);
            __this.zakonczone = true;
            __this.statusDodawania.status = "success";
            __this.statusDodawania.text = "";
            __this.statusDodawania.id = biezacyNumerOgloszenia;
          }
          __this.clearData();

        }
      ).catch(function(){
        __this.zakonczone = true;
        __this.statusDodawania.status = "danger";
        __this.statusDodawania.text = "Dodawanie ogłoszenia nie powiodło się. Spróbuj ponownie za chwilę.";
      });
    });

  }

  saveFiles(ogloszenie_id: string) {
    var storageRef = this.fbApp.storage().ref();
    for (let i = 0; i < this.pliki.length; i++)
    {
      var pictureExt = this.pliki[i].type.split("/")[1];
      var pictureRef = storageRef.child(ogloszenie_id + "/img" + i + "." + pictureExt);
      pictureRef.put(this.pliki[i]);
    }
  }

  updateFileList(ogloszenie_id: string) {
    var ogloszenie =  this.db.object('/ogloszenia/' + ogloszenie_id);
    var sciezkiDoPlikow = [];
    if(this.pliki.length > 0)
    {
      for (let i = 0; i < this.pliki.length; i++)
      {
        var pictureExt = this.pliki[i].type.split("/")[1];
        var picturePath = ogloszenie_id + "/img" + i + "." + pictureExt;
        sciezkiDoPlikow.push(picturePath);
      }
      ogloszenie.update({pliki: sciezkiDoPlikow});
    }
    else
    {
      ogloszenie.update({pliki: ""});
    }
  }

}
