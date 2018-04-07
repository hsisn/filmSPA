////vue Circuit

function message(reponse) {
  var mes = "";

  mes += "<div class='alert alert-success'>";
  mes +=
    "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
  mes += "<b>" + reponse + "</b>";
  mes += "</div>";
  $("#messages").html(mes);
  setTimeout(function() {
    $("#messages").html("");
  }, 5000);
}

function formulaireCircuit(reponse) {
  $taille = reponse.length;

  var input = "";
  input += ' <div class="container-fluid" id="conteneurCircuit" >';
  input +=
    '                                        <form id="contenuCircuit"class="form-group row" style="display: block">';
  input +=
    '                                            <div class="form-group row">';
  input +=
    '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Création circuit</h2>';
  input += "                                            </div>";
  input += "";
  input +=
    '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nomCircuit" name="nomCircuit" placeholder="Entrer nom du participant" required>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
  input +=
    '                                                    <div class="col-sm-10" >';
  input +=
    '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required>                                    ';
  for (var i = 0; i < $taille; i++) {
    input +=
      "   <option value='" +
      reponse[i].idThematique +
      "'>" +
      reponse[i].nom +
      "</option>";
  }
  input += "                                                        </select>";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit" placeholder="Entrer départ date" required>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de retour</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  //    document.getElementById("myForm").reset();
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer courriel du participant" required>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer courriel du participant" required>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" placeholder="Entrer ville du participant">';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit"></textarea>';
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Entrer nombre etape</label>';
  input +=
    '                                                    <div class="col-sm-10" >';
  input +=
    '                                                        <select class="form-control" id="nbEtapeCircuit" name="nbEtapeCircuit" required>';
  for (var i = 1; i < 11; i++) {
    input += "   <option value='" + i + "'>" + i + "</option>";
  }
  input += "                                                        </select>";
  input += "                                                    </div>";
  input += "                                                </div>";

  input +=
    '                                              <div class="form-group">';
  input +=
    '                                                      <label for="pochette">Pochette:</label>';

  input +=
    '                                                      <input type="file" class="form-control-file" id="pochette" name="pochette" aria-describedby="fileHelp">';

  input += "                                          </div>";

  input +=
    '                                                <input type="button" id="ajouterCircuit"class="btn" onclick=\'$("#contenuCircuit").hide(); $("#contenuEtape").show(); AjouterCircuit();\' value="Sauvegarder et passer aux étapes" >';
  input += "                                            </div>";
  input += "";
  input += "";
  input += "                                        </form>"; //fin formulaire circuit

  input += ""; //formulaire étape
  input +=
    '                                        <form id="contenuEtape"class="form-group row" style="display: none">';
  input +=
    '                                            <div class="form-group row">';
  input +=
    '                                                <h2 for="nomEtape" class="col-sm-2 col-form-label">Création étape <span id=\'nbEtape\'></span> </h2>';
  input += "                                            </div>";
  input += "";
  input +=
    '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';

  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nomEtape" class="col-sm-2 col-form-label">Nom de l\'étape</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nomEtape" name="nomEtape" placeholder="Entrer nom du participant" required>';
  input += "                                                    </div>";
  input += "                                                </div>";

  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="descripEtape" class="col-sm-2 col-form-label">Déscription étape</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    "                                                            <textarea class='form-control' rows='5' id='descripEtape' name='descripEtape'></textarea>";
  input += "";
  input += "                                                        </div>";
  input += "                                                    </div>";

  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbJourEtape" class="col-sm-2 col-form-label">Entrer nombre jour</label>';
  input +=
    '                                                    <div class="col-sm-10" >';

  input +=
    '                                                        <select class="form-control" id="nbJourEtape" name="nbJourEtape" required>';
  for (var i = 1; i < 11; i++) {
    input += "   <option value='" + i + "'>" + i + "</option>";
  }

  input += "                                                        </select>";
  input += "                                                    </div>";
  input += "                                                </div>";

  input +=
    "                                                <input type=\"hidden\" id='idCircuit' ><br><br>";
  input +=
    '                                                <input type="button" class="btn" value="Enregistrer étape" onClick=\'  $("#contenuEtape").hide(); $("#contenuJour").show(); AjouterEtape();\'><br><br>';
  input += "                                         </div>";

  input += "                                        </form>"; //fin formulaire étape--------------------------------------------------
  input += "";
  input += "";
  input += "";
  input += ""; //formulaire Jour
  input +=
    '                                        <form id="contenuJour"class="form-group row" style="display: none">';
  input +=
    '                                            <div class="form-group row">';
  input +=
    "                                                <h2 id='labelJour' for=\"nomJour\" class=\"col-sm-2 col-form-label\">Création Jour <span id='nbJour'></span></h2>";
  input += "                                            </div>";
  input += "";
  input +=
    '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';

  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="nomHotel" class="col-sm-2 col-form-label">Hotel</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <input type="text" class="form-control" id="nomHotel" name="nomHotel" placeholder="Entrer courriel du participant" required>';
  input += "                                                        </div>";
  input += "                                                    </div>";

  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="UrlHotel" class="col-sm-2 col-form-label">URL(Hotel)</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <input type="text" class="form-control" id="UrlHotel" name="UrlHotel" placeholder="Entrer courriel du participant" required>';
  input += "                                                        </div>";
  input += "                                                    </div>";
  input += "";
  input += "";
  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="nomRestaurant" class="col-sm-2 col-form-label">Restaurant(s)</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <input type="text" class="form-control" id="nomRestaurant" name="nomRestaurant" placeholder="Entrer ville du participant">';
  input += "                                                        </div>";
  input += "                                                    </div>";
  input += "";
  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="urlRestaurant" class="col-sm-2 col-form-label">URL Restaurant(s)</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <input type="text" class="form-control" id="urlRestaurant" name="urlRestaurant" placeholder="Entrer ville du participant">';
  input += "                                                        </div>";
  input += "                                                    </div>";
  input += "";
  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="repas" class="col-sm-2 col-form-label">Repas inclus</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <label><input type="checkbox" name="dejeuner" value="Déjeuner">Déjeuner</label>';
  input +=
    '                                                            <label><input type="checkbox" name="diner" value="Diner">Diner</label>';
  input +=
    '                                                            <label><input type="checkbox" name="souper" value="Souper">Souper</label>';
  input += "                                                        </div>";
  input += "                                                    </div>";

  input +=
    '                                                    <div class="form-group row">';
  input +=
    '                                                        <label for="descripJour" class="col-sm-2 col-form-label">Déscription jour</label>';
  input +=
    '                                                        <div class="col-sm-10">';
  input +=
    '                                                            <textarea class="form-control" rows="5" id="descripJour" name="descripJour"></textarea>';
  input += "";
  input += "                                                        </div>";
  input += "                                                    </div>";
  input += "                                                </div>";

  input +=
    '                                                <input type="button" class="btn" value="Enregistrer Jour" onClick="ajouterJour();"><br><br>';
  input += "                                         </div>";

  input += "                                        </form>"; //fin formulaire jour-----------------------------------------------------------------------------------

  input += "                                            </div>";
  input += "";
  input += "";

  input += "                                    </div>";

  $("#get_result").html(input);
  $(function() {
    $('[id^="date_"]').datepicker();
  });
}

function lesCircuitListe(reponse) {
  var taille;
  taille = reponse.length;

  var list = "";
  list += '<div class="container">';
  list += "  <h3>Liste des circuits</h3>";
  list +=
    "  <p>The .table-striped class adds zebra-stripes to a table:</p>            ";
  list += '  <table class="table table-striped">';
  list += "    <thead>";
  list += "      <tr>";
  list += "        <th>Nom</th>";
  list += "        <th>Prix</th>";
  list += "        <th>RUD</th>";

  list += "      </tr>";
  list += "    </thead>";
  for (var i = 0; i < taille; i++) {
    list += "    <tbody>";
    list += "      <tr>";
    list += "        <td>" + reponse[i].titre + "</td>";
    list += "        <td>" + reponse[i].prix + "</td>";
    list += "        <td>";
    list +=
      '           <a href="#" onclick=\'supprimerCircuit();\' class="btn btn-primary a-btn-slide-text">';
    list +=
      '           <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>';
    list += "            </a>      ";
    list += '           <a href="#" class="btn btn-primary a-btn-slide-text">';
    list +=
      '           <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>';
    list += "            </a>      ";
    list += '           <a href="#" class="btn btn-primary a-btn-slide-text">';
    list +=
      '           <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>';
    list += "            </a>      ";
    list += "        </td>";
    list += "      </tr>";
    list += "    <tbody>";
  }

  list += "  </table>";
  list += "</div>";
  $("#get_result").html(list);
}

function afficherFicheCircuit(reponse) {
  var fiche = reponse.ficheCircuit;
  var theme = reponse.listetheme;
  var taille = theme.length;

  var input = "";
  input += ' <div class="container-fluid" id="conteneurCircuit" >';
  input +=
    '                                        <form id="modifierCircuitForm"class="form-group row" style="display: block">';
  input +=
    '                                            <div class="form-group row">';
  input +=
    '                                                <h2 for="nomCircuit" class="col-sm-2 col-form-label">Modification d\'un circuit</h2>';
  input += "                                            </div>";
  input += "";
  input +=
    '                                            <div class="container" style="width: 60% ; float: left; margin-left: 20px" >';
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nomCircuit" class="col-sm-2 col-form-label">Nom du circuit</label>';
  input +=
    '                                                    <div class="col-sm-10">';

  input +=
    '                                                        <input type="text" class="form-control" id="nomCircuit" name="nomCircuit"  value = ' +
    fiche[0].titre +
    " required>";

  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="themeCircuit" class="col-sm-2 col-form-label">Thématique</label>';
  input +=
    '                                                    <div class="col-sm-10" >';
  input +=
    '                                                        <select class="form-control" id="themeCircuit" name="themeCircuit" required>                                    ';
  for (var i = 0; i < taille; i++) {
    input += "   <option";
    if (fiche.idThematique === theme[i].idThematique) {
      input += "selected";
    }

    input +=
      " value='" + theme[i].idThematique + "'>" + theme[i].nom + "</option>";
  }
  input += "                                                        </select>";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="dateDepartCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="dateDepartCircuit" name="dateDepartCircuit"  required  value = ' +
    fiche[0].dateDeDepart +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="dateRetourCircuit" class="col-sm-2 col-form-label">Date de départ</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="dateRetourCircuit" name="dateRetourCircuit" placeholder="Entrer retour date" required value = ' +
    fiche[0].dateDeRetour +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbPersonneMin" class="col-sm-2 col-form-label">Nombre personnes minimum</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nbPersonneMin" name="nbPersonneMin" placeholder="Entrer courriel du participant" required value = ' +
    fiche[0].nbPersonnesMin +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbPersonneMax" class="col-sm-2 col-form-label">Nombre personnes maximum</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="nbPersonneMax" name="nbPersonneMax" placeholder="Entrer courriel du participant" required value = ' +
    fiche[0].nbPersonnesMax +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="prixCircuit" class="col-sm-2 col-form-label">Prix</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="prixCircuit" name="prixCircuit" required value = ' +
    fiche[0].prix +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="guide" class="col-sm-2 col-form-label">Guide</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="guide" name="guide" required value = ' +
    fiche[0].guide +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="promo" class="col-sm-2 col-form-label">Promotion</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <input type="text" class="form-control" id="idPromo" name="idPromo" required value = ' +
    fiche[0].idPromotion +
    " >";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="descripCircuit" class="col-sm-2 col-form-label">Déscription du circuit</label>';
  input +=
    '                                                    <div class="col-sm-10">';
  input +=
    '                                                        <textarea class="form-control" rows="5" id="descripCircuit" name="descripCircuit">' +
    fiche[0].description +
    "</textarea>";
  input += "";
  input += "";
  input += "";
  input += "                                                    </div>";
  input += "                                                </div>";
  input += "";
  input +=
    '                                                <div class="form-group row">';
  input +=
    '                                                    <label for="nbEtapeCircuit" class="col-sm-2 col-form-label">Entrer nombre etape</label>';
  input +=
    '                                                    <div class="col-sm-10" >';
  input +=
    '                                                        <select class="form-control" id="nbEtapeCircuit" name="nbEtapeCircuit" required>';
  input +=
    "                                                            <option>1</option>";
  input +=
    "                                                            <option>2</option>";
  input +=
    "                                                            <option>3</option>";
  input +=
    "                                                            <option>4</option>";
  input +=
    "                                                            <option>5</option>";
  input +=
    "                                                            <option>6</option>";
  input += "                                                        </select>";
  input += "                                                    </div>";
  input += "                                                </div>";
  input +=
    '                                              <div class="form-group">';
  input +=
    '                                                      <label for="imageCircuitLbL">Image Circuit:</label>';

  input +=
    '                                                      <input type="file" class="form-control-file" id="imageCircuit" name="imageCircuit" aria-describedby="fileHelp">';
  input +=
    '  <input type="hidden" name="idCircuit" value=' + fiche[0].idCircuit + ">";
  input += "                                          </div>";
  input +=
    '                                                <input type="button" id="modifierCircuit"class="btn" onclick=\'requeteModifierCircuit();\' value="Modifier Circuit" >';
  input += "                                            </div>";
  input += "";
  input += "";
  input += "                                        </form>"; //fin formulaire circuit

  $("#get_result")
    .html(input)
    .append("<script></script>");
}
var CircuitVue = function(reponse) {
  var action = reponse.action;
  // alert(reponse.action);

  switch (action) {
    case "enregistrer":
      //case "enlever" :
      //case "modifier" :
      message(reponse.msg);
      break;
    case "listerCircuit":
      listerR(reponse.listetheme);
      break;

    case "afficherFiche":
      afficherFicheCircuit(reponse);
      break;
    case "lister":
      formulaireCircuit(reponse.listetheme);
      break;
    case "listerLesCircuits":
      lesCircuitListe(reponse.listecircuit);
      break;
    //case "fiche" :
    //	afficherFiche(reponse);
    //break;listerLesCircuits
  }
};
