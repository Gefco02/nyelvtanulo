var nyelvekTomb;
var nyelvek = ["Angol", "Német"];

$(function () {


    $.ajax(
            {
                url: "szavak.json",
                success: function (result) {
                    nyelvekTomb = result;
                    megjelenit(nyelvekTomb);
                }
            }
    );


    listaLetrehozas(nyelvek.length);
    $("#betolt").click(betolt);

    var buttons = document.getElementsByClassName("button");
    for (var b = 0; b < buttons.length; b++)
    {
        if (buttons[b].id === "angol")
        {
            buttons[b].style.background = "url('kepek/angol.jpg')";
        } else if (buttons[b].id === "nemet")
        {
            buttons[b].style.background = "url('kepek/german.jpg')";
        }
    }



});

function megjelenit(nyelvekTomb) {
    for (var i = 0; i < nyelvekTomb.length; i++) {
        console.log(nyelvekTomb[i]);
    }
}
;

function listaLetrehozas(szam) {
    $("section").append('<button class="button" onclick="angol()" id="angol"></button>');
    $("section").append('<button class="button" onclick="nemet()" id="nemet"></button><br><br>');
    $("section").append('<label for="nyelv">Válassz egy nyelvet:</label>');
    $("section").append("<select id='select' onchange='lista()'>");
    for (var i = 0; i < szam; i++) {
        $("section select").append("<option>");
        $("section select option").eq(i).append(nyelvek[i]);
    }
    $("section").append("<br>");
//    $("section").append('<br><input type="button" onclick="ugras() id="betolt" value="Betöltés">');
    $("section").append('<button class="button" onclick="proba()" id="proba">Betöltés</button>');
}
function angol() {
    document.getElementById("select").value = "Angol";
    document.getElementById("angol").style.border = "10px solid green";
    document.getElementById("nemet").style.border = "10px solid red";
}
function nemet() {
    document.getElementById("select").value = "Német";
    document.getElementById("nemet").style.border = "10px solid green";
    document.getElementById("angol").style.border = "10px solid red";
}
function proba() {
    var x = document.getElementById("select").value;
    console.log("You selected: " + x);
    if (x === "Német") {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("Nyelv", "német");
            location.href = 'nyelv.html';

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    } else if (x === "Angol") {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("Nyelv", "angol");
            location.href = 'nyelv.html';

        } else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        }
    }
}
function lista() {
    var x = document.getElementById("select").value;
    if (x === "Német") {
        nemet();
    } else if (x === "Angol") {
        angol();
    }
}
function betolt() {

}
;