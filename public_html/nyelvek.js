var nyelvekTomb;
var nyelvek = ["Angol", "Német"];
var figyelTomb = [];
var figyelNyelvTomb = [];
var nyelv = sessionStorage.getItem("Nyelv");

var szavakTomb = [];
var dbFeladat3 = 0;
var index = 0;
var indexTomb = [];
$(function () {

    $.ajax(
            {
                url: "szavak.json",
                success: function (result) {
                    nyelvekTomb = result;
                    //megjelenit(nyelvekTomb);
                }
            }
    );

    listaLetrehozas(nyelvek.length);

    var buttons = $(".button");
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
    $("section select").append("<option>");
    for (var i = 0; i < szam; i++) {
        $("section select").append("<option>");
        $("section select option").eq(i + 1).append(nyelvek[i]);
    }
    $("section").append("<br>");
//    $("section").append('<br><input type="button" onclick="ugras() id="betolt" value="Betöltés">');
    $("section").append('<button class="button" onclick="betolt()" id="betolt">Betöltés</button>');
}
function angol() {
    $("#select").val("Angol");
    $("#angol").css("border", "10px solid green");
    $("#nemet").css("border", "10px solid red");

}
function nemet() {
    $("#select").val("Német");
    $("#angol").css("border", "10px solid red");
    $("#nemet").css("border", "10px solid green");

}
function formazLe() {
    $("#select").val("");
    $("#angol").css("border", "10px solid red");
    $("#nemet").css("border", "10px solid red");

}
function betolt() {
    var x = $("#select").val();
    if (x === "Német") {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("Nyelv", "német");
            location.href = 'nyelv.html';

        }
    } else if (x === "Angol") {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("Nyelv", "angol");
            location.href = 'nyelv.html';

        }
    }
}
function lista() {
    var x = $("#select").val();
    if (x === "Német") {
        nemet();
    } else if (x === "Angol") {
        angol();
    } else {
        formazLe();
    }
}


function feladatBetolt() {
    var azon = event.srcElement.id;
    var random = 0;
    var szoveg = "";
    var nyelv = sessionStorage.getItem("Nyelv");
    var db = 0;
    $("#article").empty();

    if (azon === "feladat1") {
        figyelTomb = [];
        for (var i = 0; db < 6; i++) {
            random = Math.floor(Math.random() * nyelvekTomb.length);
            szoveg = nyelvekTomb[random]["magyar"];

            if (!(figyelTomb.includes(szoveg))) {
                figyelTomb[db] = nyelvekTomb[random]["magyar"];
                figyelNyelvTomb[db] = nyelvekTomb[random][nyelv];
                db++;
            }
        }

        for (var i = 0; i < 6; i++) {
            $("#article").append('<div id=' + i + '>');
            $("#article div").eq(i).append(figyelTomb[i] + "");
        }
        $("#article div").click(kattint);
//        for (var i = 0; i < 6; i++) {
//
////            $("#article div")[i].addEventListener("click", kattint);
//            
//
//            //dblclick
//        }

    } else if (azon === "feladat2") {
        figyelTomb = [];
        for (var i = 0; db < 6; i++) {
            random = Math.floor(Math.random() * nyelvekTomb.length);
            szoveg = nyelvekTomb[random]["magyar"];

            if (!(figyelTomb.includes(szoveg))) {
                figyelTomb[db] = nyelvekTomb[random]["magyar"];
                db++;
            }
        }

        for (var i = 0; i < 6; i++) {
            $("#article").append("<div>");
            $("#article div").eq(2 * i).append(figyelTomb[i] + " ");

            $("#article").append("<div>");
            $("#article div").eq(2 * i + 1).append(nyelv + " megfelelője: ");
            $("#article div").eq(2 * i + 1).append('<input type="text" id="ertek' + i + '" name="ertek' + i + '"><br>');
        }
        $("#article").append('<input type="button" value="Újra" id="ujra">');
        $("#article").append(' <input type="button" value="Ellenőrzés" id="ellenorzes">');

        $("#ellenorzes").click(ellenorzes);


    } else if (azon === "feladat3") {
        szavakTomb = [];
        dbFeladat3 = 1;

        for (var i = 0; i < 10; i++) {

            $("#article").append('<div id=' + i + '>');
        }

        var randomNyelv = Math.floor(Math.random() * nyelvekTomb.length);
        szoveg = nyelvekTomb[randomNyelv]["magyar"];
        $("#article div").eq(4).html(szoveg);
        szavakTomb[0] = nyelvekTomb[randomNyelv][nyelv];

        for (var i = 0; dbFeladat3 < 5; i++) {
            randomNyelv = Math.floor(Math.random() * nyelvekTomb.length);
            szoveg = nyelvekTomb[randomNyelv][nyelv];
            if (!(szavakTomb.includes(szoveg))) {
                szavakTomb[dbFeladat3] = nyelvekTomb[randomNyelv][nyelv];
                dbFeladat3++;
            }
        }

        index = 0;
        indexTomb = [];


        db = 0;
        for (var i = 0; db < 5; i++) {

            index = Math.floor(Math.random() * szavakTomb.length);

            if ((indexTomb.includes(index))) {

            } else {
                indexTomb[indexTomb.length] = index;
                $("#article div").eq(db * 2 + 1).html(szavakTomb[index]);
                db++;
            }
        }
        
        $("#article div").click(kivalasztott);
    }
}
function kivalasztott() {
    divid = this.id;
    var szo = $("#article div").eq(divid).text();
    var magyarSzo = $("#article div").eq(4).text();
    if (divid % 2 === 1) {
        for (var i = 0; i < nyelvekTomb.length; i++) {
            if (nyelvekTomb[i]["magyar"] === magyarSzo) {
                if (nyelvekTomb[i][nyelv] === szo) {
                    $("#article div").eq(divid).css("border", "10px solid green");
                } else {
                    $("#article div").eq(divid).css("border", "10px solid red");
                }
            }
        }
    }
}
function kattint() {
    divid = this.id;
    var szo = $("#article div").eq(divid).text();
    var ellenszo;
    for (var i = 0; i < nyelvekTomb.length; i++) {

        if (nyelvekTomb[i]["magyar"] === szo) {
            ellenszo = nyelvekTomb[i][nyelv];
            $("#article div").eq(divid).html(ellenszo);
        } else if (nyelvekTomb[i][nyelv] === szo) {

            ellenszo = nyelvekTomb[i]["magyar"];
            $("#article div").eq(divid).html(ellenszo);
        }
    }
}
function ellenorzes() {
    var nyelv = sessionStorage.getItem("Nyelv");
    var ertek0 = $("#ertek0").val();
    var ertek1 = $("#ertek1").val();
    var ertek2 = $("#ertek2").val();
    var ertek3 = $("#ertek3").val();
    var ertek4 = $("#ertek4").val();
    var ertek5 = $("#ertek5").val();
    var magyarszo = "";
    var jomegoldas = 0;
    var ertekek = [ertek0, ertek1, ertek2, ertek3, ertek4, ertek5];

    for (var i = 0; i < ertekek.length; i++) {
        magyarszo = figyelTomb[i];

        for (var j = 0; j < nyelvekTomb.length; j++) {
            if (nyelvekTomb[j]["magyar"] === magyarszo) {
                if (nyelvekTomb[j][nyelv] === ertekek[i]) {
                    jomegoldas++;
                }
            }
        }
    }
    console.log(jomegoldas);
    alert("Jó megoldások: " + jomegoldas);

}
