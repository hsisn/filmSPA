<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

require_once("../includes/modele.inc.php");
$tabRes = array();
//$idf=$_GET['id'];
function enregistrer() {
    global $tabRes;
    $titre = $_POST['titre'];
    $duree = $_POST['duree'];
    $res = $_POST['res'];
    $cat = $_POST['cat'];
    $prix = $_POST['prix'];
    $lien = $_POST['lien'];

    try {
        $unModele = new circuitModel();
        $pochete = $unModele->verserFichier("pochettes", "pochette", "avatar.jpg", $titre);
        $requete = "INSERT INTO tabfilms VALUES(0,?,?,?,?,?,?,?)";
        $unModele = new circuitModel($requete, array($titre, $duree, $res,$cat,$prix,$pochete,$lien));
        $stmt = $unModele->executer();
        $tabRes['action'] = "enregistrer";
        $tabRes['msg'] = "film bien enregistré";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function listerThematique() {
    global $tabRes;
    $tabRes['action'] = "lister";
    $tabRes['email'] = $_SESSION["email"];
    $requete = "SELECT * FROM tabfilms";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['listetheme'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['listetheme'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function listerFilms() {
    global $tabRes;
    $tabRes['action'] = "listerFilms";
    $tabRes['email'] = $_SESSION["email"];
    $requete = "SELECT * FROM tabfilms";
    try {
        $unModele = new circuitModel($requete, array());
        $stmt = $unModele->executer();
        $tabRes['film'] = array();
        while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
            $tabRes['film'][] = $ligne;
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function getListThematique() {
    global $tabRes;
    listerThematique();
    return $tabRes['listetheme'];
}

 function enlever(){
  global $tabRes;
  
  $idf= $_POST['idfilm'];
  
  try{
  $requete="SELECT * FROM tabfilms WHERE idf=?";
  $unModele=new circuitModel($requete,array($idf));
  $stmt=$unModele->executer();
  if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
  $unModele->enleverFichier("pochettes",$ligne->pochette);
  $requete="DELETE FROM tabfilms WHERE idf=?";
  $unModele=new circuitModel($requete,array($idf));
  $stmt=$unModele->executer();
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." bien enleve";
  }
  else{
  $tabRes['action']="enlever";
  $tabRes['msg']="Film ".$idf." introuvable";
  }
  }catch(Exception $e){
      echo $e;
  }finally{
      echo $idf;
  unset($unModele);
  }
  }

  function fiche(){
  global $tabRes;
  $idf=$_POST['idfilm'];
  $tabRes['action']="fiche";
  $requete="SELECT * FROM tabfilms WHERE idf=?";
  try{
  $unModele=new circuitModel($requete,array($idf));
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
      echo $e;
  }finally{
  unset($unModele);
  }
  }

  function modifier(){
      
  global $tabRes;
  $titre=$_POST['titre'];
  $duree=$_POST['duree'];
  $res=$_POST['res'];
  $idf=$_POST['idf'];
  $cat=$_POST['cat'];
  $lien=$_POST['lien'];
  $prix=$_POST['prix'];
  
 
 
  try{
  //Recuperer ancienne pochette
  $requette="SELECT pochette FROM tabfilms WHERE idf=?";
  $unModele=new circuitModel($requette,array($idf));
  $stmt=$unModele->executer();
  $ligne=$stmt->fetch(PDO::FETCH_OBJ);
  $anciennePochette=$ligne->pochette;
  $pochette=$unModele->verserFichier("pochettes", "pochette",$anciennePochette,$titre);

  $requete="UPDATE tabfilms SET titre=?,duree=?, res=?, cat=?, prix=?, pochette=?, lienFilm=? WHERE idf=?";
  $unModele=new circuitModel($requete,array($titre,$duree,$res,$cat,$prix,$pochette,$lien,$idf));
  $stmt=$unModele->executer();
  $tabRes['action']="modifier";
  $tabRes['msg']="Film $idf bien modifie";
  }catch(Exception $e){
      echo $e;
  }finally{
      unset($unModele);
  }
  } 
//******************************************************
//Contr�leur

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    switch ($action) {
        case "enregistrer" :
            enregistrer();

            break;
        case "lister" :
            listerThematique();

            break;
        case "listerFilms" :
            listerFilms();

            break;
        
        case "enleverF" :
            enlever();
            
            break;
        case "formulaireModifie" :
            fiche();
            
            break;
         case "modifier" :
            modifier();
            
            break;
        
        
    }
}
echo json_encode($tabRes);
