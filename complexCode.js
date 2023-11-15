/*file: complexCode.js*/ 

// This code is a sophisticated and elaborate implementation of a web-based shopping cart system.
// It incorporates robust error handling, user authentication, inventory management, and dynamic rendering of products.

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Product {
  constructor(id, name, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product, quantity) {
    if (quantity <= product.quantity) {
      let existingProduct = this.products.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        let cartProduct = { ...product, quantity };
        this.products.push(cartProduct);
      }

      product.quantity -= quantity;
      console.log(`${quantity} ${product.name}(s) added to the cart.`);
    } else {
      console.log(
        `Insufficient quantity! Only ${product.quantity} ${product.name}(s) available.`
      );
    }
  }

  removeProduct(productId, quantity) {
    let productIndex = this.products.findIndex((p) => p.id === productId);

    if (productIndex >= 0) {
      let product = this.products[productIndex];

      if (quantity < product.quantity) {
        product.quantity -= quantity;
        console.log(`${quantity} ${product.name}(s) removed from the cart.`);
      } else {
        this.products.splice(productIndex, 1);
        console.log(`${product.name} removed from the cart.`);
      }
    } else {
      console.log(`Product with ID ${productId} not found in the cart.`);
    }
  }

  getTotalPrice() {
    let total = 0;

    for (let product of this.products) {
      total += product.price * product.quantity;
    }

    return total;
  }

  checkout() {
    let totalPrice = this.getTotalPrice();
    console.log(`Checkout successful. Total: $${totalPrice}.`);
    this.products = [];
  }
}

// Inventory management
let inventory = [
  new Product(1, "Shirt", "A stylish shirt", 25.99, 10),
  new Product(2, "Pants", "Comfortable pants", 39.99, 8),
  new Product(3, "Shoes", "Stylish shoes", 49.99, 5),
  new Product(4, "Hat", "Cool hat", 15.99, 15),
  new Product(5, "Socks", "Comfortable socks", 6.99, 20),
];

// User authentication
function login(username, password) {
  // Simulating authentication process
  if (username === "admin" && password === "password") {
    console.log(`Welcome back, ${username}!`);
    return new User(username, password);
  } else {
    throw new Error("Invalid credentials! Please try again.");
  }
}

function logout() {
  console.log("Logged out successfully.");
}

// Dynamic rendering of products
function displayProducts() {
  console.log("Product list:");

  for (let product of inventory) {
    console.log(
      `${product.id}. ${product.name} - ${product.price} - ${product.quantity} in stock`
    );
  }
}

// Example usage:
try {
  let user = login("admin", "password");
  
  let cart = new ShoppingCart();
  
  cart.addProduct(inventory[0], 2);
  cart.addProduct(inventory[1], 3);
  cart.removeProduct(1, 1);
  
  console.log(`Total price: $${cart.getTotalPrice()}`);
  
  displayProducts();
  
  cart.checkout();
  
  logout();
} catch (error) {
  console.log(`Error: ${error.message}`);
}