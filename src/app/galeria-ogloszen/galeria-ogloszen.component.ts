import { Component, OnInit } from '@angular/core';
import { OgloszenieMiniatura } from '../ogloszenie-miniatura/miniatura';

@Component({
  selector: 'app-galeria-ogloszen',
  templateUrl: './galeria-ogloszen.component.html',
  styleUrls: ['./galeria-ogloszen.component.css']
})
export class GaleriaOgloszenComponent implements OnInit {

  miniatury: Array<OgloszenieMiniatura> = [
    {
      zdjecie: '../assets/img/przyklady/kuchnia_do_remontu.jpeg',
      tytul: 'Zlecenie nr 1',
      nazwa_zlecenia: 'Kuchania do remontu',
      rodzaj_zlecenia: 'Remont',
      lokalizacja: 'Gdańsk, Grunwaldzka 123',
      miejscowosc: 'Gdańsk',
      ulica: 'Al. Grunwaldzka 123',
      opis: 'Do kapitalnego remontu kuchnia o wym. 2m na 3m',
      cena_max: 100,
      data_dodania: '10.03.2017',
      czas_wykonania: '5 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/lazienka_do_remontu.jpeg',
      tytul: 'Zlecenie nr 2',
      nazwa_zlecenia: 'Łazienka do remontu',
      rodzaj_zlecenia: 'Remont',
      lokalizacja: 'Gdynia, Witomińska 24',
      miejscowosc: 'Gdynia',
      ulica: 'ul. Witomińska 24',
      opis: 'Do kapitalnego remontu łazienka o wym. 1,5m na 2m',
      cena_max: 400,
      data_dodania: '15.12.2016',
      czas_wykonania: '4 dni',
      czas_licytacji: '20 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/umywalka_do_naprawy.jpg',
      tytul: 'Zlecenie nr 3',
      nazwa_zlecenia: 'Umywalka do naprawy',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Szczecin, Tuwima 13',
      miejscowosc: 'Szczecin',
      ulica: 'ul. Tuwima 13',
      opis: 'Umywalka przecieka',
      cena_max: 50,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/sypialnia_do_remontu.jpg',
      tytul: 'Zlecenie nr 4',
      nazwa_zlecenia: 'Remont sypialni',
      rodzaj_zlecenia: 'Remont',
      lokalizacja: 'Warszawa, Spacerowa 3',
      miejscowosc: 'Warszawa',
      ulica: 'ul. Spacerowa 3',
      opis: 'Do kapitalnego remontu pomieszczenie pełniące funkcję sypialni o wym. 3,5m na 2m',
      cena_max: 50,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/sufit_do_remontu.jpeg',
      tytul: 'Zlecenie nr 5',
      nazwa_zlecenia: 'Naprawa sufitu',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Kraków, Elbląska 56',
      miejscowosc: 'Kraków',
      ulica: 'ul. Elbląska 56',
      opis: 'Do naprawy sufit',
      cena_max: 50,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/podloga_do_remontu.jpg',
      tytul: 'Zlecenie nr 6',
      nazwa_zlecenia: 'Podłoga do remontu',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Bydgoszcz, Toruńska 7',
      miejscowosc: 'Bydgoszcz',
      ulica: 'ul. Toruńska 7',
      opis: 'Do ułożenia podłoga drewniana w pomieszczeniu o wym. 4m na 3m',
      cena_max: 500,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '',
      tytul: 'Zlecenie nr 7',
      nazwa_zlecenia: 'Umywalka do naprawy',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Białystok, Elizy Orzeszkowej 86',
      miejscowosc: 'Białystok',
      ulica: 'ul. Elizy Orzeszkowej 86',
      opis: 'Do naprawy umywalka : bardzo wolno spływa woda',
      cena_max: 500,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/umywalka_do_naprawy.jpg',
      tytul: 'Zlecenie nr 8',
      nazwa_zlecenia: 'Umywalka do naprawy',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Toruń, Bulwar Wiślany 34',
      miejscowosc: 'Toruń',
      ulica: 'Bulwar Wiślany 34',
      opis: '',
      cena_max: 500,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
    {
      zdjecie: '../assets/img/przyklady/umywalka_do_naprawy.jpg',
      tytul: 'Zlecenie nr 9',
      nazwa_zlecenia: 'Umywalka do naprawy',
      rodzaj_zlecenia: 'Naprawa',
      lokalizacja: 'Wrocław, Dziwna 72',
      miejscowosc: 'Wrocław',
      ulica: 'ul. Dziwna 72',
      opis: 'Do naprawy umywalka : bardzo wolno spływa woda',
      cena_max: 500,
      data_dodania: '12.02.2017',
      czas_wykonania: '1 dni',
      czas_licytacji: '10 dni'
    },
  ];
  orientacja: string = 'lista';

  zmienOrientacje() {
    if(this.orientacja == 'lista')
      this.orientacja = 'galeria';
    else
      this.orientacja = 'lista';
  }
  ngOnInit() {
  }

}
