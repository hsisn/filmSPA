//Requetes Circuit
function AjouterCircuit() {
  $("#sommaire").html("creation des etapes");
  var formCircuit = new FormData(document.getElementById("contenuCircuit"));
  formCircuit.append("action", "enregistrerCircuit");
  $.ajax({
    type: "POST",
    url: "Circuit/CircuitControleur.php",
    data: formCircuit,
    dataType: "json", //text pour le voir en format de string
    //async : false,
    //cache : false,
    contentType: false,
    processData: false,
    success: function(reponse) {
      //alert(reponse);
      CircuitVue(reponse);
      $("#nbEtape").html(nbEtape + 1);
      $("#nbJour").html(nbJour + 1);
    },
    fail: function(err) {}
  });
}

function listerCircuit() {
  var formListerCircuit = new FormData();
  formListerCircuit.append("action", "listerCircuit"); //alert(formFilm.get("action"));
  $.ajax({
    type: "POST",
    url: "Circuit/CircuitControleur.php",
    data: formListerCircuit,
    contentType: false,
    processData: false,
    dataType: "json", //text pour le voir en format de string
    success: function(reponse) {
      //alert(reponse);
      CircuitVue(reponse);
    },
    fail: function(err) {}
  });
}

function SupprimerCircuit() {
  var leForm = document.getElementById("formEnleverThem");
  var formthem = new FormData(leForm);
  formthem.append("action", "enlever"); //alert(formFilm.get("action"));
  $.ajax({
    type: "POST",
    url: "Thematique/ThematiqueControleur.php",
    data: formthem, //leForm.serialize(),
    contentType: false, //Enlever ces deux directives si vous utilisez serialize()
    processData: false,
    dataType: "json", //text pour le voir en format de string
    success: function(reponse) {
      //alert(reponse);
      thematiqueVue(reponse);
    },
    fail: function(err) {}
  });
}

function obtenirFicheCircuit() {
  var formCircuit = new FormData();
  formCircuit.append("action", "ficheCircuit");

  $.ajax({
    type: "POST",
    url: "Circuit/CircuitControleur.php",
    data: formCircuit,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function(reponse) {
      //alert(JSON.stringify(reponse));
      CircuitVue(reponse);
    },
    fail: function(err) {}
  }).done(function() {
    //$("[id^=date]").datepicker();
  });
}

function requeteModifierCircuit() {
  var leForm = document.getElementById("modifierCircuitForm");
  var formthem = new FormData(leForm);
  formthem.append("action", "modifier");
  $.ajax({
    type: "POST",
    url: "Circuit/CircuitControleur.php",
    data: formthem,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function(reponse) {
      alert(JSON.stringify(reponse));
      CircuitVue(reponse);
    },  
    fail: function(err) {}
  });
}

//Appel ajax pour chercher les differents thématique pour loader le drop down list
function FormulaireCircuit() {
  $("#sommaire").html("creation des circuits");
  var formFilm = new FormData();
  formFilm.append("action", "lister"); //alert(formFilm.get("action"));
  $.ajax({
    type: "POST",
    url: "Thematique/ThematiqueControleur.php",
    data: formFilm,
    contentType: false,
    processData: false,
    dataType: "json", //text pour le voir en format de string
    success: function(reponse) {
      //alert(reponse);
      CircuitVue(reponse);
    },
    fail: function(err) {}
  });
}

function showing() {
  var strVar = "";
  strVar += "";
  strVar += "        <br />";
  strVar += "        <div>";
  strVar += '            <h2 align="center">Circuit de voyage Phuket</h2>';
  strVar += "            <br />";
  strVar +=
    "<a>	<img src='pochettes/" +
    "8fec20818bcb9334ebfee5e45dc3657f3185aaae.jpg" +
    "' style='width:460px; height:500px;'></a>";
  strVar += "";
  strVar += "";
  strVar +=
    '            <table class="table table-condensed" style="width: 480px; float:right; height: 400px; ">';
  strVar += "                <thead>";
  strVar += '                    <tr style=" height: 30px">';
  strVar +=
    '                        <th style="background-color: #426CB4; color: white">Phuket</th>';
  strVar +=
    '                        <th style="background-color: #426CB4; color: white"></th>';
  strVar += "                    </tr>";
  strVar += "                </thead>";
  strVar += "                <tbody>";
  strVar += '                    <tr style=" height: 30px">';
  strVar +=
    '                        <td style="background-color: white; color: black">Durée</td>';
  strVar +=
    '                        <td style="background-color: #426CB4; color: white; width: 70px">7 jours</td>';
  strVar += "";
  strVar += "                    </tr>";
  strVar += '                    <tr style=" height: 30px">';
  strVar +=
    '                        <td style="background-color: white; color: black">Tarifs</td>';
  strVar +=
    '                        <td style="background-color: #426CB4; color: white">500 $</td>';
  strVar += "                    </tr>";
  strVar += '                    <tr style=" height: 30px">';
  strVar +=
    '                        <td style="background-color: white; color: black">Infos</td>';
  strVar +=
    '                        <td style="background-color: white; color: black"></td>';
  strVar += "";
  strVar += "                    </tr>";
  strVar += "                    <tr>";
  strVar +=
    '                        <td style="background-color: white; color: black">Visites: Hanoi - Baie d\'Halong - Ho Chi Minh - My Tho ';
  strVar +=
    "                            - Delta du Mekong - Ho Chi Minh - Siem Reap - Angkor - Phnom Penh";
  strVar += "";
  strVar += "                            Lieux remarquables";
  strVar +=
    "                            La baie d'Hạ Long  Mausolée de Hô Chi Minh  La pagode au Pilier unique  ";
  strVar +=
    "                            Temple de la Littérature Quoc Tu Giam  Hô-Chi-Minh-Ville  Delta Mékong  ";
  strVar +=
    "                            Palais de la Réunification  Angkor Vat  Wat Phnom</td>";
  strVar +=
    '                        <td style="background-color: white; color: black"></td>';
  strVar += "                    </tr>";
  strVar += "";
  strVar += "                </tbody>";
  strVar += "            </table>";
  strVar += "";
  strVar += "";
  strVar += "";
  strVar += "            <div >";
  strVar +=
    '                <div class="card text-center" style="background-color: white; color: white;">';
  strVar +=
    '                    <div class="card-header" style="background-color: #426CB4;color: white">';
  strVar +=
    '                        <ul class="nav nav-tabs card-header-tabs">';
  strVar += '                            <li class="nav-item" >';
  strVar +=
    '                                <a class="nav-link active" href="#" style="color: black" onclick="$(\'#suite\').show();$(\'#hotel\').hide();">Itinéraire</a>';
  strVar += "                            </li>";
  strVar += '                            <li class="nav-item">';
  strVar +=
    '                                <a class="nav-link" href="#" style="color: black" onclick="$(\'#suite\').hide();$(\'#hotel\').show();">Hotels</a>';
  strVar += "                            </li>";
  strVar += '                            <li class="nav-item">';
  strVar +=
    '                                <a class="nav-link disabled" href="#" style="color: black">Réservations</a>';
  strVar += "                            </li>";
  strVar += "                        </ul>";
  strVar += "                    </div>";
  strVar +=
    '                    <div class="card-body" id="suite" style="background-color: cornflowerblue; color: black; ">';
  strVar += '                        <div class="card-header">';
  strVar +=
    '                            <ul class="nav nav-tabs card-header-tabs">';
  strVar += '                                <li class="nav-item" >';
  strVar +=
    '                                    <a class="nav-link active" href="#" style="color: black" >étape 1</a>';
  strVar += "                                </li>";
  strVar += '                                <li class="nav-item">';
  strVar +=
    '                                    <a class="nav-link" href="#" style="color: black">étape 2</a>';
  strVar += "                                </li>";
  strVar += '                                <li class="nav-item">';
  strVar +=
    '                                    <a class="nav-link disabled" href="#" style="color: black">étape 3</a>';
  strVar += "                                </li>";
  strVar += "                            </ul>";
  strVar += "                        </div>";
  strVar += "                    </div>";
  strVar +=
    '                    <p id="hotel"class="card-text">With supporting text below as a natural lead-in to additional content.';
  strVar +=
    "                        With supporting text below as a natural lead-in to additional content.";
  strVar +=
    "                        With supporting text below as a natural lead-in to additional content.";
  strVar +=
    "                        With supporting text below as a natural lead-in to additional content.";
  strVar +=
    "                        With supporting text below as a natural lead-in to additional content.</p>";
  strVar +=
    '                    <p id="lot"class="card-text " style="height: 150px; background-color: white"></p>';
  strVar += "                    ";
  strVar += "";
  strVar += "";
  strVar += "                </div>";
  strVar += "            </div>";
  strVar += " ";
  strVar += "";

  $("#get_result").html(strVar);
}
