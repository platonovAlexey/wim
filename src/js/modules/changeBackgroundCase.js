$(window).scroll(function(){
    if($(window).scrollTop() > '50'){
        $('.mvideo-header-mask').css('background', 'rgba(95,31,155, 0.0)');
    }
    if ($(window).scrollTop() > '150') {
        $('.mvideo-header-mask').css('background', 'rgba(95,31,155, 0.2)');
    } 
    if($(window).scrollTop() > '200'){
        $('.mvideo-header-mask').css('background', 'rgba(95,31,155, 0.4)');
    } 
    if($(window).scrollTop() > '250'){
        $('.mvideo-header-mask').css('background', 'rgba(95,31,155, 0.6)');
    } 
    if($(window).scrollTop() > '300'){
        $('.mvideo-header-mask').css('background', 'rgba(95,31,155, 0.8)');
    }
    
});