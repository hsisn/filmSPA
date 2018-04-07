<?php

require_once("../includes/modele.inc.php");
require_once("../includes/init.php");


$tabRes = array();

function login() {
    global $tabRes;
    $email = $_POST['email'];
    $password = md5($_POST['password']);

    try {
        $unModele = new circuitModel();
        $requete = "SELECT email, password FROM member WHERE email =? AND password =? ";

        $unModele = new circuitModel($requete, array($email, $password));
        $stmt = $unModele->executer();
        $count = $stmt->rowCount();
        if ($count == 1) {
            if (isset($_POST['remember'])) {
                setcookie('email', $email, time() + 86400);
            }

            $_SESSION['email'] = $email;

            //redirect("index.php");
            $tabRes['msg'] = "utilisateur authentifier avec success";
        } else {
            $tabRes['msg'] = "username ou Mot de passe errone.";
        }

        $tabRes['action'] = "login";
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

function register() {
    global $tabRes;
    $tabRes['action'] = "register";
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $display_name = $_POST['display_name'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    //$confirm_password= $_POST['confirm_password'];




    try {
        $unModele = new circuitModel();

        $requete = "INSERT INTO member VALUES(0,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($first_name, $last_name, $display_name, $email, $password.null));
        $stmt = $unModele->executer();
        $tabRes['action'] = "register";
        $tabRes['msg'] = "utilisateur bien enregistrer";
    } catch (Exception $e) {

        echo $e;
    } finally {
        unset($unModele);
    }





    ///$errors = [];
    /////////////
    /*            if ($_SERVER['REQUEST_METHOD'] == 'POST')
      {
      if (email_exists($email))
      {
      $errors[] = "$email deja enregistrer.";
      $tabRes['msg']=$errors[];
      }

      if (!empty($errors)) {
      foreach ($errors as $error) {
      validation_errors($error);
      }
      }else{
      $sql = "INSERT INTO utilisateur (first_name, last_name, display_name, email, password, date_added)
      VALUES ('$first_name', '$last_name', '$display_name', '$email', '$password', now())";
      $_SESSION["uid"] = mysqli_insert_id($connexion);
      if ($connexion->query($sql) === TRUE) {
      $tabRes['msg']="index";


      } else {
      $tabRes['msg']=set_message("<p>Error: " . $sql . "<br>" . $connexion->error . "</p>");
      }
      $tabRes['msg']=set_message("<p>Error: " . $sql . "<br>" . $connexion->error . "</p>");
      $connexion->close();
      }
      }
     */       //////////////       //////////////
}

function logout() {
    global $tabRes;
    $tabRes['action'] = "logout";

    try {
        session_destroy();

        if (isset($_COOKIE['email'])) {
            unset($_COOKIE['email']);

            setcookie('email', '', time() - 86400);
        }

        $tabRes['msg'] = "deconnecter";
    } catch (Exception $e) {
        echo $e;
    } finally {
        //unset($unModele);
    }
}

//information user connecter
function information() {
    global $tabRes;
    $tabRes['action'] = "infouser";


    if (isset($_SESSION["email"])) {
        $email = $_SESSION["email"];
    } else {
        $email = "";
    }

    $requete = "SELECT last_name,first_name,email FROM member where email=?";
    try {
        $unModele = new circuitModel($requete, array($email));
        $stmt = $unModele->executer();
        $tabRes['information'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['information'][] = $ligne;
        }
    } catch (Exception $e) {
        
    } finally {
        unset($unModele);
    }
}

/* function enlever(){
  global $tabRes;
  $idf=$_POST['numE'];
  try{
  $requete="SELECT * FROM films WHERE idf=?";
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
  $unModele->enleverFichier("pochettes",$ligne->pochette);
  $requete="DELETE FROM films WHERE idf=?";
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." bien enleve";
  }
  else{
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." introuvable";
  }
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  }

  function fiche(){
  global $tabRes;
  $idf=$_POST['numF'];
  $tabRes['action']="fiche";
  $requete="SELECT * FROM films WHERE idf=?";
  try{
  $unModele=new filmsModele($requete,array($idf));
  $stmt=$unModele->executer();
  $tabRes['fiche']=array();
  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
  $tabRes['fiche']=$ligne;
  $tabRes['OK']=true;
  }
  else{
  $tabRes['OK']=false;
  }
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  }

  function modifier(){
  global $tabRes;
  $titre=$_POST['titreF'];
  $duree=$_POST['dureeF'];
  $res=$_POST['resF'];
  $idf=$_POST['idf'];
  try{
  //Recuperer ancienne pochette
  $requette="SELECT pochette FROM films WHERE idf=?";
  $unModele=new filmsModele($requette,array($idf));
  $stmt=$unModele->executer();
  $ligne=$stmt->fetch(PDO::FETCH_OBJ);
  $anciennePochette=$ligne->pochette;
  $pochette=$unModele->verserFichier("pochettes", "pochette",$anciennePochette,$titre);

  $requete="UPDATE films SET titre=?,duree=?, res=?, pochette=? WHERE idf=?";
  $unModele=new filmsModele($requete,array($titre,$duree,$res,$pochette,$idf));
  $stmt=$unModele->executer();
  $tabRes['action']="modifier";
  $tabRes['msg']="Film $idf bien modifie";
  }catch(Exception $e){
  }finally{
  unset($unModele);
  }
  } */
//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
    case "login" :
        login();
        break;
    case "register" :
        register();
        break;
    case "logout" :
        logout();
        break;
    case "infouser" :
        information();
        break;
}
echo json_encode($tabRes);
?>