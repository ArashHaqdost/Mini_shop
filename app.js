//class product
class Product {
  //   title = 'DEFAULT';
  //   imageUrl;
  //   price;
  //   description;

  constructor(title, image, pric, decr) {
    this.title = title;
    this.imageUrl = image;
    this.price = pric;
    this.description = decr;
  }
}
//calss Element Attributes
class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}
//class Component
class Component {
  constructor(renderHook) {
    this.hookId = renderHook;
  }
  creatRootElemnt(tag, cssClass, atributes) {
    const rootElement = document.createElement(tag);
    if (cssClass) {
      rootElement.className = cssClass;
    }
    if (atributes && atributes.lenght > 0) {
      for (const attr of atributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}
//calss shopping cart
class shoppingCart extends Component {
  items = [];
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total:\$${this.totalAmount.toFixed(
      '2'
    )}<h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValu, curValue) => prevValu + curValue.price,
      0
    );
    return sum;
  }
  constructor(renderHookId) {
    super(renderHookId);
  }
  addProduct(product) {
    const updatItems = [...this.items];
    updatItems.push(product);
    this.cartItems = updatItems;
  }
  render() {
    const cartEl = this.creatRootElemnt('section', 'cart');
    cartEl.innerHTML = `
        <h2>Total:\$${0}<h2>
        <button>Order Now!</button>
        `;
    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}
//class producr Itrem
class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId);
    this.product = product;
  }
  addToCart() {
    App.addProuctToCart(this.product);
  }

  render() {
    const prodEl =  this.creatRootElemnt('li', 'product-item');
    prodEl.innerHTML = `
                <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}>
                <div class="">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>add to card</button>
                </div>
                </div>
                `;
    const addButtonCard = prodEl.querySelector('button');
    addButtonCard.addEventListener('click', this.addToCart.bind(this));
  }
}
//class product list
class ProductList extends Component {
  products = [
    new Product('A pillow', './img/forest-balcony.webp', 20, 'A soft pillow'),

    new Product(
      'a Love story',
      './img/2.jpg',
      2000,
      'best thisnggs in this world'
    ),
    new Product(
      'a Love story',
      './img/1.jpg',
      2000,
      'best thisnggs in this world'
    ),
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }
  render() {
    this.creatRootElemnt('ul', 'product-list',[
      new ElementAttribute('id', 'prod-list'),
    ]);
    for (const prod  of this.products) {
      const productItem = new ProductItem(prod, 'prod-list');
      productItem.render();
    }
  }
}
//class shop
class Shop {
  render() {
    this.cart = new shoppingCart('app');
    this.cart.render();
    const productList = new ProductList('app');
    productList.render();
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProuctToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
