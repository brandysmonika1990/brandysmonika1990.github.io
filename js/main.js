//Js dla scrolowania menu

$(function(){
	var okno = $(window);
	var menu = $('#main-nav');
	
	
	if(okno.scrollTop() >= 100 ) {
		menu.addClass('scroll');
	}
	
	okno.scroll(function() {
		//console.log(okno.scrollTop());
		
		if(okno.scrollTop() >= 100) {
		   	menu.addClass('scroll');
		   } else {
			menu.removeClass('scroll');
		   }
	});
	
	/*smooth scroll*/	
	
	$(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		
		var menuHeight = $('#main-nav').height();
		//sprawdzi jaka jest wysokość menu
		
		
		console.log($($.attr(this, 'href')).offset().top);
		
		$('html, body').animate({ //w atrybutach pobierz wart. elementu dla tego hrefa
			scrollTop: $( $.attr(this, 'href') ).offset().top - menuHeight
		}, 500);
		
		
		});
	
});

// Js dla Slajder
$('.carousel').carousel({
  interval: 4000 //tempo przesuwania zdj na slajderze
})

//Jquery dla kwadratu wjezdzajacego na obrazki

$(document).ready(function () {
    var szerokosc = screen.width, // lub $(window).innerWidth()
        wysokosc = screen.height; // lub $(window).innerHeight()

    var minSzerokosc = 780,
        minWysokosc = 480; // dopasuj sobie wartości
    if (szerokosc >= minSzerokosc && wysokosc >= minWysokosc) {
        $('#home').css('cursor');
        $('#home').hover(function () { //kursor wchodzi
                $('.square').stop().animate({
                    'opacity': 1
                }, "slow");
                $(this).stop().animate({
                    'opacity': 1
                }, "slow");
            },
            function () { //kursor wychodzi
                $('.square').stop().animate({
                    'opacity': 1
                }, "slow");
            })
    } else {
        $('#home').on('cursor');
        $('.square').css({
            'opacity': '1'

        });
    }
    if (szerokosc >= minSzerokosc && wysokosc >= minWysokosc) {
        $('#flat').css('cursor');
        $('#flat').hover(function () { //kursor wchodzi
                $('.square1').stop().animate({
                    'opacity': 1
                }, "slow");
                $(this).stop().animate({
                    'opacity': 1
                }, "slow");
            },
            function () { //kursor wychodzi
                $('.square1').stop().animate({
                    'opacity': 1
                }, "slow");
            })
    } else {
        $('#flat').on('cursor');
        $('.square1').css({
            'opacity': '1'
        });
    }
    if (szerokosc >= minSzerokosc && wysokosc >= minWysokosc) {
        $('#garden').css('cursor');
        $('#garden').hover(function () { //kursor wchodzi
                $('.square2').stop().animate({
                    'opacity': 1
                }, "slow");
                $(this).stop().animate({
                    'opacity': 1
                }, "slow");
            },
            function () { //kursor wychodzi
                $('.square2').stop().animate({
                    'opacity': 1
                }, "slow");
            })
    } else {
        $('#garden').on('cursor');
        $('.square2').css({
            'opacity': '1'
        });
    }
    if (szerokosc >= minSzerokosc && wysokosc >= minWysokosc) {
        $('#modern').css('cursor');
        $('#modern').hover(function () { //kursor wchodzi
                $('.square3').stop().animate({
                    'opacity': 1
                }, "slow");
                $(this).stop().animate({
                    'opacity': 1
                }, "slow");
            },
            function () { //kursor wychodzi
                $('.square3').stop().animate({
                    'opacity': 1
                }, "slow");
            })
    } else {
        $('#modern').on('cursor');
        $('.square3').css({
            'opacity': '1'
        });
    }
});
 
     



