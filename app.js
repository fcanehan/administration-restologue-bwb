$(document).ready( function () {
    $('#myTable').DataTable();
} );



$(document).onload(function isConnected (req,res){
    $.ajax({
        type:"GET",
        url :"api.users.bwb",
        dataType :'json',
        success : {
            ;
        },
        error : 
            window.location.href("http://connexion.html");
        }
    });
});

var isConnected = false;
function isConnected (){
    if (connected.val()===true){
        isConnected = true;
        
    }
}


$("#modifier").click(function)