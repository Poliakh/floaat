const card = document.getElementById('card'),
	layer = document.querySelectorAll('.card__layer')
w = document.documentElement.clientWidth,
	h = document.documentElement.clientHeight;

document.addEventListener('mousemove', (e) => {
	const offsetX = 0.5 - e.clientX / w,
		offsetY = 0.5 - e.clientY / h,
		dy = e.clientY - h / 2,
		dx = e.clientX - w / 2,
		theta = Math.atan2(dy, dx),

		offsetPoster = card.getAttribute('data-offset'),// rotateY((${offsetX * (offsetPoster * 2)})deg)
		transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (offsetY * offsetPoster) + 'deg) rotateY(' + (-offsetX * (offsetPoster * 2)) + 'deg)';
	// console.log('transformPoster :',transformPoster);
	card.style.transform = transformPoster;
	// console.dir(card.style.transform);
	
	
	// console.log("offsetX :", offsetX," offsetY: ",offsetY );
	
	layer.forEach(item => {
		// console.log("item :", item);

		const offsetLayer = item.getAttribute('data-offset') || 0,
			transformLayer = `translateX(${offsetX * offsetLayer}px) translateY(${offsetY * offsetLayer}px)`;
		// console.log(transformLayer);

		item.style.transform = transformLayer;
	});
});