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

function formulaireF() {

    var result = "";

    result += "            <form id=\"formEnregthems\" enctype=\"multipart\/form-data\" action=\"enregistrer.php\" method=\"POST\" onSubmit=\"return valider();\">";
    result += "                <h3>Ajouter un film<\/h3>";
    result += "                 <input type='hidden' id='idf' name='idf'>";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"titre\">Titre:<\/label>";
    result += "                    <input type=\"text\" class=\"form-control\" id=\"titre\" name=\"titre\">";
    result += "                <\/div>";
    result += "";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"duree\">Durée:<\/label>";
    result += "                    <input type=\"text\" class=\"form-control\" id=\"duree\" name=\"duree\">";
    result += "                <\/div>";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"realisateur\">Réalisateur:<\/label>";
    result += "                    <input type=\"text\" class=\"form-control\" id=\"realisateur\" name=\"res\">";
    result += "                <\/div>";
    result += "";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"categorie\">Catégorie:<\/label>";
    result += "                    <select class=\"form-control\" id=\"categorie\" name=\"cat\">";
    
    result += "                        <option>ACTION<\/option>";
    result += "                        <option>SUSPENSE<\/option>";
    result += "                        <option>COMEDIE<\/option>";
    result += "                        <option>DRAME<\/option>";
    result += "                        <option>SCIENCE FICTION<\/option";
    result += "                        <option>HORREUR<\/option>";
    result += "                        <option>POUR LA FAMILLE<\/option>";
    result += "";
    result += "                    <\/select>";
    result += "                <\/div>";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"prix\">Prix:<\/label>";
    result += "                    <input type=\"text\" class=\"form-control\" id=\"prix\" name=\"prix\">";
    result += "                <\/div>";
    result += "";
    result += "";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"pochette\">Pochette:<\/label>";
    result += "                    <input type=\"file\" class=\"form-control-file\" id=\"pochette\" name=\"pochette\" aria-describedby=\"fileHelp\">";
    result += "                <\/div>";
    result += "                <div class=\"form-group\">";
    result += "                    <label for=\"prix\">Lien:<\/label>";
    result += "                    <input type=\"text\" class=\"form-control\" id=\"lien\" name=\"lien\">";
    result += "                <\/div>";
    
    result += "                 <input type='button' id='ajouter' class='btn btn-primary' value='Ajouter' onClick='enregistrerF();listerFilms();'><br><br>";
    result += "                 <input type='button' id='modifier' class='btn btn-primary' value='Modifier' onClick='modifierFilm();listerFilms();'><br><br>";
    result += "                <a href='#' onClick='listerFilms();'>Retour à la liste<\/a>";

    result += "            <\/form>";


    $('#get_result').html(result);

}

function listerT(reponse) {
    var listetheme = reponse.listetheme;
    var taille;
    taille = listetheme.length;
    var result = "";

    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].titre + "</span><br><span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].res + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a href='#' name='afficherCircuit'  id='" + listetheme[i].idf + "' class=\"thumbnail\">	<img src='pochettes/" + listetheme[i].pochette + "' style='width:400px; height:300px;'></a>";


        result += "</div>";

        result += "<div class='panel-heading'><span style='font-weight: bold'>" + listetheme[i].prix + ".99 $</span>" +
                (reponse.email !== 'admin@admin.com' ? "  <a class=\"nav-link btn btn-danger\" href=\"#\" name='enregistrerPani'  id='" + listetheme[i].idf + "' >Ajouter au Panier<\/a>" : "") +
                "</div>";
        result += "</div>";
        result += "</div>";
    }
    $('#get_result').html('');
    $('#get_result').html(result);
    $("a[name=afficherCircuit]").click(function () {
        AfficherCircuits($(this).prop("id"));
    });
    $("a[name=enregistrerPani]").click(function () {
        enregistrerPani($(this).prop("id"));
    });

}

function film(reponse) {
    var listetheme = reponse.film;
    var taille;
    taille = listetheme.length;
    var result = "";
    result += "            <form id=\"contenuFilm\" enctype=\"multipart\/form-data\">";
    result += " <table  class=\"table table-striped\">";
    result += " 		<thead>";
    result += " 			<tr>";
    result += " 				<th>Numéro</th>";
    result += " 				<th>Titre</th>";
    result += " 				<th>Réalisateur</th>";
    result += " 				<th>Durée</th>";
    result += " 				<th>Prix</th>";
    result += "                          <th>Catégorie</th>";
    result += " 				<th>Pochette</th>";
    result += "                          <th>Fonctions</th>";
    result += " 			</tr>";
    result += " 		</thead>";
    result += " 		<tbody>";

    for (var i = 0; i < taille; i++) {
        result += "<tr><td>" + listetheme[i].idf + "</td><td>" + listetheme[i].titre + "</td><td>" + listetheme[i].res + "</td><td>" + listetheme[i].duree + "</td><td>" + listetheme[i].prix + ".99 $</td><td>" + listetheme[i].cat + "</td><td><img src='pochettes/" + listetheme[i].pochette + "' width=60 height=60'></td><td>"
        result += "<div class=\"row\">";

        result += "<a href='#' name='modifieFilm'  id='" + listetheme[i].idf + "' class=\"btn btn-primary a-btn-slide-text\">";
        result += " <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>";

        result += " </a>";
//        result += " <a  href='#' name='ficheFilm'  id='" + listetheme[i].idf + "' class=\"btn btn-primary a-btn-slide-text\">";
//        result += "  <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>";
//
//        result += "  </a>";
        result += "<a href='#' name='supprimerFilm'  id='" + listetheme[i].idf + "' class=\"btn btn-primary a-btn-slide-text\">   ";
        result += "  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>";

        result += "   </a>";
        result += " </div>";
        result += "	</td></tr>";
    }
    result += "</tbody></table><a href='index.php'>Retour à la page d'accueil</a></form>";
    $('#get_result').html(result);
    $("a[name=supprimerFilm]").click(function () {
        enleverF($(this).prop("id"));
        listerFilms();
    });
    $("a[name=modifieFilm]").click(function () {
        formModifieF($(this).prop("id"));
        
    });
   

}

function formulaireModifie(reponse) {
    var uneFiche;
    if (reponse.OK) {
        uneFiche = reponse.fiche;
        formulaireF();
        $('#formEnregthems h3:first-child').html("Fiche du film " + uneFiche.titre);
        $('#idf').val(uneFiche.idf);
        $('#titre').val(uneFiche.titre);
        $('#duree').val(uneFiche.duree);
        $('#realisateur').val(uneFiche.res);
        $('#cat').val(uneFiche.categorie);
        $('#prix').val(uneFiche.prix);
        $('#lien').val(uneFiche.lienFilm);
        $('#ajouter').hide();
        $('#modifier').show();
        //$('#divId').show();



    } else {
        $('#messages').html("Film " + $('#idfilm').val() + " introuvable");
        setTimeout(function () {
            $('#messages').html("");
        }, 5000);
    }


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
var thematiqueVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "enregistrer" :
        case "enlever" :
            //case "modifier" :
            message(reponse.msg);
            break;

        case "lister" :
            listerT(reponse);
            break;

        case "formulaire" :
            formulaireF();
            break;

        case "listerFilms" :
            film(reponse);
            break;

        case "fiche" :
            formulaireModifie(reponse);
            break;

    }
}
