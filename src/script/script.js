

const scrollMagic = () => { // wait for document ready
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
			let offset = scrollElem.scrollHeight - window.innerHeight;
			if (offset >= 0) {
				scene.setPin(scrollElem)
				// let x = (scrollElem.offsetTop>0)? 90:0;
				let scroll = scrollElem.offsetTop * 1.5//scrolling begins with 90 px, I do not know why
				if (scroll < offset) {
						scrollElem.style.top = -scroll + 'px';

				} else {
					scrollElem.style.top = -offset + 'px'
				}
			}
		})
		.addTo(controller);
};

window.addEventListener('load', scrollMagic);

// build tiles
var elem = document.querySelector('.content__tiles');
var msnry = new Masonry(elem, {
	// options
	itemSelector: '.tile',
	columnWidth: 225,
	horizontalOrder: true
});

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry('.tile', {
// 	// options
// });

//= modules/slider.js


document.addEventListener('DOMContentLoaded', function () {
	const slider = new Slider('slider', 'slider__list', 'slider__item', 'slider__btnLeft', 'slider__btnRight', 'slider__indicat', 300);
});


	
	//= modules/randomMove.js
	//= modules/parallax.js
	//= modules/rotate3d.js
	//= modules/lightOfCursor.js
	//= modules/wedo.js
