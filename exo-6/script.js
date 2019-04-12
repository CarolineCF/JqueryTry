console.log("exercice 6");

$(document).ready(() => {


    var divAlert = ('#alertEmpty');
    var divAlertPass = ('#alertPass');

    $(divAlert).hide();
    $(divAlertPass).hide();

    $("#send").click(function () {
        var emailUser = $('#inpEmail').val();
        var passUser = $('#inpPass').val();

        if ($("#inpEmail").val() === '') {

            $(divAlert).show();
        }

        if ($("#inpPass").val() === '') {

            $(divAlertPass).show();
        }

        console.log('Email de l\'utilisateur:' + ' ' + emailUser + ' | ' + 'Password de l\'utilisateur:' + ' ' + passUser);

    });



});
