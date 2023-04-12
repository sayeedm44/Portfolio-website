/*================= menu icon navbar =================*/
let menuIcon = document.qureySelector('#menu-icon');
let navbar = document.qureySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};


/*================= scroll sections active link =================*/
let sections = document.qureySelectorAll('section');
let navLinks = document.qureySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop -150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.qureySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
        };
	});


/*================= sticky navbar =================*/
let header = document.qureySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*================= remove menu icon navbar when click navbar links (scrool) =================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*================= swiper =================*/



/*================= dark light mode =================*/
let darkModeIcon = document.qureySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
	darkModeIcon.classList.toggle('bx-sun');
	document.body.classList.toggle('dark-mode');
};


/*================= scroll reveal =================*/
ScrollReveal({ 
	// reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testtimonial-wrapper, contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, about-content', { origin: 'right'});