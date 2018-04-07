$(document).ready(function() {
  listerTT();

  $("body").on("click", "[id^=date]", function() {
    $(this).datepicker({ dateFormat: "mm-dd-yy" });
  });

//$("body").delegate(".category", "click", function (event) {
//        $("#get_film").html("<h3>Loading...</h3>");
//        event.preventDefault();
//        var cid = $(this).attr('cid');
//
//        $.ajax({
//            url: "gestionFilms.php",
//            method: "POST",
//            data: {get_seleted_Category: 1, cat_id: cid},
//            success: function (data) {
//                $("#get_film").html(data);
//                if ($("body").width() < 480) {
//                    $("body").scrollTop(683);
//                }
//            }
//        })
//
//    })

  //afficher les circuits
  //    $("a[name=afficherCircuit]").click(function () {
  //
  //       var cid = $(this).prop("id");
  //       $.ajax({
  //            url: "gestionFilms.php",
  //            method: "POST",
  //            data: {get_seleted_Category: 1, cat_id: cid},
  //            success: function (data) {
  //                $("#get_film").html(data);
  //                if ($("body").width() < 480) {
  //                    $("body").scrollTop(683);
  //                }
  //            }
  //        });
  //
  //    });

  // $("#devenirMembre").click();
  //afficherFormulaire();
  //lister();
  //commit
  //film();
  //tous les films
  /*  function film() {
     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {getfilm: 1},
     success: function (data) {
     $("#get_film").html(data);

     }
     });
     }

     //traitement des click des links categorie
     $("body").delegate(".category", "click", function (event) {
     $("#get_film").html("<h3>Loading...</h3>");
     event.preventDefault();
     var cid = $(this).attr('cid');

     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {get_seleted_Category: 1, cat_id: cid},
     success: function (data) {
     $("#get_film").html(data);
     if ($("body").width() < 480) {
     $("body").scrollTop(683);
     }
     }
     });

     });

     //detail films pour achat


     $("body").delegate("#product", "click", function (event) {
     var pid = $(this).attr("pid");
     event.preventDefault();

     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {addToCart: 1, proId: pid},
     success: function (data) {
     count_item();
     //getCartItem();
     $('#product_msg').html(data);

     }
     });
     });
     //ajouter les films au panier
     //par utilisateur
     count_item();
     function count_item() {
     $.ajax({
     url: "gestionFilms.php",
     method: "POST",
     data: {count_item: 1},
     success: function (data) {
     $(".badge").html(data);
     }
     });
     }










     */
});
