<?php

session_start();
require_once("../includes/modele.inc.php");
$tabRes = array();

function enregistrerpanier() {

    global $tabRes;
    $p_id = $_POST["idf"];

    try {

        if (isset($_SESSION["email"])) {

            $user_id = $_SESSION["email"];

            $requete = "SELECT * FROM panier WHERE idf =? AND email =?";
            $unModele = new circuitModel($requete, array($p_id, $user_id));
            $stmt = $unModele->executer();
            $count = $stmt->rowCount();
            if ($count > 0) {

                $tabRes['msg'] = " film deja ajouté  Continue votre selection..! ";

                $tabRes['action'] = "enregistrerPani";
            } else {

                $requete = "INSERT INTO panier VALUES (0,?,?)";
                $unModele = new circuitModel($requete, array($p_id, $user_id));
                $stmt = $unModele->executer();
                $tabRes['msg'] = " circuit  Ajouter..! ";

                $tabRes['action'] = "enregistrerPani";
            }
        }
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

function listerPanier() {
    global $tabRes;
    $tabRes['action'] = "listerP";
    ////////////////////////////

    if (isset($_SESSION["email"])) {
        try {
            $email = $_SESSION["email"];
            $requete = "SELECT a.idf,a.pochette,a.titre,a.prix,b.id FROM tabfilms a,panier b WHERE a.idf=b.idf AND b.email='$email'";
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
}

/////////////////////////
//Count User panier item
function compterP() {
    global $tabRes;

    //if (isset($_POST["count_item"])) {


    try {
        if (isset($_SESSION["email"])) {
            $adr = $_SESSION["email"];
        }

        $requette = "SELECT * FROM panier WHERE email = ? and idf is not null";
        $unModele = new circuitModel($requette, array($adr));
        $stmt = $unModele->executer();

        $count = $stmt->rowCount();
        $_SESSION["count"] = $count;
        $tabRes['action'] = "compterP";
        $tabRes['compt'] = $count;
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

///////////////////////////
function removePanier() {
    global $tabRes;
    $id = $_POST['idp'];
    

    $tabRes['action'] = "removeP";
    try {
    if (isset($_SESSION["email"])) {
           $email=$_SESSION['email'];
        }
    $requete = "Delete FROM panier where idf=? and email=?";
    
        $unModele = new circuitModel($requete, array($id,$email));
        $stmt = $unModele->executer();
        $tabRes['msg'] = "Panier supperimer ...";
    } catch (Exception $e) {
        echo $e;
    } finally {
        unset($unModele);
    }
}

//******************************************************
//Contr�leur
$action = $_POST['action'];
switch ($action) {
    case "enregistrerPani" :
        enregistrerpanier();
        break;
    case "compterP" :
        compterP();
        break;

    case "removeP" :
        removePanier();
        break;

    case "listerP" :
        listerPanier();
        break;
}
echo json_encode($tabRes);
?>