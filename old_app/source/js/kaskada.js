
// tablica z przykładowymi linkami do zdjęć
var Tab_linkow = [
    'img/przyklady/kuchnia_do_remontu.jpeg',
    'img/przyklady/lazienka_do_remontu.jpeg',
    'img/przyklady/podloga_do_remontu.jpg',
    'img/przyklady/sypialnia_do_remontu.jpg',
    'img/przyklady/sufit_do_remontu.jpeg',
    'img/przyklady/umywalka_do_naprawy.jpg',
    'img/przyklady/umywalka_do_naprawy.jpg',
    'img/przyklady/umywalka_do_naprawy.jpg'
];

// tablica z przykładowymi opisami
var Tab_opisy = [
    'Do kapitalnego remontu kuchnia o wym. 2m na 3m',
    'Do kapitalnego remontu łazienka o wym. 1,5m na 2m',
    'Do ułożenia podłoga drewniana w pomieszczeniu o wym. 4m na 3m',
    'Do kapitalnego remontu pomieszczenie pełniące funkcję sypialni o wym. 3,5m na 2m',
    'Do naprawy sufit.',
    'Do naprawy umywalka : bardzo wolno spływa woda',
    'Do naprawy umywalka : bardzo wolno spływa woda',
    'Do naprawy umywalka : bardzo wolno spływa woda'
];

function WidokGaleria() {
    var widok = "";
    widok = widok + '<span>Widok zleceń :</span>';
    widok = widok + '<button id="galeria" value="active" title="Galeria" onclick="WidokGaleria()"><img src="img/kafelki_czerwone.png" alt="HTML5"></button>';
    widok = widok + '<button id="lista" value="noactive" title="Lista" onclick="WidokLista()"><img src="img/lista_szara.png" alt="HTML5"></button>';
    document.getElementById('widok').innerHTML = widok;
    Body();
}
function WidokLista() {
    var widok = "";
    widok = widok + '<span>Widok zleceń :</span>';
    widok = widok + '<button id="galeria" value="noactive" title="Galeria" onclick="WidokGaleria()"><img src="img/kafelki_szare.png" alt="HTML5"></button>';
    widok = widok + '<button id="lista" value="active" title="Lista" onclick="WidokLista()"><img src="img/lista_czerwona.png" alt="HTML5"></button>';
    document.getElementById('widok').innerHTML = widok;
    Body();
}
function Body() {
    // il_zlecen - parametr określający ilość wyświetlanych zleceń na stronie
    // ze względu na RWD zalecane aby była to wielorotność 6
    var ogloszenie = ""; //zawartość html dla części <div id="main">
    var il_zlecen = document.getElementById("na_stronie").value;
    var widok = document.getElementById("galeria").value;
    // pętla wykonywana określoną przez parametr "il_zlecen" ilość razy;
    // przy okazji każde zlecenie ma nadawane swoje id na stronie
    for (var i = 0; i < il_zlecen; i++) {
        var etykieta_id = i + 1;
        if (widok == "active") {
            ogloszenie = ogloszenie + ZlecenieGaleria(etykieta_id);
        }
        if (widok == "noactive") {
            ogloszenie = ogloszenie + ZlecenieLista(etykieta_id);
        }
    }
    document.getElementById('main').innerHTML = ogloszenie;
}
function ZlecenieGaleria(etykieta) {
    // poniższe wiersze do późniejszej modyfikacji
    // odpowiadają za generowanie wyglądu "zlecenia"
    var identyfikator = '"zlecenie_' + etykieta + '"';
    var tytul = 'Zlecenie nr ' + etykieta;
    var zdjecie = Zdjecie_zlecenia(etykieta);
    var opis = Opis_zlecenia(etykieta);
    var tresc = "";
    if ((zdjecie) || (opis)) {
        tresc=tresc+'<div class="col-lg-4 col-sm-6 portfolio-item" id=' + identyfikator + '>';
        tresc=tresc+'    <div class="card h-100">';
        if (zdjecie) {
            tresc=tresc+'        <a href="#"><img class="card-img-top img-fluid" src="' + zdjecie + '" alt="HTML5"></a>';
        }
        else {
            tresc=tresc+'        <a href="#"><img class="card-img-top img-fluid" src="http://placehold.it/700x400" alt="HTML5"></a>';
        }
        tresc=tresc+'        <div class="card-block">';
        tresc=tresc+'            <h4 class="card-title"><a href="#">' + tytul + '</a></h4>';
        tresc=tresc+'            <div class="row ogloszenie">';
        tresc=tresc+'                <div class="col-xs-12 col-sm-12 col-md-12 nazwa">nazwa zlecenia, rodzaj zlecenia</div>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-12 col-md-12 nazwa">lokalizacja, adres</div>';
        tresc=tresc+'            </div>';
        tresc=tresc+'            <div class="row ogloszenie">';
        if (!opis) {
            opis='Brak opisu';
        }
        tresc=tresc+'                <p class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 opis">' + opis + '</p>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 cena_czas">- cena (maksymalna cena)<br>- czas wykonania (max czas wykonania)</div>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 data">- data dodania<br>- czas licytacji</div>';
        tresc=tresc+'            </div>';
        tresc=tresc+'        </div>';
        tresc=tresc+'    </div>';
        tresc=tresc+'</div>';
    }
    return tresc;
}
function ZlecenieLista(etykieta) {
    // poniższe wiersze do późniejszej modyfikacji
    // odpowiadają za generowanie wyglądu "zlecenia"
    var identyfikator = '"zlecenie_' + etykieta + '"';
    var tytul = 'Zlecenie nr ' + etykieta;
    var zdjecie = Zdjecie_zlecenia(etykieta);
    var opis = Opis_zlecenia(etykieta);
    var tresc = "";
    if ((zdjecie) || (opis)) {
        tresc=tresc+'<div class="col-lg-12 portfolio-item" id=' + identyfikator + '>';
        tresc=tresc+'    <div class="row h-50">';
        tresc=tresc+'        <div class="col-lg-4">';
        if (zdjecie) {
            tresc=tresc+'        <a href="#"><img class="card-img-top img-fluid" src="' + zdjecie + '" alt="HTML5"></a>';
        }
        else {
            tresc=tresc+'        <a href="#"><img class="card-img-top img-fluid" src="http://placehold.it/700x400" alt=""></a>';
        }
        tresc=tresc+'        </div>';
        tresc=tresc+'        <div class="col-lg-8">';
        tresc=tresc+'            <h4 class="card-title"><a href="#">' + tytul + '</a></h4>';
        tresc=tresc+'            <div class="row ogloszenie">';
        tresc=tresc+'                <div class="col-xs-12 col-sm-12 col-md-12 nazwa">nazwa zlecenia, rodzaj zlecenia</div>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-12 col-md-12 nazwa">lokalizacja, adres</div>';
        tresc=tresc+'            </div>';
        tresc=tresc+'            <div class="row ogloszenie">';
        if (!opis) {
            opis='Brak opisu';
        }
        tresc=tresc+'                <p class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 opis">' + opis + '</p>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 cena_czas">- cena (max)<br>- czas wykonania (max)</div>';
        tresc=tresc+'                <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 data">- data dodania<br>- czas licytacji</div>';
        tresc=tresc+'            </div>';
        tresc=tresc+'        </div>';
        tresc=tresc+'    </div>';
        tresc=tresc+'</div>';
    }
    return tresc;
}
// funkcje tymczasowe udostępniające zdjęcia i opisy zleceń
// docelowo informacje te będą udostępniane z "bazy danych"
function Zdjecie_zlecenia(id_zl) {
    return Tab_linkow[id_zl];
}
function Opis_zlecenia(id_zl) {
    return Tab_opisy[id_zl];
}
