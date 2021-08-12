let amor = document.getElementById('amor');

amor.addEventListener('click', (e) => {
	let element = e.target;

	let timeout = () => {
		setTimeout(() => {
			console.log('working');
			element.classList.toggle('amando');
			timeout();
		}, 500);
	};
	timeout();
});
