//requ�tes thematique
function enregistrerF(){
	var formthematique = new FormData(document.getElementById('formEnregthems'));
	formthematique.append('action','enregistrer');
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthematique,
		dataType : 'json', //text pour le voir en format de string
		//async : false,
		//cache : false,
		contentType : false,
		processData : false,
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		   
		}
	});
}

function listerTT(){
    
          $('#sommaire').html("Tous les films"); 
	var formthematique = new FormData();
	formthematique.append('action','lister');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthematique,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
                                       
		},
		fail : function (err){
		}
	});
        
        
}
function listerFilms(){
          $('#sommaire').html("table de controle"); 
	var formthematique = new FormData();
	formthematique.append('action','listerFilms');//alert(formFilm.get("action"));
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthematique,
		contentType : false,
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
                                       
		},
		fail : function (err){
		}
	});
        
        
}


function enleverF(id){
   
	var leForm=document.getElementById('contenuFilm');
	var formthem = new FormData(leForm);
        //var formthem = new FormData();
	formthem.append('action','enleverF');//alert(formthem.get("action"));
        formthem.append('idfilm',id);
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthem,//leForm.serialize(),
		contentType : false, //Enlever ces deux directives si vous utilisez serialize()
		processData : false,
		dataType : 'json', //text pour le voir en format de string
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
                                        listerFilms();
		},
		fail : function (err){
		}
	});
}

function formModifieF(id){
	
	var leForm=document.getElementById('contenuFilm');
	var formFilm = new FormData(leForm);
	formFilm.append('action','formulaireModifie');
        formFilm.append('idfilm',id);
        //alert( 'je suis dans la requete mon id = '+id);
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formFilm,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}

function modifierFilm(){
    
	var leForm=document.getElementById('formEnregthems');
	var formthem = new FormData(leForm);
	formthem.append('action','modifier');
	$.ajax({
		type : 'POST',
		url : 'Thematique/ThematiqueControleur.php',
		data : formthem,
		contentType : false, 
		processData : false,
		dataType : 'json', 
		success : function (reponse){//alert(reponse);
					
					thematiqueVue(reponse);
		},
		fail : function (err){
		}
	});
}
/////////////////////////
function afficherFormulaire(){
        var reponse={"action":"formulaire"};
        	thematiqueVue(reponse);
                $('#modifier').hide();
                $('#divId').hide();
	
}
