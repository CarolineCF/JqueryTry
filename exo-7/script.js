console.log("exercice 7");
$(document).ready(() => {



  addLineToTable(data);


});

  
function getData() {
  return data; // data is defined in DATA.js file
}
console.log(data);

 
 

function addLineToTable(source){
  $(source).each(function(index, item) { //recupération de chacun des items et index de mon tableau d'objets (source)
   
    $('tbody').append('<tr>\
    <td>' + item.email + '</td>\
    <td>' + item.name.first +'</td>\
    <td>' + item.name.last +'</td>\
    <td>'  + item.phone +' </td>\
    </tr>');  // item.email = je récupère sur mon item la valeur de sa clef email  | item.name.first = je récupère dans l'item la clef name et la sous clef first
    



});


}

