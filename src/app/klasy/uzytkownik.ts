export class Uzytkownik {
  public nazwa: string;
  public email: string;
  public typ: string;
  public ulica: string;
  public nr_bud: string;
  public miejscowosc: string;
  public kod: string;
  public zdjecie: string;
  public id: string;
  public user_id: string;

  constructor(nazwa = "",
              email = "",
              typ = "",
              ulica = "",
              nr_bud = "",
              miejscowosc = "",
              kod = "",
              zdjecie = "",
              id = "",
              user_id = ""
  ) {  }

  public zaladujZBazy(user: any) {
    this.nazwa = user.nazwa;
    this.email = user.e_mail;
    this.typ = user.typ;
    this.ulica = user.ulica;
    this.nr_bud = user.nr_bud;
    this.miejscowosc = user.miejscowosc;
    this.kod = user.kod;
    this.zdjecie = user.zdjecie;
    this.id = user.$key;
    this.user_id = user.user_id;
  }

}
