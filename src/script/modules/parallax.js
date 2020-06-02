const parallax = (e) => {
	document.querySelectorAll('.layer').forEach(layer => {
		const speed = layer.getAttribute('data-speed');
		layer.style.transform = `translateX(-${e.clientX*speed/1500}px) translateY(-${e.clientY*speed/1000}px`;
	});
	
}
// document.addEventListener("mousemove", parallax);