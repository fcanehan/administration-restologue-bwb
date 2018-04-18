$(document).ready(function () {
    
   

     
        $.ajax({
            
            url: "http://192.168.1.50:3000/cartes/get",
            dataType: "json",
            success : function(data){
                loaddata(data);
                console.log(data);
            },
            error : function(param1, param2){
                alert("¯\\_(ツ)_/¯");
            }
        }); 
            

function loaddata(listeDeCarte){
    for(var i = 0 ; i < listeDeCarte.length ; i++){
        var carte = listeDeCarte[i];
        var menu = listeDeCarte[i].listeDeMenu;
        var id_carte = "aPlusSousLBus("+ carte.id + ");";
        var update = "update("+ carte.id + ");";



        $("#yolo").append(
            $('<tr>')
            .append($("<td>").text(carte.id))
            .append($("<td>").text(carte.titre))
            .append($("<td>").append($("<button>").addClass("btn btn-warning").attr("onclick", update).text("Mettre a jour")).append($("<button>").addClass("btn btn-danger").attr("onclick", id_carte).text("Supprimer")))
            );
    }
}
     

//     $('#tableMenu tbody').on( 'click', 'button', function () {
//         var data = table.row( $(this).parents('tr') ).data();
//         alert( "ID = " + data[0] );
//         var monid = data[0];
//     } );

//     var table = $('#tableMenu').DataTable( 
//         {
            
//             "ajax" : {
//                 url: 'http://julian.bwb:3000/cartes/get',
//                 dataSrc: 'data',
//             },
//         "responsive": true,   
//         "columnDefs": [ {
//             "targets": -1,
//             "data": null,
//             "defaultContent": "<button class=\"btn btn-warning\" id=\"update\">Update!</button> <button class=\"btn btn-danger\">Delete!</button>"
//         } ]       
//         }
//  );

    $('#tableMenu').DataTable( {

    } );
} );





// Function get - Get id pour les réstituer dans les value dans le form
function get(id){



    $.ajax({
        type: "GET",
        url : "http://192.168.1.50:3000/cartes/" + id + "/get",
        
        
        success : function(data){
            var datatable = data;
            console.log(datatable);
        },
        error : function(param1, param2){
            alert('OUPS ¯\\_(ツ)_/¯');
        }

    });


}

// Function add - Ajoute un menu, les entées plats dessert et leur prix
function add(){

}

//Function update - Met a jours les données d'un menu
function update(id){
    
}
// Dunction 
function del(id){

}

$(document).ready(function () {
       $.ajax({
        type: "GET",
        url : "http://192.168.1.46:3000/verify",
        dataType : 'json',
        
        success : function(data){
            isConnected(data);
        },
        error : function(param1, param2){
            alert('L\'authentification à échoué ¯\\_(ツ)_/¯');
        }
    });
});

function isConnected(users){
    if(users.connected){
        return true;
        alert('GG ¯\\_(ツ)_/¯');
    }else{
        window.location.href = "connexion.html";
        return false;
    }
}


function aPlusSousLBus(id){
    $.ajax({
        type: "POST",
        url : "http://192.168.1.50:3000/cartes/" + id +"/remove",
        
        
        success : function(resultat, statut){
                alert("la carte a bien été supprimée"),
                  climatiseur("body");
              },
        error : function(param1, param2){
            alert('OUPS ¯\\_(ツ)_/¯');
        }
    });
}

function climatiseur(div){ 
    $(div).load(window.location.href);
}


// Function add - Ajoute un menu, les entées plats dessert et leur prix
function add(){
    var coucou =  new Date().getTime();
    event.preventDefault();

    var menu = [ {
        id : coucou,
        titre : "random",
        entree:{
            nom: $("#entreeInput").val(),
            prix:$("#entreePrix").val()
        },
        plat:{
            nom:$("#platInput").val(),
            prix:$("#platPrix").val()
        },
        dessert:{
            nom:$("#dessertInput").val(),
            prix: $("#dessertPrix").val()
        }         
    }];

    var carte = {
        titre : $("#titreIinput").val(),
        listeDeMenu : menu
    };
 
    console.log(carte);

    $.ajax({
        type: "POST",
        url: "http://192.168.1.50:3000/cartes/add",
        dataType: "json",
        data: carte,
        success: function(data){
            alert("GG !" );
            climatiseur("body");
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
}