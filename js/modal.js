const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');
const designDescrElems = document.querySelectorAll('.design__descr');

const openModal = () => {
	modalElem.classList.remove('hidden');
};

const closeModal = () => {
	modalElem.classList.add('hidden');
};

moreElems.forEach((moreElem) => {
	moreElem.addEventListener('click', openModal);
});
// moreElems.addEventListener('click', openModal);
modalElem.addEventListener('click', (event) => {
	// console.log(event.target);
	const target = event.target;

	if (
		target.classList.contains('overlay') ||
		target.classList.contains('modal__close')
	) {
		closeModal();
	}

	// Если кликнули по заголовку модального окна, то он окрасится в красный цвет
	// if (target.classList.contains('modal__title')) {
	// 	target.style.color = 'red';
	// }
});
