//vue films
function message(reponse) {
    var mes = "";

    mes += "<div class='alert alert-success'>";
    mes += "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
    mes += "<b>" + reponse + "</b>";
    mes += "</div>";
    $('#messages').html(mes);
    setTimeout(function () {
        $('#messages').html("");
    }, 5000);

}




function listerPani(listetheme) {
    var taille;

    taille = listetheme.length;

    var strVar = "";
    strVar += "<div class=\"row\">";
    strVar += "                        <div class=\"col-md-4 col-xs-4\"><b>Action<\/b><\/div>";
    strVar += "                        <div class=\"col-md-2 col-xs-2\"><b>image film<\/b><\/div>";
    strVar += "                        <div class=\"col-md-2 col-xs-2\"><b>titre film<\/b><\/div>							";
    strVar += "                        <div class=\"col-md-2 col-xs-2\"><b>prix circfilmuit <\/b><\/div>";

    strVar += "                    <\/div>";
strVar += "<form>";
var total=0;
    for (var i = 0; i < taille; i++) {

        



        strVar += "                                <div class=\"row\">";


        strVar += "                                            <div class=\"col-md-4\">";
        strVar += "                                                    <div class=\"btn-group\">";
        strVar += "                                                            <a href=\"#\"  id=" + listetheme[i].id + " class=\"btn btn-danger remove\" onclick='removePanier(" + listetheme[i].idf + ");listerTT();'><span class=\"glyphicon glyphicon-trash\"><\/span><\/a>";

        
        strVar += "                                                    <\/div>";
        strVar += "                                            <\/div>";


        strVar += "                                            <input type=\"hidden\" name=\"\" value=" + listetheme[i].id + "/>";
        strVar += "                                            <div class=\"col-md-2\"><img class=\"img-responsive\" src='pochettes/" + listetheme[i].pochette + "'  style=\"width:50px; height:50px;\"><\/div>";
        strVar += "                                            <div class=\"col-md-2\">" + listetheme[i].titre + "<\/div>";
        strVar += "                                            <div class='col-md-2'><input type='text' class='form-control price' value=" + listetheme[i].prix + "$ readonly='readonly'><\/div>";
        strVar += "                                            <\/div>";
        
total+=parseFloat(listetheme[i].prix);
    }
    strVar += "  <div class='col-md-2'>Total = <input type='text' class='form-control price' value=" + total + "$ readonly='readonly'><\/div>";
    
    strVar += "										<\/form>";
    $('#get_result').html(strVar);
    // $("a[name=afficherCircuit]").click( function(){
    // AfficherCircuits($(this).prop("id"));    
//});

}

/*function afficherFiche(reponse){
 var uneFiche;
 if(reponse.OK){
 uneFiche=reponse.fiche;
 $('#formFicheF h3:first-child').html("Fiche du film numero "+uneFiche.idf);
 $('#idf').val(uneFiche.idf);
 $('#titreF').val(uneFiche.titre);
 $('#dureeF').val(uneFiche.duree);
 $('#resF').val(uneFiche.res);
 $('#divFormFiche').show();
 document.getElementById('divFormFiche').style.display='block';
 }else{
 $('#messages').html("Film "+$('#numF').val()+" introuvable");
 setTimeout(function(){ $('#messages').html(""); }, 5000);
 }
 
 }
 */











var panierVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrerPani" :
        case "removeP" :
            //case "modifier" :
            message(reponse.msg);
            break;

        case "listerP" :
            listerPani(reponse.listetheme);
            break;

        case "formulaire" :
            formulaireT();
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}
