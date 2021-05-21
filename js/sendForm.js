const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, callBack, falseCallBack) => {
	const request = new XMLHttpRequest();
	request.open('POST', server);

	request.addEventListener('readystatechange', () => {
		if (request.readyState !== 4) return;
		if (request.status === 200 || request.status === 201) {
			const response = JSON.parse(request.responseText);
			callBack(response.id);
		} else {
			falseCallBack(request.status);
			throw new Error(request.status); // Создаем ошибку, которая выводится в консоль
		}
	});

	request.send(data);
};

const formElems = document.querySelectorAll('.form'); // Получаем все формы документа

const formHandler = (form) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const data = {};

		// for (const elem of form.elements) {
		// 	if (elem.name) {
		// 		console.log(elem.name, elem.value);
		// 	}
		// }
		// или можно так:

		for (const { name, value } of form.elements) {
			if (name) {
				// console.log(name, value);
				data[name] = value; // Здесь name является аттрибутом, а не свойством (name="mail")
				// value - это значение, которое ввёл пользователь
			}
		}

		const smallElem = document.createElement('small');

		sendData(
			JSON.stringify(data),
			(id) => {
				smallElem.innerHTML =
					'<br>Ваша заявка №' + id + '! <br>В ближайшее время с Вами свяжемся!';
				smallElem.style.color = 'green';
				form.append(smallElem);
			},
			(err) => {
				smallElem.textContent =
					'К сожалению, возникли технические неполадки \nОтправьте заявку позже';
				smallElem.style.color = 'red';
				form.append(smallElem);
			}
		);
		form.reset();
		// console.dir(form);
	});
};

formElems.forEach(formHandler);

// const dataTest = {
// 	name: 'Henk',
// 	phone: '+79504350000',
// };
