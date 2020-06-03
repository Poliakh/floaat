(function cursorAction() {
	const cur = document.getElementById('cur');

	window.addEventListener('mousemove', ({ clientY, clientX }) => {
		cur.style.top = clientY + 'px';
		cur.style.left = clientX + 'px';
	});
	window.addEventListener('mouseover', ({ target }) => {
		if (target.closest(".curPointer")) {
			cur.firstElementChild.classList.add('pointer');
			target.addEventListener('mouseout', () => {
				cur.firstElementChild.classList.remove('pointer');
			})
		};
	});
})();
