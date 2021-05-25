var nyelvekTomb;
var nyelvek = ["Angol", "Német"];
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
//    $("#select").value = "Angol";
//    $("#angol").css("border", "10px solid green");
//    $("#nemet").style.border = "10px solid red";
    document.getElementById("select").value = "Angol";
    document.getElementById("angol").style.border = "10px solid green";
    document.getElementById("nemet").style.border = "10px solid red";
}
function nemet() {
//    $("#select").val("Német");
//    $("#angol").style.border = "10px solid green";
//    $("#nemet").style.border = "10px solid red";
    document.getElementById("select").value = "Német";
    document.getElementById("nemet").style.border = "10px solid green";
    document.getElementById("angol").style.border = "10px solid red";
}
function formazLe() {
//    $("#select").value = "";
//    $("#angol").style.border = "10px solid red";
//    $("#nemet").style.border = "10px solid red";
    document.getElementById("select").value = "";
    document.getElementById("nemet").style.border = "10px solid red";
    document.getElementById("angol").style.border = "10px solid red";
}
function betolt() {
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
    } else {
        formazLe();
    }
}


function feladatBetolt() {
    var azon = event.srcElement.id;
    console.log(azon);
    var nyelv = sessionStorage.getItem("Nyelv");
    $("#article").empty();
    if (azon === "feladat1") {
        for (var i = 0; i < nyelvekTomb.length; i++) {
            $("#article").append("<div>");
            $("#article div").eq(2*i).append(nyelvekTomb[i]["magyar"] + " ");
            
            $("#article").append("<div>");
            $("#article div").eq(2*i+1).append(nyelvekTomb[i][nyelv]);
        }
    } else if (azon === "feladat2") {
        for (var i = 0; i < nyelvekTomb.length; i++) {
            $("#article").append("<div>");
            $("#article div").eq(2*i).append(nyelvekTomb[i]["magyar"] + " ");
            
            $("#article").append("<div>");
            $("#article div").eq(2*i+1).append(nyelvekTomb[i][nyelv]);
        }
    } else {
        for (var i = 0; i < nyelvekTomb.length; i++) {
            $("#article").append("<div>");
            $("#article div").eq(2*i).append(nyelvekTomb[i]["magyar"] + " ");
            
            $("#article").append("<div>");
            $("#article div").eq(2*i+1).append(nyelvekTomb[i][nyelv]);
        }

    }
}