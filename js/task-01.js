const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);

// version 1
// const titleEl = categoriesEl.querySelectorAll('h2');
// const listEl = categoriesEl.querySelectorAll('ul');
// for (let i = 0; i < categoriesEl.children.length; i += 1) {
//   console.log(
//     `Категория: ${titleEl[i].textContent}
// Количество элементов: ${listEl[i].children.length}`
//   );
// }

// version 2
// [...categoriesEl.children].forEach(element => {
//   const text = element.querySelector('h2').textContent;
//   const quatity = element.querySelector('ul').children.length;
//   console.log(
//     `Категория: ${text}
// Количество элементов: ${quatity}`
//   );
// });

// version 3
const getNameQuant = array =>
  array.forEach(element => {
    console.log(
      `Категория: ${
        element.querySelector('h2').textContent
      }\nКоличество элементов: ${element.querySelector('ul').children.length}`,
    );
  });

getNameQuant([...categoriesEl.children]);
