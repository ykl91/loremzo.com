// $(document).ready(function(){
//     $(".menu-icon").on("click", function(){
//         $("nav ul").toggleClass("showing");
//     });
// });

// $(window).on("scroll", function(){
//     if($(window).scrollTop()){
//         $('nav').addClass('black');
//     }
//     else{
//         $('nav').removeClass('black');
//     }
// })

/****Control filters*******/

(function(){
    'use strict';

    var $projects = $('.projects');
    
    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){
        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

/*****Control the hover inside the cards****/
    $('.card').mouseenter(function(){
        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top': '0'});
    }).mouseleave(function(){
        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top': '100%'});
    });
})(jQuery);


