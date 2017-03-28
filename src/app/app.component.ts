import { Component } from '@angular/core';
import { OgloszenieMiniatura } from './ogloszenie-miniatura/miniatura';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  miniatury: Array<OgloszenieMiniatura> = [
    {
      zdjecie: '../assets/img/przyklady/kuchnia_do_remontu.jpeg',
      tytul: 'Zlecenie1',
      nazwa_zlecenia: 'Kuchania do remontu',
      rodzaj_zlecenia: 'Remont',
      lokalizacja: 'Gdańsk, Kartuska 12',
      opis: 'Do kapitalnego remontu kuchnia o wym. 2m na 3m',
      cena_max: 100,
      data_dodania: '10.03.2017',
      czas_wykonania: '5 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/lazienka_do_remontu.jpeg',
      tytul: 'Zlecenie2',
      nazwa_zlecenia: 'Łazienka do remontu',
      rodzaj_zlecenia: 'Remont',
      lokalizacja: 'Gdańsk, Grunwaldzka 450',
      opis: 'Do kapitalnego remontu łazienka o wym. 1,5m na 2m',
      cena_max: 400,
      data_dodania: '15.12.2016',
      czas_wykonania: '4 dni',
      czas_licytacji: '20 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/umywalka_do_naprawy.jpg',
      tytul: 'Zlecenie3',
      nazwa_zlecenia: 'Umywalka do naprawy',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Gdańsk, Fiołkowa 122',
      opis: 'Umywalka przecieka',
      cena_max: 50,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
  ]
}
