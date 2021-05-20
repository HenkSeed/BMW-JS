const smothScrollElems = document.querySelectorAll(
	'a[href^="#"]:not(a[href="#"])'
);

smothScrollElems.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const id = link.getAttribute('href').substring(1);
		console.log('id: ', id);
		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
		});
		menuElem.classList.toggle('menu-active');
		humburgerElem.classList.toggle('humburger-menu-active');
	});
});
