// class = (ES6 feature) provides a more structured and
// a clear way to work with the objects compare to traditional constructor functions

// it helpful in static keyword ,encapsulation ,inheritence

// inside the class we do not need the function keyword

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }
  displayProduct() {
    console.log(`product: ${this.name}`);
    console.log(`price: $${this.price}`);
  }

  calTotal(saleTax) {
    return (this.price += this.price * saleTax);
  }
}

const product1 = new Product("shirt", 19.99); //here constructor is going to be call automatically
// only need to pass parameters
console.log(product1.name);
console.log(product1.price);
product1.displayProduct();

const product3 = new Product("pant", 25.5);
product3.displayProduct();

const saleTax = 0.05;
const total = product1.calTotal(saleTax);
console.log(`the total price (with tax) is $${total.toFixed(2)}`);
