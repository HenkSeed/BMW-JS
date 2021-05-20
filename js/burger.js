const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
// console.log('humburgerElem: ', humburgerElem);

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	humburgerElem.classList.toggle('humburger-menu-active');
};

humburgerElem.addEventListener('click', toggleMenu);
