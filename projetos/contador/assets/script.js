let count = 0;
const buttonIncrement = document.getElementsByName('adicionar');
const buttonDecremet = document.getElementsByName('subtrair');
const currentNumber = document.getElementById('currentNumber');

function increment() {
    count++
	currentNumber.innerHTML = count;
}

function decrement() {
	count--;
	currentNumber.innerHTML = count;
}

buttonIncrement.addEventListener('click', increment());

buttonDecremet.addEventListener('click', decrement());