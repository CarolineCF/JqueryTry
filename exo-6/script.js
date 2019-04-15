console.log("exercice 6");

$(document).ready(() => {


    var divAlert = ('#alertEmpty');
    var divAlertPass = ('#alertPass');
    var divPass6 = ('#Pass6');
    var emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;;



    $("#send").click(function () {
        var emailUser = $('#inpEmail').val();
        var passUser = $('#inpPass').val();

        if (emailUser === '' || !emailRegex.test(emailUser)) {

            $(divAlert).removeClass('hidden');
        }

        if (passUser === '') {

            $(divAlertPass).removeClass('hidden');
        }
         if (passUser.length < 6) {
            $(divPass6).removeClass('hidden');
        }
        else if (emailUser === 'hello@me.com' && passUser === 'secret8')
        {
            alert('Vous êtes connecté')
        }

        console.log('Email de l\'utilisateur:' + ' ' + emailUser + ' | ' + 'Password de l\'utilisateur:' + ' ' + passUser);

    });



});
