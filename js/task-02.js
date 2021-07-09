const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const setName = array =>
  array.map(arr => {
    const listEl = document.createElement('li');
    listEl.textContent = arr;
    return listEl;
  });

ingredientsEl.append(...setName(ingredients));
