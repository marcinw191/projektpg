function Body(il_zlecen){
    // il_zlecen - parametr określający ilość wyświetlanych zleceń na stronie
    var ogloszenie = ""; //zawartość html dla części <div id="main">
    // pętla wykonywana określoną przez parametr "k" ilość razy;
    // przy okazji każde zlecenie ma swoje id na stronie
    for (var i=0 ; i< il_zlecen ; i++) {
        var etykieta_id="zlecenie_"+i;
        console.log(etykieta_id);
        ogloszenie=ogloszenie+Zlecenie(etykieta_id);
        }
    document.getElementById('main').innerHTML = ogloszenie;
}

function Zlecenie(etykieta){
    // poniższy wiersz do późniejszej modyfikacji
    // odpowiada za generowanie wyglądu "zlecenia"
    var tresc='<img id="'+etykieta+'" src="../img/zlecenie.jpg">';
    return tresc;
}

