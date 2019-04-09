console.log("exercice 3");

$(document).ready(() =>{


    $('h1').text('CARO AIRLINE'); // remplace le titre
    $('#tagline').text('Quittez cette terre solaire, rejoignez le froid polaire'); // remplace la tagline
    $('#myNavbar > ul:first').remove(); // efface la nav bar en gardant le login
    $('.glyphicon-log-in').removeClass('glyphicon-log-in').addClass('glyphicon glyphicon-leaf')// changer le glyphicon 
    $('footer > p').text('Copyright 2017').css({ 'font-weight': 'bold', 'color' : 'red'});// remplacer le <p> dans le footer et mettre le text en gras et en rouge
    $('#work1 > .col-sm-3 > *').text('Mon Projet');// remplacer tout les <p> de la premiere ligne d'images par un "Mon projet"
    rename(); // numéroter chaque <p>
    $('img[src="https://placehold.it/150x80?text=IMAGE"]').attr('src','mtFuji.jpg');// Changer toute les images du projet par une autre
    $('#work1 > div:nth-child(1) > img').clone().attr('src','lakeTanuki.png').css({ 'height': '500px' }).appendTo('body').insertBefore('#work1'); /* clone d'une div contenant un <p> et un <img src>
     modif de l'image et postionnement de la div avant l'id work1 */
    
});
//Petit bonus : ajouter le numéro du projet à chaque projet
function rename() {
    var i = 0;
    $('.col-sm-3 > p').each(function () {
 
        $(this).text('Mon projet' + ' '+i);
 
        i++
    })
 }