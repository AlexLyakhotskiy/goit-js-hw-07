const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);
