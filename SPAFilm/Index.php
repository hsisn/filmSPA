<?php
include_once 'includes/init.php';
?>

<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta http-equiv='content-type' content='text/html; charset=UTF-8'>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Filmatec</title>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="/resources/demos/style.css">
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <link rel='stylesheet' href='./js/style.css'>
        <script src='js/main.js' type='text/javascript'></script>
        <script src='./js/global.js'></script>
        <link rel='stylesheet' href='css/style.css'>



        <script src='Thematique/ThematiqueControleurVue.js' type='text/javascript'></script>
        <script src='Thematique/ThematiqueRequetes.js' type='text/javascript'></script>



        <script src='Utilisateur/UtilisateurControleurVue.js' type='text/javascript'></script>
        <script src='Utilisateur/UtilistauerRequetes.js' type='text/javascript'></script>

        <script src="Panier/PanierControleurVue.js" type="text/javascript"></script>
        <script src="Panier/PanierRequetes.js" type="text/javascript"></script>

        <link rel='stylesheet' href='Untitled_fichiers/ionicons.css'>
        <link rel='stylesheet' href='Untitled_fichiers/footer-servitech.css'>
        <link rel='stylesheet' href='Untitled_fichiers/aos.css'>

        <script src='Circuit/CircuitAPIJQuery.js' type='text/javascript'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.js'></script>


        <script src="https://cdn.ckeditor.com/4.9.1/standard/ckeditor.js"></script>
    </head>

    <body>
        <div>
            <div style='display: inline'>
                <img src='./images/logo.png' alt='logo' style='float: left'>
            </div>
            <br>
            <br>
            <br>


            <nav class='navbar' style='background-color: cornflowerblue;float: left; width:80%'>
                <div class='container'>
                    <div class='navbar-header'>
                        <div class='container-fluid' >
                            <ul class='nav navbar-nav ' >
                                <li class='active' ><a href='index.php'  ><span class='glyphicon glyphicon-home' style='font-size: 25px; color: white'></span></a></li>
                                <li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#' style='color: white' onclick="listerTT();">Films <span class='caret'></span></a>
<!--                                    <ul class='dropdown-menu'>
                                        <li><a href='#'>Circuit-1</a></li>
                                        <li><a href='#'>Circuit-2</a></li>
                                        <li><a href='#'>Circuit-3</a></li>
                                    </ul>-->
                                </li>
                                <li class='dropdown'><a class='dropdown-toggle' data-toggle='dropdown' href='#' style='color: white'>Catégories <span class='caret'></span></a>
                                    <ul class='dropdown-menu'>
                                        <li><a href="#" class='category' cid='ACTION'>Action</a></li>
                                <li><a href="#"  cid='DRAME'>Drame at répertoire</a></li>
                                <li><a href="#"  cid='COMEDIE'>Comédie</a></li>
                                <li><a href="#"  cid='SCIENCE FICTION'>Science-ﬁction</a></li>
                                <li><a href="#"  cid='HORREUR'>Horreur</a></li>
                                <li><a href="#"  cid='SUSPENSE'>Suspense</a></li> 
                                <li><a href="#"  cid='POUR LA FAMILLE'>Pour la famille</a></li>

                                    </ul>
                                </li>
                                <li><a href='#' style='color: white'>Nous contacter</a></li>
                            </ul>

                            <ul id='devenirMembre' class='nav navbar-nav navbar-right'>
                                <li id="register"><a  href='#' style='color: white' onClick='formulaireregister();'><span class='glyphicon glyphicon-user'></span> Devenir membre</a></li>

                                <?php if (!logged_in()) : ?>
                                    <li><a href='#' style='color: white' onClick='formulairelogin();'><span class='glyphicon glyphicon-log-in'></span> Se connecter</a></li>
                                <?php else : ?>
                                    <li><a href='#' style='color: white' onClick='logoutU();'>Deconnecter</a></li>
                                    <li><a style='color: white' href=''><?php echo 'Bonjour  ' . $_SESSION['email']; ?></a></li>
                                    <script> $('#register').hide();</script>
                                <?php endif; ?>



                                <?php if (!logged_in()) : ?>
                                    <li> <a href='#' style='color: white' onClick='formulairelogin();'><span class='glyphicon glyphicon-shopping-cart'></span>Panier<span class='badge'>0</span></a>  </li>			
                                <?php elseif ($_SESSION['email'] != "admin@admin.com" && logged_in()) : ?>							
                                    <li> <a href='#' style='color: white' onClick='listerPanier();'><span class="glyphicon glyphicon-shopping-cart"></span>Panier<span  class="badge">0</span></a> </li>                          
                                <?php endif; ?>                                                                                                                                               





                            </ul>


                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <br>    <br>
                <?php include './caroussel/code.php' ?>
                <br>    

                <br>

                <?php if (logged_in() && $_SESSION['email'] == 'admin@admin.com') : ?>

                    <div class='col-md-2 col-md-12' style="float: left">
                        <div id='get_cat'>

                            <div class='nav nav-pills nav-stacked'>
                                <li class='active cat'><a href='#' onclick="listerFilms();"><span class='glyphicon glyphicon-cog'></span>Dashboard</a></li>
                                <br>
                                <div class="container">
                                    <div class="row">
                                        <a href="#" class="btn btn-primary a-btn-slide-text" onclick="afficherFormulaire();" title="ajouter">
                                            <span  class="glyphicon glyphicon-plus" aria-hidden="true" ></span>

                                        </a>
                                        <a href="#" class="btn btn-primary a-btn-slide-text" onclick="listerFilms();" title="lister">
                                            <span  class="glyphicon glyphicon-th-list" aria-hidden="true"></span>

                                        </a>

                                    </div>

                                </div>




                            </div>
                        </div>
                    </div>							                         


                <?php endif; ?>


                <div class='container-fluid'>

                    <div class='row'>


<!--                        <div class="col-md-2 col-md-12" style="float: left">
                            <div id="get_category">
                            </div>
                            <div class="nav nav-pills nav-stacked">
                                <li class="active"><a href="#"><h4>Categories</h4></a></li>
                                <li><a href="#" class='category' cid='ACTION'>Action</a></li>
                                <li><a href="#" class='category' cid='DRAME'>Drame at répertoire</a></li>
                                <li><a href="#" class='category' cid='COMEDIE'>Comédie</a></li>
                                <li><a href="#" class='category' cid='SCIENCE FICTION'>Science-ﬁction</a></li>
                                <li><a href="#" class='category' cid='HORREUR'>Horreur</a></li>
                                <li><a href="#" class='category' cid='SUSPENSE'>Suspense</a></li> 
                                <li><a href="#" class='category' cid='POUR LA FAMILLE'>Pour la famille</a></li>



                            </div> 


                        </div>-->



                            <?php if (logged_in() && $_SESSION['email'] == 'admin@admin.com') : ?>
                        <div class='col-md-10 col-md-12'>


                            <?php else : ?>    
                            <div class='col-md-12 col-md-12'>
                            <?php endif; ?>


                                <div class='row'>


                                    <div class='col-md-12 col-md-12' id='messages'>
                                    </div>


                                </div>

                                <div class='panel panel-success'>
                                    <div class='panel-heading'> <span style='font-weight: bold;font-size: 15px;' id='sommaire' >  </span></div>


                                    <div id='conteneur' class='panel-body'>
                                        <div id='get_result'>


                                            <!--  ici les amis tous  nos resultats  -->        


                                        </div>







                                    </div>
                                    <div class='panel-footer'>&copy; 2018</div>
                                </div>
                                <div class='col-md-1'></div>
                            </div>
                        </div>

                        <?php
                        include_once 'includes/footer.php';
                        ?>
                    </div>
                </div>
