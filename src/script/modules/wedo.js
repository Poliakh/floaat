(function () {
	const wrapDo = document.querySelector('.wrapDo');

	wrapDo.addEventListener('click', ({ target }) => {
		if (target.hasAttribute('data-serv')) {
			const figure = document.querySelector('.figure');
			const attr = target.getAttribute('data-serv')
			const listBtn = wrapDo.querySelectorAll('.btnPanel__btn');
			figure.setAttribute('data-serv', attr);

			listBtn.forEach(item => {
				if (item.getAttribute('data-serv') === attr) {
					item.classList.add('active')
				};

				if (item.getAttribute('data-serv') !== attr
					&& item.classList.contains('active')) {
					item.classList.remove('active')
				};
			});
		};
	});
	let figure = wrapDo.querySelector('.figure__bgBack');

	wrapDo.addEventListener('mouseover', ({ target }) => {
		if (target.classList.contains('btnPanel__btn')) {
			figure.classList.add('figur__bgBack-btnHover');
		} else if (!target.classList.contains('btnPanel__btn')
			&& figure.classList.contains('figur__bgBack-btnHover')) {
			figure.classList.remove('figur__bgBack-btnHover');
		}
	});
	wrapDo.addEventListener('click', ({target}) => {
		if(target.classList.contains('btnPanel__btn')){
			figure.classList.add('figur__bgBack-btnActive');
			setTimeout(() => {
				figure.classList.remove('figur__bgBack-btnActive');
				figure.classList.remove('figur__bgBack-btnHover');
			}, 200);
		}
	})
}());