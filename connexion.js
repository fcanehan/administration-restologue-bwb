$("form").submit(function(event){
    //Supprime l'envoie du formulair
    event.preventDefault();
    //Call ma fonction login
    login();
});

//Best function ever !
function login(){
    // Definie un tableau pour la comparaison
    var users = {
        username : $("#username").val(),
        password : $("#password").val(),
        connected : true
    };

    console.log(users)

    $.ajax({
        type: "POST",
        dataType : 'json',
        url : "http://moi.bwb:3000/connected",
        data : users,
        success : function(retour){
            window.location.href = "index.html";
        },
        error : function(param1, param2){
           alert('Oups .. Fail d\'authentification, veuillez réessayer <3');
        }
    
    });
}
