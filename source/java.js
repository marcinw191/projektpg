function Body(){
    var k = 10;  // parametr określający ilość wyświetlanych zleceń na stronie
    var ogloszenie = ""; //zawartość html dla części <div id="main">
    // pętla wykonywana określoną przez parametr "k" ilość razy;
    // przy okazji każde zlecenie ma swoje id na stronie
    for (var i=0 ; i<k ; i++) {
        var etykieta_id="zlecenie_"+i;
        console.log(etykieta_id);
        ogloszenie=ogloszenie+'<img id="'+etykieta_id+'" src="../img/zlecenie.jpg">';
        }
    document.getElementById('main').innerHTML = ogloszenie;
}
