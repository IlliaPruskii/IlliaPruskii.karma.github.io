//Burger start

let menuBurger = {
	burger: document.getElementById('burger'), //get burger 
	mobileMenu: document.getElementById('header_menu'), //get header menu
	body: document.querySelector('body'), //get body for block scroll

	start: function(){
		let that = this;
		this.burger.addEventListener('click', function(e){
			that.addBurgerClass(e);
		});
		this.burger.addEventListener('click', function(e){
			that.addMobileMenuClass(e);
		});
		this.burger.addEventListener('click', function(e){
			that.banScroll(e);
		})
	},

	addBurgerClass: function(){
		this.burger.classList.toggle('active_burger'); // activete burger (change burger view)
	},

	addMobileMenuClass: function(){
		this.mobileMenu.classList.toggle('active_header_menu'); // activete menu (show menu)
	},

	banScroll: function(){
		this.body.classList.toggle('lock'); //block body scroll when menu is active 
	}
}

menuBurger.start();

//Burger start



//Fixed header start

let fixedHeader = {
	header: document.querySelector('.header__wrapper'), //get header

	start: function () {
		let that = this;
		window.addEventListener('scroll', function(e){
			that.createFixedHeader(e);
		})
	},

	createFixedHeader: function(){
		if (window.matchMedia("(min-width: 992px)").matches) { //condition for screen > 992px
			if (window.scrollY >= 40) {
				this.header.classList.add('fixed-header'); // add class which fixed header
			} else {
				this.header.classList.remove('fixed-header'); // remove class which fixed header
			}
		} else { //condition for screen < 992px
			this.header.classList.add('fixed-header');
		}
	}
}

fixedHeader.start();

//Fixed header end



//Sliders start 

$(document).ready(function(){
	$('.main-banner__slider').slick({ //find slider by slider class
		arrows: false,
		dots: false,
		slidesToScroll: 1,
		autoplay: true,
		speed: 700, 
		autoplaySpeed: 3000,
		slidesToShow: 1,
		pauseOnHover: true,
		draggable: true,
	});
});

$(document).ready(function(){
	$('.products__slider').slick({ //find slider by slider class
		arrows: true,
		dots: false,
		slidesToScroll: 1,
		autoplay: false,
		speed: 700,
		slidesToShow: 1,
		draggable: false,
	});
});

$(document).ready(function(){
	$('.exclusive__slider').slick({ //find slider by slider class
		arrows: true,
		dots: false,
		slidesToScroll: 1,
		autoplay: false,
		speed: 700,
		slidesToShow: 1,
		draggable: true,
	});
});

//Sliders end



//Timer start 

let timer = {
	getTimeValue: function(deadline){
		let timeRemaining = Date.parse(deadline) - Date.parse(new Date());
		let seconds = Math.floor((timeRemaining/1000) % 60); 
		let minutes = Math.floor((timeRemaining/(1000 * 60)) % 60); 
		let hours = Math.floor((timeRemaining/(1000 * 60 * 60)) % 24); 
		let days = Math.floor(timeRemaining/(1000 * 60 * 60 * 24));
		return timeValue = {
			'timeRemaining': timeRemaining,
			'seconds': seconds,
			'minutes': minutes,
			'hours': hours,
			'days': days,
		}
	},

	addZero: function(number){
		if(number <= 9){
			number = '0' + number;
		}
		return number;
	},

	start: function(id, deadline){
		let that = this;
		moveTimeValue(id, deadline);
		let timer = setInterval( function() { moveTimeValue(id,deadline); }, 1000);

		function moveTimeValue(id, deadline){
			let timeValue = that.getTimeValue(deadline);
			let timerBlock = document.getElementById(id);
			let seconds = timerBlock.querySelector('#seconds');
			let minutes = timerBlock.querySelector('#minutes');
			let hours = timerBlock.querySelector('#hours');
			let days = timerBlock.querySelector('#days');

			seconds.textContent = that.addZero(timeValue.seconds);
			minutes.textContent = that.addZero(timeValue.minutes);
			hours.textContent = that.addZero(timeValue.hours);
			days.textContent = that.addZero(timeValue.days);

			if(timeValue.timeRemaining <= 9){
				seconds.textContent = '00';
				minutes.textContent = '00';
				hours.textContent = '00';
				days.textContent = '00';
			}
		}

	},
}

timer.start('timer', '2020-11-29');

//Timer end