$(document).ready( function () {
    $('#myTable').DataTable();
} );



$(document).onload(function isConnected (req,res){
    $.ajax({
        type:"GET",
        url :"http://administration.restologue.bwb",
        dataType :'',
        success : {
            (data);
        },
        error : function(){
            window.location.href("http://connexion.html");
        }
    });
});

var isConnected = false;
function isConnected (){
    (while isConnected){
        
    }
}