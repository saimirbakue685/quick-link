/* 
 * filename: complex_code.js
 * content: Example of a complex and sophisticated JavaScript code
 */

// Define a function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Define a class to represent a shape
class Shape {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }

  getPerimeter() {
    return this.sides.reduce((sum, side) => {
      return sum + side;
    }, 0);
  }

  getArea() {
    throw new Error('Abstract method not implemented.');
  }
}

// Define a subclass of Shape to represent a rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle', [width, height, width, height]);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Define a subclass of Shape to represent a circle
class Circle extends Shape {
  constructor(radius) {
    super('Circle', [2 * Math.PI * radius]);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Define a function to generate Fibonacci sequence up to a given number of terms
function fibonacci(numTerms) {
  const sequence = [0, 1];

  if (numTerms < 2) {
    return sequence.slice(0, numTerms);
  }

  for (let i = 2; i < numTerms; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// Usage example of the defined functionalities

const factFive = factorial(5);
console.log(`Factorial of 5: ${factFive}`);

const rect = new Rectangle(5, 3);
console.log(`Rectangle Perimeter: ${rect.getPerimeter()}`);
console.log(`Rectangle Area: ${rect.getArea()}`);

const circle = new Circle(4);
console.log(`Circle Perimeter: ${circle.getPerimeter()}`);
console.log(`Circle Area: ${circle.getArea()}`);

const fibSequence = fibonacci(10);
console.log(`Fibonacci Sequence: ${fibSequence.join(', ')}`);

// ... more sophisticated code can be added below ...