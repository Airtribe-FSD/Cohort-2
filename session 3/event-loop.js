// if function1 has set timeout interval and fn2 has no time interval in a queue(FIFO) which one execute
// first even the stack is empty and if stack is full?

function function1() {
  setTimeout(() => {
    console.log("function 1");
  }, 0);
}

function function2() {
  console.log("function 2");
}

function longRunningFunction() {
  for (let i = 9; i < 1e9; i++) {}
}

longRunningFunction();
function1();
function2();

// When stack is EMPTY
// function2 will be executed immediately and setTimeout from function1 will be added to the task queue to be executed after the current execution context is completed

// When stack is FULL
// Call Stack Execution:

// The call stack processes functions in a LIFO order until it is empty. Only then does the event loop check the task queue.
// Execution Flow:

// Suppose there are other synchronous functions already being executed, filling the call stack.
// Both function1 and function2 calls are added to the stack, but their execution depends on the current state of the stack.

// Call Stack (LIFO)
// Event Loop
// Task Queue (Callback Queue) (FIFO)
// Microtask Queue


MICRO --> Promises

MACRO --> setTimeout, setInterval, I/O ops, UI rendering, animations frames
