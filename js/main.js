const drinkInput = document.querySelector('.search');
const drinkList = document.querySelectorAll('li');

const checkDrink = (e) => {
	const text = e.target.value.toLowerCase();
	drinkList.forEach((el) => {
		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
			el.style.display = 'block';
		} else {
			el.style.display = 'none';
		}
	});
};

drinkInput.addEventListener('keyup', checkDrink);
