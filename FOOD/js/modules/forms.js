import { closeModal, openModal } from './modal';
import { postData } from '../services/services';

function forms(formSelector, modalTimerId) {
	//Forms

	const forms = document.querySelectorAll(formSelector);

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так'
	};

	forms.forEach(item => {
		bindPostData(item);
	});

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessege = document.createElement('img'); //создаем новый элемент, для вывода его на страницу и оповещения пользователя о статусе происходящего
			statusMessege.src = message.loading;
			statusMessege.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessege);									// добавляем этот элемент на страницу

			const formData = new FormData(form);

			/* const object = {};
			formData.forEach(function (value, key) {
				object[key] = value;
			}); */

			/* Берем formData, которая собрала все введенные в форму данные
				Превращаем ёё в массив мвссивов при помощи метода entries()
				Затем массив массиво первращаем в классический объект при помощи метода Object.fromEntries()
				А уже затем этот объект превращаем в JSON
			*/
			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success); // оповещаем пользователя о том, что все прошло хорошо
					statusMessege.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal('.modal', modalTimerId);

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close" data-close>&times;</div>
			<div class="modal__title">${message}</div>
		</div>
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000);
	}
}

export default forms;