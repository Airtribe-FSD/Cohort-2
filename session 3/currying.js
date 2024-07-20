// CURRYING

// Break your functions such that every new function created(curried function) will only take one argument,
// you break your functions into new until all arguments have been passed. Each curried function returns another curried
// function until all arguments have been consumed.

const alpha = (a, b, c) => {
  // logic
  return a + b + c;
};

alpha(1, 2, 3); // 6

const func1 = (a) => {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

func1(1)(2)(3); // 6

const f1 = func1(1);
const f2 = f1(2);
const f3 = f2(3);
console.log("🚀 ~ f3:", f3);
// -------------------------------------------------------------------------------------------------------------------------------------------------------
