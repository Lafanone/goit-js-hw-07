const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const elementsList = category.querySelector('ul');
  const elementsCount = elementsList.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});