import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseApp } from 'angularfire2';

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
    koniecLicytacji: Date;
    dataPublikacji: Date;
    zlecajacy: number;
    pliki: Array<File>;
    poprawneOgloszenie: boolean;
    items: FirebaseListObservable<any>;

    constructor(private af: AngularFire, @Inject(FirebaseApp) private fbApp: firebase.app.App) {
        this.dataPublikacji = new Date();
        this.zlecajacy = 1;
        this.poprawneOgloszenie = true;
        this.pliki = new Array<File>();
        this.items = af.database.list('/ogloszenia');
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

        this.dataPublikacji = new Date();

        this.items.push({
            tytul: this.tytul,
            opis: this.opis,
            czasWykonania: this.czasWykonania,
            telefon: this.telefon,
            maxCena: this.maxCena,
            lokalizacjia: this.lokalizacja,
            koniecLicytacji: this.koniecLicytacji,
            dataPublikacji: this.dataPublikacji.getFullYear() + "-" + this.dataPublikacji.getUTCMonth() + "-" + this.dataPublikacji.getUTCDay(),
            zlecajacy: 'undefined user',
            pliki: this.pliki.toString()
        });
    }

}
