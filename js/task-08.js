const btnRenderEl = document.querySelector('[data-action="render"]');
const btnDestroyEl = document.querySelector('[data-action="destroy"]');
const inputEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');

btnDestroyEl.addEventListener('click', onBtnRemoveAllClick);
btnRenderEl.addEventListener('click', onBtnRenderClick);

function getRandom(min, max) {
  return () => Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDiv(index) {
  const dice = getRandom(0, 255);
  const divEl = document.createElement('div');
  divEl.style.width = `${30 + 10 * index}px`;
  divEl.style.height = `${30 + 10 * index}px`;
  divEl.style.backgroundColor = `rgb(${dice()},${dice()},${dice()})`;
  return divEl;
}

function onBtnRemoveAllClick() {
  boxesEl.innerHTML = '';
}

function onBtnRenderClick() {
  const newDivsQuatity = boxesEl.children.length + +inputEl.value;
  const arrDiv = [];
  for (let i = boxesEl.children.length; i < newDivsQuatity; i += 1) {
    arrDiv.push(createDiv(i));
  }
  boxesEl.append(...arrDiv);
  inputEl.value = '';
}
