//ourteam page

console.dir(slider);



function sliderWidth(id, childClassName) {
	const widthBody = document.body.clientWidth;
	// console.log(widthBody);

	const slider = document.getElementById(id),
		sliderWrap = slider.querySelector('.sliderWrap'),
		offsetWidth = slider.clientWidth,
		child = slider.querySelectorAll(`.${childClassName}`);
	console.log("offsetWidth :", offsetWidth);

	let resultWidth = 0

	child.forEach((item , i ) => {
		
		const getprop = parseInt(window.getComputedStyle(item, null).getPropertyValue('margin-right')),
			widthItem = item.clientWidth,
			fullWidthItem = getprop + widthItem;
			
		if (resultWidth + fullWidthItem > widthBody*0.7) {
			return
		} else {
			resultWidth += fullWidthItem;
		}
	});
	slider.style.width = resultWidth +"px";
};

window.addEventListener('load', () => {

	sliderWidth('slider', 'slider__item');
	const sliderOne = new Slider('slider', 'slider__list', 'slider__item', 'slider__btnLeft', 'slider__btnRight', 'slider__indicat', 300);

});
window.addEventListener('resize', () => {
	sliderWidth('slider', 'slider__item');

})