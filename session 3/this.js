// Regular Functions
// the value of 'this' keyword is determined based on how the function is called.

// Global Context

function regFunc() {
  console.log(this);
}

// regFunc();

// Object Method

const obj = {
  value: 42,
  regFunc: function () {
    console.log(this);
  },
};

obj.regFunc();

// Constructor Function

function Person(name) {
  this.name = name;
}

const person = new Person("Divyansh");
// console.log(person.name);

// Event Handler

// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log(this);
// });

// Arrow Functions - lexical scoping

// Global Context
const arrowFunc = () => {
  console.log(this);
};

// arrowFunc();

const obj1 = {
  value: 42,
  regFunc: function () {
    const arrowFunc = () => {
      console.log(this);
    };
    arrowFunc();
  },
  arrow1Func: () => {
    console.log(this);
  },
};

obj1.regFunc();
obj1.arrow1Func();
