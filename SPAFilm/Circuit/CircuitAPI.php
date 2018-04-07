<?php

require_once("../includes/init.php");
require_once("../includes/modele.inc.php");
$tabRes = array();
global $tabRes;
$requete = "SELECT * FROM tabfilms ";
$tabRes['action'] = "afficherCircuits";
$param = "";

if (isset($_GET['idf'])) {
    $param = $_GET['idf'];
    $requete=$requete." WHERE idf=?";
}
else if (isset($_GET['idf'])) {
    $param = $_GET['idf'];
    $requete=$requete." WHERE idf=?";
} 

$params = array();
if ($param !== "") {
    $params = array($param);
}

try {
    $unModele = new circuitModel($requete, $params);
    $stmt = $unModele->executer();
    $tabRes['affichageCircuits'] = array();
    while ($ligne = $stmt->fetch(PDO::FETCH_OBJ)) {
        $tabRes['affichageCircuits'][] = $ligne;
    }
} catch (Exception $e) {
    $tabRes['affichageCircuits'][] = $e;
} finally {
    unset($unModele);
}
echo json_encode($tabRes);

