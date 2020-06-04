'use strict'

function scrollMagic() { // wait for document ready
	// init
	const controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave',
			duration: "200%"
		}
	});

	// get all slides
	const slides = document.querySelectorAll(".panel");

	// create scene for every slide
	for (let i = 0; i < slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
			.setPin(slides[i], { pushFollowers: false })
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);

	}

	const scrollElem = document.getElementById('tiles');

	const scene = new ScrollMagic.Scene({
		triggerElement: '#client',
		offset: 100,
		triggerHook: 0,
		duration: 100
	})
		.on("progress", (e) => {
			let scrollH = scrollElem.scrollHeight;
			let windowH = window.innerHeight;
			let offset = scrollH - windowH;
			if (offset >= 0) {
				scene.setPin(scrollElem)
				// let x = (scrollElem.offsetTop>0)? 90:0;
				let scroll = scrollElem.offsetTop * (scrollH /windowH)*1.3;////scrolling begins with 90 px, I do not know why
				if (scroll < offset) {
					scrollElem.style.top = -scroll + 'px';

				} else {
					scrollElem.style.top = -offset + 'px'
				}
			}
		})
		.addTo(controller);
};
scrollMagic();

//= modules/slider.js
//= modules/cursor.js
//= modules/randomMove.js
//= modules/parallax.js
//= modules/rotate3d.js
//= modules/lightOfCursor.js
//= modules/wedo.js
//= modules/ourteam.js


// build tiles on page clients
const elem = document.querySelector('.content__tiles');
const msnry = new Masonry(elem, {
	// options
	itemSelector: '.tile',
	columnWidth: 215,
	stagger: 30,
	// gutter: 10,
	// containerStyle: null,
	horizontalOrder: true	
});
msnry.layout();


window.addEventListener('load', () => {
	cardParallax();
	randomMove();

});

window.addEventListener('resize', () => {
	cardParallax();
	randomMove();
})