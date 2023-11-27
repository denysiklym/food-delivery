const prompt = require('prompt-sync')();

const menu = [
  { id: 1, name: 'Стейк', price: 160 },
  { id: 2, name: 'Паста', price: 95 },
  { id: 3, name: 'Риба з картоплею', price: 120 },
  { id: 4, name: 'Чікен Вінгс', price: 110 },
  { id: 5, name: 'Чізкейк', price: 75 },
];

function displayMenu() {
  console.log('Меню:');
  menu.forEach(item => console.log(`${item.id}. ${item.name} - ₴${item.price}`));
}

function placeOrder() {
  const order = { items: [], total: 0 };

  while (true) {
    displayMenu();
    const itemId = prompt('Введіть номер страви, яку хочете замовити у нас. Коли замовлення буде завершено, напишіть "done" ');

    if (itemId.toLowerCase() === 'done') {
      break;
    }

    const selectedItem = menu.find(item => item.id === parseInt(itemId));
    if (selectedItem) {
      order.items.push(selectedItem);
      order.total += selectedItem.price;
      console.log(`Додано ${selectedItem.name} до замовлення.`);
    } else {
      console.log('Невірне ID. Напишіть знову.');
    }
  }

  return order;
}

function askForFeedback() {
  const feedback = prompt('Як вам наша система замовлень? Введіть ваш відгук: ');
  console.log('Дякуємо за ваш відгук! Ми завжди раді вас бачити.');
}

function main() {
  console.log('Вітаємо!');
  const customerName = prompt('Як вас звати?: ');

  console.log(`Доброго дня, ${customerName}! Давайте підготуємо ваше замовлення.`);

  const customerOrder = placeOrder();

  console.log('Сума замовлення:');
  customerOrder.items.forEach(item => console.log(`${item.name} - $${item.price}`));
  console.log(`Усього разом: $${customerOrder.total}`);

  askForFeedback();
  console.log('Дякуємо, за довіру до нашого сервісу досавки їжі. Ваші страви скоро будуть у вас під будинком. Очікуйте..');
}

main();