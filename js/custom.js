$('.form_toggler').on('click',function(){
    $(this).toggleClass('form_open');
    $('.form_cont').toggle('slow');
});

// video player
$(document).ready(function(){
    $('.venobox').venobox(); 
    
});
