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


    $(document).ready(function() {
        /* On peut travailler sur le DOM */

        new Damier(3,3, '#damier1');
        new Grid(10,10, '#damier2');
        //new Damier(8,8, '#damier2');
        //new Damier(30,10, '#damier3');

        $('.case-blanche').css(css_blanc).hover(function () {
            $(this).css(css_enhanced);
        }, function () {
            $(this).css(css_blanc);
        });

        $('.case-noire').css(css_noir).hover(function () {
            $(this).css(css_enhanced);
        }, function () {
            $(this).css(css_noir);
        });
    });




}) ();
