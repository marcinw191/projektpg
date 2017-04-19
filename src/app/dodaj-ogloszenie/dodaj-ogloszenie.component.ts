import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, FirebaseApp } from 'angularfire2';

@Component({
    selector: 'app-dodaj-ogloszenie',
    templateUrl: './dodaj-ogloszenie.component.html',
    styleUrls: ['./dodaj-ogloszenie.component.css']
})
export class DodajOgloszenieComponent implements OnInit {
    tytul: string;
    opis: string;
    czasWykonania: number;
    telefon: number;
    maxCena: number;
    lokalizacja: string;
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

    constructor(private af: AngularFire, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
        this.dataPublikacji = new Date();
        this.zlecajacy = 1;
        this.poprawneOgloszenie = true;
        this.pliki = new Array<File>();
        this.items = af.database.list('/ogloszenia', {
          query: {
            limitToLast: 1
          }});
        this.zakonczone = false;
        this.statusDodawania = {
            status: "",
            text: ""
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
          var ostatniNumerOgloszenia = ostatnieOgloszenie[ostatniKlucz].numerOgloszenia;

          _this.dataPublikacji = new Date();
          var __this = _this;

          _this.items.push({
            numerOgloszenia: ostatniNumerOgloszenia + 1,
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
            zlecajacy: 'undefined user',
          }).then(function(data){
              var key = data.key;

              if(_this.pliki.length > 0)
              {
                __this.saveFiles(key);
                __this.updateFileList(key);
                __this.zakonczone = true;
                __this.statusDodawania.status = "success";
                __this.statusDodawania.text = "Dodawania ogłoszenia zakończone poprawnie (nr ref: " + key + ")";
              }
              else
              {
                __this.zakonczone = true;
                __this.statusDodawania.status = "success";
                __this.statusDodawania.text = "Dodawania ogłoszenia zakończone poprawnie (nr ref: " + key + ")";
              }
              _this.clearData();

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
      var ogloszenie =  this.af.database.object('/ogloszenia/' + ogloszenie_id);
      var sciezkiDoPlikow = [];
      for (let i = 0; i < this.pliki.length; i++)
      {
        var pictureExt = this.pliki[i].type.split("/")[1];
        var picturePath = ogloszenie_id + "/img" + i + "." + pictureExt;
        sciezkiDoPlikow.push(picturePath);
      }
      ogloszenie.update({pliki: sciezkiDoPlikow});
    }

}
