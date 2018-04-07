<?php
require_once "connexion.inc.php";
class circuitModel
{
    private $requete;
    private $params;
    private $connexion;
    public $lastID;

    public function __construct($requete = null, $params = null)
    {
        $this->requete = $requete;
        $this->params = $params;
    }

    public function obtenirConnexion()
    {
        $maConnexion = new Connexion("localhost", "root", "", "bdfilms");
        $maConnexion->connecter();
        return $maConnexion->getConnexion();
    }

    public function executer()
    {
        $this->connexion = $this->obtenirConnexion();
        $stmt = $this->connexion->prepare($this->requete);
        $stmt->execute($this->params);
        $this->lastID=$this->connexion->lastInsertId();
        $this->deconnecter();
        return $stmt;
    }
    public function deconnecter()
    {
        unset($this->connexion);
    }

    public function verserFichier($dossier, $inputNom, $fichierDefaut, $chaine)
    {
        $dossier = "../$dossier/";
        $nomPochette = sha1($chaine . time());
        $pochette = $fichierDefaut;
        if ($_FILES[$inputNom]['tmp_name'] !== "") {
            //Upload de la photo
            $tmp = $_FILES[$inputNom]['tmp_name'];
            $fichier = $_FILES[$inputNom]['name'];
            $extension = strrchr($fichier, '.');
            @move_uploaded_file($tmp, $dossier . $nomPochette . $extension);
            // Enlever le fichier temporaire charg�
            @unlink($tmp); //effacer le fichier temporaire
            $pochette = $nomPochette . $extension;
        }
        return $pochette;
    }
    public function enleverFichier($dossier, $pochette)
    {
        if ($pochette != "avatar.jpg") {
            $rmPoc = "../$dossier/" . $pochette;
            $tabFichiers = glob("../$dossier/*");
            //print_r($tabFichiers);
            // parcourir les fichier
            foreach ($tabFichiers as $fichier) {
                if (is_file($fichier) && $fichier == trim($rmPoc)) {
                    // enlever le fichier
                    unlink($fichier);
                    break;
                }
            }
        }
    }
} //fin de la classe
