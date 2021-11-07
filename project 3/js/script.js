'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, index) => {
				if (target === item) {
					hideTabContent();
					showTabContent(index);
				}
			});
		}
	});

	// Modal window

	const modalTrigger = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('[data-close]');

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => {

			modal.classList.add('show');
			modal.classList.remove('hide');
			document.body.style.overflow = 'hidden';

		});
	});

	modalCloseBtn.addEventListener('click', () => {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	});

});


