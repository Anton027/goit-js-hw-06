// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в 
// консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const quantityLiItems = document.querySelectorAll('.item');

console.log('Number of categories:', quantityLiItems.length);

quantityLiItems.forEach(el => {
    console.log( `Category: ${el.firstElementChild.textContent}`);
    const countLi = el.querySelectorAll('li');
    console.log(`Elements: ${countLi.length}`);
})



