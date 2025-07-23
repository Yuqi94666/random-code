1. How can you make a thousand request? 
Create a promise all method or promise all settle

2.The third question was the easiest, second was the hardest and first was medium. They asked to preprocess dates, create a meeting assistant and a message delivery system.

3.Interivew about myself and my experience, then interviewer explained Canva followed by 5 technical questions prepare yourself for promises, set, map(), for loops if you cant ace all 5 you wont move forward. How would you send 1000 requests at once, explain this function that had set in it, last question more challenging around Map() 


-------------Q & A-----------------
Promise:
1 What is the difference between Promise.all and Promise.allSettled?
In summary, Promise.all stops at the first rejection, while Promise.allSettled collects the outcomes of all promises, even if some reject.

2 How do you handle errors in a chain of Promises?
Use catch() blocks, Within a catch block, you can return a rejected promise using Promise.reject(error) to propagate the error to the next catch block.

3 What is the difference between async/await and using Promises with .then?
Readability: Async/await code looks more synchronous and is often easier to read, while Promise chains can become nested and hard to read.
Error handling: Async/await uses try-catch blocks for error handling, while Promises use catch blocks.
Code structure: Async/await code is more linear, while Promise chains can be more flexible.

4 How do you cancel a Promise?
Create a cancel token using a library like cancel-token or axios (which has built-in cancel token support). Pass the token to the promise and check for cancellation within the promise. If canceled, reject the promise.

const cancelToken = new CancelToken();
const promise = new Promise((resolve, reject) => {
  // Check for cancellation
  if (cancelToken.isCancelled) {
    reject(new CancelError());
  }
  // Perform async operation
});
Use a wrapper promise

Create a wrapper promise that can be canceled. When the wrapper promise is canceled, it rejects the original promise.
Use async/await with a timeout to achieve a cancellation-like effect. If the promise doesn't resolve within the timeout, reject it.
async function example() {
  try {
    const result = await promise.timeout(5000); // 5 seconds
  } catch (error) {
    // Handle timeout or rejection
  }
}


What is hoisting in JavaScript?
Hoisting is JavaScript's quirky way of moving variable and function declarations to the top of their scope before code execution—even if they’re written further down in your file
console.log(myVar); // undefined
var myVar = 10;
console.log(myLet); // ❌ ReferenceError
let myLet = 5;
