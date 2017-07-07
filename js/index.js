if(!document.body.classList.contains('inner-page')){
	var dots = document.getElementsByClassName('dot');
	var banner = document.getElementsByClassName('banner')[0];
	var slideFirst = document.getElementById('slide-1');
	var slideSecond = document.getElementById('slide-2');
	var slideThird = document.getElementById('slide-3');
	var body = document.body;

	var postSend = document.getElementById('post-mail');

	var arrayOfSlide = [slideFirst, slideSecond, slideThird];
	var arrayOfImg = ['url(img/ice-cream/ice-bg.png)', 'url(img/ice-cream/ice-bg-2.png)', 'url(img/ice-cream/ice-bg-3.png)'];
	var bg = ['#849d8f', '#8996a6', '#9d8b84'];
}

var search = document.getElementById('search');
var dropdownSearch = document.getElementById('dropdown-search');

var logButton = document.getElementById('log-button');
var dropdownLogin = document.getElementById('dropdown-login');

if(document.body.classList.contains('inner-page')){
	var basket = document.getElementById('basket');
	var dropdownBasket = document.getElementById('dropdown-basket');
}
var modalOverlay = document.getElementById('modal-overlay');

if(!document.body.classList.contains('inner-page')){
	//slider
	function slider(k){
		for(var j = 0; j < dots.length; j++){
			dots[j].classList.remove('current');
			arrayOfSlide[j].style.display = 'none';
		}
		dots[k].classList.add('current');
		body.style.backgroundColor = bg[k];
			banner.style.backgroundImage = arrayOfImg[k];
		arrayOfSlide[k].style.display = 'block';
	}

	dots[0].onclick = function(){
		slider(0);
	}
	dots[1].onclick = function(){
		slider(1);
	}
	dots[2].onclick = function(){
		slider(2);
	}

	//post
	postSend.onsubmit = function(){
		alert('Вы успешно подписаны!');
	}
}

//login
logButton.onclick = function(event){
	event.preventDefault();
	dropdownLogin.style.display = 'block';
	modalOverlay.style.display = 'block';
}

//search
search.onclick = function(event){
	event.preventDefault();
	dropdownSearch.style.display = 'block';
	modalOverlay.style.display = 'block';
}

if(document.body.classList.contains('inner-page')){
	//basket
	basket.onclick = function(event){
		event.preventDefault();
		dropdownBasket.style.display = 'block';
		modalOverlay.style.display = 'block';
	}
}
//overlay
modalOverlay.onclick = function(){
	dropdownLogin.style.display = 'none';
	modalOverlay.style.display = 'none';
	dropdownSearch.style.display = 'none';
	if(document.body.classList.contains('inner-page')){
		dropdownBasket.style.display = 'none';
	}
}
