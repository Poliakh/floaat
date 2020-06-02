window.addEventListener('resize', () => {
})

// exeple - randomMove('.move', 15, 30);
const randomMove = (classElemetns, percenField, rotateAngel) => {
	const field = percenField / 100;
	const withDisp = document.documentElement.clientWidth;
	const heightDisp = document.documentElement.clientHeight;
	const listElem = document.querySelectorAll(classElemetns);

	const setOffset = (elem) => {
		let offsetX = Math.floor(Math.random() * field * withDisp - field * .5 * withDisp);
		let offsetY = Math.floor(Math.random() * field * heightDisp - field * .5 * heightDisp);
		let rotate = Math.floor(Math.random() * rotateAngel) - rotateAngel * .5;
		let offset = `rotate(${rotate}deg) translateX(${offsetX}px) translateY(${offsetY}px)`;
		elem.style.transform = offset;
	}
	const moveRandomOneElem = (elem) => {
		window.addEventListener('load', () => {
			randomMove('.move', 15, 30);
		});

		setOffset(elem)
		
		setInterval(() => {
			setOffset(elem)
		}, Math.floor(Math.random() * 3000 + 7000));

	};

	listElem.forEach(moveRandomOneElem);
}
window.addEventListener('load', () => {
	randomMove('.moveFront', 15, 20);
	randomMove('.moveMid', 8, 10);
	randomMove('.moveR', 15, 10);
	randomMove('.move', 15, 10);
});