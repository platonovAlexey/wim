var _adaptiveMenu = function(){
	if($(".nav").hasClass('show__nav__header')){
    $(".nav").removeClass('show__nav__header');
    $(".nav__mob__item-close").css('display', 'none');
    $(".nav__mob__item").css('display', 'block');
		}else{
    $(".nav").addClass('show__nav__header');
    $(".nav__mob__item").css('display', 'none');
    $(".nav__mob__item-close").css('display', 'block');
	}
};

$(".nav__mob").on('click', _adaptiveMenu);