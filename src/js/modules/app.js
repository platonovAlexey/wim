// $('.header__wrap__btn').fadeIn(20000);
$(window).ready(function(){
    // setTimeout ("$('.header__wrap__btn').show('drop');",3000);

    var typed = new Typed('.header__title', {
        strings: ['CRM агентство мультиканальной b2c коммуникации'],
        typeSpeed: 30
    });

});


$('.case-section').enllax();
$('.write-section').enllax();
$('.about-middle').enllax();


//animated
new WOW().init();

$( '#my-slider' ).sliderPro();

$('.about-item__link').click(function(e){
    e.preventDefault();
    console.log('click link');
    $('.my-slider-wrapper').show(500);
    // $('.slider-pro').show(500);
});

$('.modal_close').click(function(e){
    e.preventDefault();
    $('.my-slider-wrapper').hide(500);
});

$(document).ready(function() { 
    $('#my-slider').sliderPro({
        width: '100%',
        height: '100%',
        forceSize: 'fullWidth',
        autoplay: false,
        orientation: 'vertical',
        loop: false,
        arrows: true,
        buttons: false,
        responsive: true,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        breakpoints: {
            800: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 270,
                thumbnailHeight: 100
            },
            500: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
    
    
    // // вся мaгия пoсле зaгрузки стрaницы
	// $('.about-item__link').click( function(event){ // лoвим клик пo ссылки с id="go"
	// 	event.preventDefault(); // выключaем стaндaртную рoль элементa
	// 	$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
	// 	 	function(){ // пoсле выпoлнения предъидущей aнимaции
	// 			$('#modal_form') 
	// 				.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
	// 				.animate({opacity: 1, top: '0%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
	// 	});
	// });
	// /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	// $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
	// 	$('#modal_form')
	// 		.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
	// 			function(){ // пoсле aнимaции
	// 				$(this).css('display', 'none'); // делaем ему display: none;
	// 				$('#overlay').fadeOut(400); // скрывaем пoдлoжку
	// 			}
	// 		);
	// });
});


