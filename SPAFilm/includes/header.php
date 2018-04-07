<?php
include_once "includes/init.php";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Filmatec</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <script src="assets/js/jquery-1.10.2.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="assets/js/custom.js"></script>
        <script language="javascript" src="js/global.js"></script>
        <script src="js/main.js"></script>
        <link rel="stylesheet" href="css/films.css" type="text/css" />
        <link rel="stylesheet" href="style.css" type="text/css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>

        <div class="wait overlay">
            <div class="loader"></div>
        </div>                     


        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.php">FilmaTec</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="index.php">Accueil</a></li>

<?php if (!logged_in()) : ?>
                            <li><a href="login.php">Se connecter</a></li>
                            <li><a href="register.php">Devenir membre</a></li>
                        <?php else : ?>							
                            <li><a href="logout.php">Deconnecter</a></li>
                            <li><a href=""><?php echo "Bonjour " . get_name($_SESSION['email']); ?></a></li>



<?php endif; ?>



                    </ul>

                    <ul class="nav navbar-nav navbar-right navbar-fixed">

<?php if (!logged_in()) : ?>
                            <li> <a href="login.php"><span class="glyphicon glyphicon-shopping-cart"></span>Panier<span class="badge">0</span></a>		
                            <?php elseif(get_name($_SESSION['email'])!="admin"&&logged_in())  : ?>							
                            <li> <a href="cart.php"><span class="glyphicon glyphicon-shopping-cart"></span>Panier<span class="badge">0</span></a>


                                
<?php endif; ?>   






                            </div>
                        </li>

                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

