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
    $("#betolt").click(betolt);
    
    
});

function megjelenit(nyelvekTomb){
    for (var i = 0; i < nyelvekTomb.length; i++) {
        console.log(nyelvekTomb[i]);
    } 
};

function listaLetrehozas(szam){
    $("section").append('<label for="nyelv">Válassz egy nyelvet:</label>'); 
    $("section").append("<select>");
    for (var i = 0; i < szam; i++) {
       $("section select").append("<option>");
       $("section select option").eq(i).append(nyelvek[i]);
    }
    $("section").append('<br><input type="button" id="betolt" value="Betöltés">');
}

function betolt(){
    
}