const listElement = document.querySelector('#categories');
const itemElements = listElement.querySelectorAll('.item');

console.log(`Number of categories: ${itemElements.length}`);
itemElements.forEach(item => {
  const titleElement = item.querySelector('h2');
  const elementsCount = item.querySelectorAll('li').length;
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${elementsCount}`);
});
