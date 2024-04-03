// Определение массива товаров
const products = [
    { name: 'Телевизор', quantity: 5 },
    { name: 'Телефон', quantity: 15 },
    { name: 'Планшет', quantity: 4 },
    { name: 'Ноутбук', quantity: 7 },
    { name: 'Микроволновка', quantity: 0 }
  ];
  
  // Функция фильтрации товаров по названию
  function filterProductsByName(products, searchTerm) {
    return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  
  // Функция фильтрации товаров по количеству
  function filterProductsByQuantity(products, minQuantity) {
    return products.filter(product => product.quantity >= minQuantity);
  }
  
  // Использование функций для фильтрации товаров
  const filteredByName = filterProductsByName(products, 'тел');
  console.log('Фильтр по названию:', filteredByName);
  
  const filteredByQuantity = filterProductsByQuantity(products, 6);
  console.log('Фильтр по количеству:', filteredByQuantity);
  
  // Дополнительно: комбинирование обоих фильтров
  const combinedFilter = filterProductsByQuantity(filterProductsByName(products, 'тел'), 5);
  console.log('Комбинированный фильтр:', combinedFilter);
  