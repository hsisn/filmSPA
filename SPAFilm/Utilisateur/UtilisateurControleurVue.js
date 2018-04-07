//vue Utilisateur

function formulaireloginU () {
    
    var resul = "";

   resul+="<div class='container'>";
       resul+="<div id='loginbox' style='margin-top:50px;' class='mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2'>";                    
        resul+="<div class='panel panel-info' >";
            resul+="<div class='panel-heading'>";
                resul+="<div class='panel-title'>Se connecter</div>";
                resul+="<div style='float:right; font-size: 80%; position: relative; top:-10px'><a href='#'>Mot de passe oublie?</a></div>";
            resul+="</div>";     

            resul+="<div style='padding-top:30px' class='panel-body' >";

                resul+="<div style='display:none' id='login-alert' class='alert alert-danger col-sm-12'></div>";

                resul+="<form id='loginform' class='form-horizontal'  role='form'>";
                    resul+="<div style='margin-bottom: 25px' class='input-group'>";
                        resul+="<span class='input-group-addon'><i class='glyphicon glyphicon-user'></i></span>";
                        resul+="<input id='email' type='text' class='form-control' name='email' value='' placeholder='Email'>";
                    resul+="</div>";
                   resul+=" <div style='margin-bottom: 25px' class='input-group'>";
                        resul+="<span class='input-group-addon'><i class='glyphicon glyphicon-lock'></i></span>";
                        resul+="<input id='password' type='password' class='form-control' name='password' placeholder='Password'>";
                    resul+="</div>";
                    resul+="<div class='input-group'>";
                        resul+="<div class='checkbox'>";
                            resul+="<label>";
                                resul+="<input id='remember' type='checkbox' name='remember' value='1'> Souviens-toi de moi";
                            resul+="</label>";
                        resul+="</div>";
                   resul+=" </div>";

                    resul+="<div style='margin-top:10px' class='form-group'>";
                        resul+="<div class='col-sm-4 controls'>";
                            resul+="<input class='btn btn-lg btn-primary btn-block' style='display:inline;'type='button' value='se connecter' onClick='loginU();'>";
                                resul+="</br>";
                                  resul+="</br>";
                                  

                            /////////////facebook connection
                             resul+="<div id='fb-root'></div>";
 resul+="<script>(function(d, s, id) {";
   resul+="var js, fjs = d.getElementsByTagName(s)[0];";
   resul+="if (d.getElementById(id)) return;";
   resul+="js = d.createElement(s); js.id = id;";
   resul+="js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.12&appId=173921999923265&autoLogAppEvents=1';";
   resul+="fjs.parentNode.insertBefore(js, fjs);";
 resul+="}(document, 'script', 'facebook-jssdk'));</script>";
      resul+="<section class='content'>";
          resul+="<div  class='fb-login-button' data-max-rows='1' data-size='large' data-button-type='continue_with' data-show-faces='false' data-auto-logout-link='true' data-use-continue-as='false'></div>";
          //////////////////////////////////////////////
                        resul+="</div>";
                    resul+="</div>";
                resul+="</form>"; 


                resul+="<div class='form-group'>";
                    resul+="<div class='col-md-12 control'>";
                        resul+="<div style='border-top: 1px solid#888; padding-top:15px; font-size:85%' >";
                            resul+="Ne pas avoir de compte! ";
                            resul+="<a href='register.php'>Inscrivez-vous ici</a>";
                        resul+="</div>";
                    resul+="</div>";
                resul+="</div>";    
            resul+="</div>";                     
        resul+="</div>";  
    resul+="</div>";
resul+="</div>";
 $('#get_cat').html("");                        
         $('#get_cat1').html("");
    $('#get_result').html(resul);

    
    
} 



function formulaireregisterU () {
     var resul = "";


resul+="<div class='row'>";
    resul+="<div class='col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3'>";
        resul+="<form role='form' id='registration_form' name='registration_form'>";
            resul+="<h2>Inscrivez vous s'il vous plait <small>C'est gratuit et sera toujours.</small></h2>";
            resul+="<hr class='colorgraph'>";
            resul+="<div class='row'>";
                resul+="<div class='col-xs-12 col-sm-6 col-md-6'>";
                    resul+="<div class='form-group'>";
                        resul+="<input type='text' name='first_name' id='first_name' class='form-control input-lg' placeholder='Prenom' tabindex='1' required>";
                    resul+="</div>";
                resul+="</div>";
                resul+="<div class='col-xs-12 col-sm-6 col-md-6'>";
                    resul+="<div class='form-group'>";
                        resul+="<input type='text' name='last_name' id='last_name' class='form-control input-lg' placeholder='Nom' tabindex='2' required>";
                    resul+="</div>";
                resul+="</div>";
            resul+="</div>";
            resul+="<div class='form-group'>";
                resul+="<input type='text' name='display_name' id='display_name' class='form-control input-lg' placeholder='Nom Afficher' tabindex='3' required>";
            resul+="</div>";
            resul+="<div class='form-group'>";
                resul+="<input type='email' name='email' id='email' class='form-control input-lg' placeholder='courriel' tabindex='4' required>";
            resul+="</div>";
            resul+="<div class='row'>";
                resul+="<div class='col-xs-12 col-sm-6 col-md-6'>";
                    resul+="<div class='form-group'>";
                        resul+="<input type='password' name='password' id='password' class='form-control input-lg' placeholder='Mot de passe' tabindex='5' required>";
                    resul+="</div>";
                resul+="</div>";
                resul+="<div class='col-xs-12 col-sm-6 col-md-6'>";
                    resul+="<div class='form-group'>";
                        resul+="<input type='password' name='confirm_password' id='confirm_password' class='form-control input-lg' placeholder='Confirmer Mot de passe' tabindex='6' required>";
                    resul+="</div>";
                resul+="</div>";
            resul+="</div>";
           /* resul+="<div class='row'>";
                resul+="<div class='col-xs-4 col-sm-3 col-md-3 checkbox'>";
                        
                    resul+="<label>";
                        resul+="<input type='checkbox' required> Vérifie-moi";
                    resul+="</label>";
                resul+="</div>";
                resul+="<div class='col-xs-8 col-sm-9 col-md-9'>";
                    resul+="En cliquant <strong class='label label-primary'>Enregistrer</strong>, vous acceptez le <a href='#' data-toggle='modal' data-target='#t_and_c_m'>Termes et conditions</a> mis en place par ce site, y compris notre utilisation des cookies.";
                resul+="</div>";
            resul+="</div>";*/

            resul+="<hr class='colorgraph'>";
            resul+="<div class='row'>";
                resul+="<div class='col-xs-12 col-md-6'><input type='button' name='submit' value='Enregistrer' class='btn btn-primary btn-block btn-lg' tabindex='7' onClick='registerU();listerTT();'></div>";
                resul+="<div class='col-xs-12 col-md-6'><a href='login.php' class='btn btn-success btn-block btn-lg'>Se connecter</a></div>";
            resul+="</div>";
        resul+="</form>";
    resul+="</div>";
resul+="</div>";

resul+="<div class='modal fade' id='t_and_c_m' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>";
    resul+="<div class='modal-dialog modal-lg'>";
        resul+="<div class='modal-content'>";
            resul+="<div class='modal-header'>";
                resul+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button>";
                resul+="<h4 class='modal-title' id='myModalLabel'>Terms & Conditions</h4>";
            resul+="</div>";
            resul+="<div class='modal-body'>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
                resul+="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque, modi, aliquam nostrum at sapiente consequuntur natus odio reiciendis perferendis rem nisi tempore possimus ipsa porro delectus quidem dolorem ad.</p>";
            resul+="</div>";
            resul+="<div class='modal-footer'>";
                resul+="<button type='button' class='btn btn-primary' data-dismiss='modal'>Je suis d'accord</button>";
            resul+="</div>";
        resul+="</div>";
    resul+="</div>";
resul+="</div>";

           $('#get_cat').html("");                        
         $('#get_cat1').html("");
       $('#get_result').html(resul); 
} 



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

/*function formulaireT() {

    var result = "";

    result += "<div class='col-md-4 col-md-push-4'>";

    result += "<form id='formEnregthems'>";
    result += "<h3>Ajouter une thematique</h3>";
    result += "<div class='form-group'>";
    result += "<label for='nom'>nom:</label>";
    result += "<input type='text' class='form-control' id='nom' name='nom'>";
    result += "</div>";

    result += "<div class='form-group'>";
    result += "<label for='description'>description:</label>";
    result += " <input type='text' class='form-control' id='description' name='description'>";
    result += " </div>";

    result += "<div class='form-group'>";
    result += "<label for='pochette'>image:</label>";
    result += "<input type='file' class='form-control-file' id='pochette' name='pochette' aria-describedby='fileHelp'";
    result += "</div><br><br>";
    result += "<input type='button' class='btn btn-primary' value='Ajouter' onClick='enregistrerT();'><br><br>";
    result += "</form>";
    result += "</div>";

    $('#get_result').html(result);

}
*/
/*function listerT(listetheme) {
    var taille;
        taille = listetheme.length;
    var result = "";

    for (var i = 0; i < taille; i++) {
        result += "<div class='col-md-4'>";
        result += "<div class='panel panel-success'>";
        result += "<div class='panel-heading'>" + "<span style='font-weight: bold;font-size: 15px;'>" + listetheme[i].nom + "</span></div>";
        result += "<div class='panel-body'>";
        result += "<a name='afficherCircuit'  id='" + listetheme[i].id + "' class=\"thumbnail\">	<img src='pochettes/" + listetheme[i].image + "' style='width:400px; height:300px;'></a>";
        result += "</div>";
        result += "</div>";
        result += "</div>";
    }



    $('#get_result').html(result);

}
*/
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
var utilisateurVue = function (reponse) {
    var action = reponse.action;
    switch (action) {
        case "login" :
            //case "enlever" :
            //case "modifier" :
            message(reponse.msg);
            break;
            
        case "flogin" :
            formulaireloginU();
            break;
            
        case "fregister" :
            formulaireregisterU();
            break;
            
             case "register" :
          message(reponse.msg);
            break;
            //case "fiche" :
            //	afficherFiche(reponse);
            //break;

    }
}