class ProductList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this._fetchProducts();
    this.render(); //вывод товаров на страницу
    this.totalPrice(); // вывод в консоль общей стоимости товаров
  }
  _fetchProducts() {
    this.goods = [
      { id: 1, title: "Notebook", price: 2000 },
      { id: 2, title: "Mouse", price: 20 },
      { id: 3, title: "Keyboard", price: 200 },
      { id: 4, title: "Gamepad", price: 50 },
    ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
  }

  // 2.Добавьте для ProductList метод, определяющий суммарную стоимость всех товаров.
  totalPrice() {
    let price = this.goods.reduce((accumulator, obj) => {
      return accumulator + obj.price;
    }, 0);
    console.log(price);
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x150") {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  render() {
    return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  }
}

let list = new ProductList();

// 1.Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

class Cart {
  constructor() {
    // создание корзины
    this.productList = [];
    this.render();
  }

  addProduct(cartItem) {
    // добавление товара в корзину
    this.productList.push(cartItem);
  }

  render() {
    // отрисовка корзины
  }
}

class CartItem {
  constructor(product, count) {
    this.product = product;
    this.cnt = count; // количество добавленного товара в корзину
    totalPrice(); // расчет общей стоимости позиции
    this.render();
  }

  incrementProdut() {
    // увеличение количества продукта
    // можно повесить на кнопку плюс в корзине
    this.cnt += 1;
    totalPrice(); // перерасчет общей стоимости
  }

  decrementProdut() {
    // уменьшение количества продукта
    // можно повесить на кнопку минус в корзине
    this.cnt -= 1;
    totalPrice(); // перерасчет общей стоимости
  }

  totalPrice() {
    this.price = this.product.price * this.cnt;
  }

  render() {
    // отрисовка товара в корзине
  }
}

/*
3.Некая сеть фастфуда предлагает несколько видов гамбургеров:
Маленький (50 рублей, 20 калорий).
Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
С сыром (+10 рублей, +20 калорий).
С салатом (+20 рублей, +5 калорий).
С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
и полить майонезом (+20 рублей, +5 калорий). 
Напишите программу, рассчитывающую стоимость и калорийность гамбургера. 
Можно использовать примерную архитектуру класса со следующей страницы, 
но можно использовать и свою.
*/

let sizes = {
  // размеры
  small: { size: "small", price: 50, calories: 20 },
  big: { size: "big", price: 100, calories: 40 },
};

let stuffings = {
  // начинка
  cheese: { name: "cыр", price: 10, calories: 20 },
  salad: { name: "салат", price: 20, calories: 5 },
  potato: { name: "картошка", price: 15, calories: 10 },
};

let addition = {
  // добавка
  seasoning: { name: "приправа", price: 15, calories: 0 },
  mayonnaise: { name: "майонез", price: 20, calories: 5 },
};

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.addition = [];
  }
  addTopping(topping) {
    // Добавить добавку
    this.addition.push(topping);
  }
  removeTopping(topping) {
    // Убрать добавку
    const index = this.addition.indexOf(topping);
    if (index > -1) {
      this.addition.splice(index, 1);
    }
  }
  getToppings() {
    // Получить список добавок
    console.log(this.addition.map((el) => el.name));
  }
  getSize() {
    // Узнать размер гамбургера
    console.log(this.size.size);
  }
  getStuffing() {
    // Узнать начинку гамбургера
    console.log(this.stuffing.name);
  }

  calculatePrice() {
    let price = 0;
    price += this.size.price; // цена зависет от размера
    price += this.stuffing.price; // цена зависет от начинки
    console.log(
      this.addition.reduce((accum, obj) => {
        return accum + obj.price;
      }, price)
    );
  }

  calculateCalories() {
    // Узнать калорийность
    let calories = 0;
    calories += this.size.calories; // цена зависет от размера
    calories += this.stuffing.calories; // цена зависет от начинки
    console.log(
      this.addition.reduce((accum, obj) => {
        return accum + obj.calories;
      }, calories)
    );
  }
}

let hamburger = new Hamburger(sizes.small, stuffings.cheese); // создаем обьект
hamburger.getSize(); // проверим размер
hamburger.getStuffing(); // проверим начинку
hamburger.addTopping(addition.mayonnaise); // добавим майонез
hamburger.addTopping(addition.seasoning); // добавим специи
hamburger.getToppings(); // посмотрим список добавок
hamburger.removeTopping(addition.mayonnaise); // удалим майонез
hamburger.getToppings(); // проверим что майонез удалился
// узнаем общую цену и калорийность
hamburger.calculatePrice();
hamburger.calculateCalories();
