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
        var update = "get("+ carte.id + ");";



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


function add(){
    function getRandomInt(max) {
        return Math.    floor(Math.random() * Math.floor(max));
      }
    coucou =  getRandomInt(100);
    event.preventDefault();

    var menu = [ {
        id : 0,
        titre : "random",
        entres:{
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
        id : 0,
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
            alert(data);
            climatiseur("body");
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
  });
    

}

function get(id){

    function getCarte(id){
    
        $.ajax({
            type: "GET",
            url : "http://192.168.1.50:3000/cartes/" + id + "/get",
                      
            success : function(data){
            loadd(data);
            },
            error : function(param1, param2){
                alert('OUPS ¯\\_(ツ)_/¯');
            }
    
    
        });
    
        function loadd(data){
    
            document.getElementById("idInput").value = data.id
            document.getElementById("titreIinput").value = data.titre
    
        }
    }
    
    function getMenu(id){
        
        $.ajax({
            type: "GET",
            url : "http://192.168.1.50:3000/cartes/" + id + "/menus/get",
                      
            success : function(data){
            loadd(data);
            //console.log(data[0]);
            },
            error : function(param1, param2){
                alert('OUPS ¯\\_(ツ)_/¯');
            }
    
        });
    
        function loadd(data){

    
            /* VALUE INPUT NOM */
            document.getElementById("entreeInput").value = data[0]["entres"]["nom"]
            document.getElementById("platInput").value = data[0]["plat"]["nom"]
            document.getElementById("dessertInput").value = data[0]["dessert"]["nom"]
    
            /* VALUE INPUT PRIX */
            document.getElementById("entreePrix").value = data[0]["entres"]["prix"]
            document.getElementById("platPrix").value = data[0]["plat"]["prix"]
            document.getElementById("dessertPrix").value = data[0]["dessert"]["prix"]
    
        }
    }

    getCarte(id);
    getMenu(id);

}