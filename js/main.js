(function() {
  "use strict";

  let css_blanc = {
    'background-color': 'black',
    'font-size': 'bolder',
    'border': 'solid 1px white',
    'color': 'white',
    'height': '30px',
    'width': '30px',
    'text-align': 'center'
  };
  let css_noir = {
    'background-color': 'yellow',
    'font-size': 'bolder',
    'border': 'solid 1px black',
    'color': 'black',
    'height': '30px',
    'width': '30px',
    'text-align': 'center'
  };
  let css_enhanced = {
    'background-color': 'red',
    'font-size': 'bolder',
    'border': 'solid 1px black',
    'color': 'white',
    'height': '30px',
    'width': '30px',
    'text-align': 'center'
  };

  var fajitas = 0;
  function increment(){
    fajitas = fajitas +1;
    return fajitas;
  }



$(document).ready(function() {
  /* On peut travailler sur le DOM */

  function Damier(sizeX, sizeY, dest){
    let damier = $(dest);
    for (let i = 0; i < sizeX; ++i){
      let tr = $('<tr />');
      for (let j = 0; j < sizeY; ++j){
        tr.append($('<td />').addClass((((j+i)%2)==0 ? 'case-blanche' : 'case-noire')).html('O'));
      }
      damier.append(tr);
    }
  }

  Damier(4,4, '#damier1');
  Damier(8,8, '#damier2');




  let case_blanche=$('.case-blanche');
  let case_noire=$('.case-noire');

  $('.case-blanche').css(css_blanc).hover(function(){
    $(this).css(css_enhanced);
  }, function(){
    $(this).css(css_blanc);
  });

  $('.case-noire').css(css_noir).hover(function(){
    $(this).css(css_enhanced);
  }, function(){
    $(this).css(css_noir);
  });

  $('.fajitas').click(function(){
    $(this).append(increment());
  });
});




}) ();
