// question 1
// created a class name bankAccount
class BankAccount {
    // set the two variable name and balance
    constructor(name, balance){
        this.name = name
        this.balance = balance
    }
    // create method deposit and check a condition deposit cannot be negative
    deposit(amount){
        if (amount < 0) {
            console.log(`Invalid deposit amount. Please enter a positive amount.`);
            return
        }else{
            // add deposit to balance and return it
            this.balance += amount
            console.log(`Deposited Rs.${amount}. New balance: Rs.${this.balance}`);
            return
        }
    }
    // create method withdraw and check two condition withdraw cannot be negative and cannot withdraw more than balance
    withdraw(amount){
        if (amount < 0) {
            console.log(`Invalid withdraw amount. Please enter a positive amount.`);
            return
        }else if(amount > this.balance){
            console.log(`Insufficent funds for withdrawal.`);
        }else{
            // less withdraw from balance and return it
            this.balance -= amount
            console.log(`Withdraw Rs.${amount}. New balance: Rs.${this.balance}`);
        }
    }
    // create a method to check balance
    checkBalance(){
        console.log(`Account balance for ${this.name}: Rs.${this.balance}`);
    }
}

const myAccount = new BankAccount('Mithun S', 1000)
// myAccount.checkBalance()
// myAccount.deposit(500);
// myAccount.deposit(-50)
// myAccount.withdraw(200)
// myAccount.withdraw(1500)
// myAccount.withdraw(-500)
// myAccount.checkBalance()


// question 2
// created a class name student
class Student {
    constructor(name, studentId) {
      this.name = name;
      this.studentId = studentId;
      this.enrolledCourses = [];
    }
  
    enroll(course) {
      if (!this.enrolledCourses.includes(course)) {
        this.enrolledCourses.push(course);
        console.log(`${this.name} has enrolled in ${course}`);
      } else {
        console.log(`${this.name} is already enrolled in ${course}`);
      }
    }
  
    displayEnrolledCourses() {
      if (this.enrolledCourses.length === 0) {
        console.log(`${this.name} is not enrolled in any courses.`);
      } else {
        console.log(`${this.name}'s enrolled courses: ${this.enrolledCourses.join(', ')}`);
      }
    }
  }
  
  class Admission {
    constructor() {
      this.students = [];
    }
  
    admitStudent(name, studentId) {
      const student = new Student(name, studentId);
      this.students.push(student);
      console.log(`${name} has been enrolled.`);
    }
  
    enrollStudentInCourse(studentId, course) {
      const student = this.students.find((s) => s.studentId === studentId);
      if (student) {
        student.enroll(course);
      } else {
        console.log(`Student with ID ${studentId} not found.`);
      }
    }
  
    displayEnrolledStudents() {
      if (this.students.length === 0) {
        console.log("No students have been admitted yet.");
      } else {
        this.students.forEach((student) => {
          student.displayEnrolledCourses();
        });
      }
    }
  }
  

  const admissionSystem = new Admission();
  
  // admissionSystem.admitStudent("Mithun", 101);
  // admissionSystem.admitStudent("Farman", 102);
  
  // admissionSystem.enrollStudentInCourse(101, "Full Stack Web Development");
  // admissionSystem.enrollStudentInCourse(102, "Data Science Master's");
  
  // admissionSystem.displayEnrolledStudents()
  

// question 3
class Temperature{

  constructor(){
    this.celsius = 0
    this.fahrenheit = 32
  }

  get celsius(){
    return this._celsius
  }
  
  set celsius(value){
    if (value >= 0) {
        this._celsius =  value
        this._fahrenheit = this.celsius * (9/5) + 32
    }
  }
  

  get fahrenheit(){
    return this._fahrenheit
  }
  
  set fahrenheit(value){
    if (value >= 32) {
      this._fahrenheit =  value
      this._celsius = (this.fahrenheit - 32) * 5/9
  }
  }

}

const temperature = new Temperature();
// console.log(`Intial Celsius: ${temperature.celsius}*C`);
// console.log(`Intial Fahrenheit: ${temperature.fahrenheit}*F`);

temperature.celsius = 25;
// console.log(`Celsius: ${temperature.celsius}*C`);
// console.log(`Intial Fahrenheit: ${temperature.fahrenheit}*F`);

temperature.fahrenheit = 68;
// console.log(`Celsius: ${temperature.celsius}*C`);
// console.log(`Intial Fahrenheit: ${temperature.fahrenheit}*F`);



// question 4
class Circle{
  constructor(radius){
    this.radius = radius
  }

  calculateArea(){
    const pie = Math.PI
    return pie * (this.radius * this.radius);
  }

  calculatePerimeter(){
    const pie = Math.PI
    return  2 * pie *(this.radius);
  }
}
class Rectangle{
  constructor(length, width){
    this.length = length
    this.width = width
  }

  calculateArea(){
    return this.width * this.length
  }

  calculatePerimeter(){
    return 2 * (this.length + this.width)
  }
}
class Triangle{
  constructor(base, height, a, b, c){
    this.base = base
    this.height = height
    this.a = a
    this.b = b
    this.c = c
  }

  calculateArea(){
    return (this.base / 2) * this.height
  }

  calculatePerimeter(){
    return this.a + this.b + this.c
  }
}

const circle = new Circle(5)
// console.log(`Circle - Area: ${circle.calculateArea()}, Perimeter: ${circle.calculatePerimeter()}`);

const rectangle = new Rectangle(4, 6)
// console.log(`Rectangle - Area: ${rectangle.calculateArea()}, Perimeter: ${rectangle.calculatePerimeter()}`);

const triangle = new Triangle(8, 6, 5, 7, 10)
// console.log(`Triangle - Area: ${triangle.calculateArea()}, Perimeter: ${triangle.calculatePerimeter()}`);


// question 5
function Product(name, category, price, stock) {
  this.name = name
  this.category = category
  this.price = price
  this.stock = stock
}

function Inventory() {
  this.products = [];
}

Inventory.prototype.addProduct = function(product) {
  if (!this.products.includes(product)) {
      this.products.push(product);
      console.log(`${product.name} has been added`);
  } else {
    console.log(`invalid product. please provide a valid project object.`);
  }
}

Inventory.prototype.deleteProduct = function(productName){
  let index = this.products.find(product => product.name === productName)
  if (index !== -1) {
    this.products.splice(index, 1)
    console.log(`${productName} has been removed`);
  } else {
    console.log(`product not found`);
  }
}

const inventory = new Inventory

const product1 = new Product('Laptop', 'Electronic', 899, 10)
const product2 = new Product('Book', 'Books', 20, 50)

inventory.addProduct(product1)
inventory.addProduct(product2)
console.log(inventory.products)

inventory.deleteProduct('laptop')
console.log(inventory.products);
// node script.js