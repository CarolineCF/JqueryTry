console.log("exercice 4");
$(document).ready(() => {
  $('.btn-danger').on('click', () => {
    var essai = $('.form-control').val();
    alert('Merci' + ' ' + essai + ' ' + 'nous vous tiendrons informé des différentes offres');
  })

  //Au double clique sur la cat products, l'onglet disparaît
  var $volProd = $('#myNavbar > ul:nth-child(1) > li:nth-child(2) > a');
  $($volProd).dblclick(function () {
    $(this).hide();
  });


  //Incrementer le panier de 1 à chaque clique
  var $result = $('#myNavbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a > span')// variable du panier 
  var add = 0;
  $('img').click(function () {
    add++;
    $($result).text(' ' + add);
  })
//mouse tracker sur les images (articles)
  $('img').on('mouseenter', (event) => {
    $(event.currentTarget)
    console.log("L'utilisateur est en train de regarder" + " " + $(event.currentTarget).parents('.panel').find('.panel-footer').text());

  });
  // tracker de keypress 
  $('input').on('keypress', function() {
    console.log('l\'utilisateur est en train de remplir le formulaire Get Deals')

  });

  




});

