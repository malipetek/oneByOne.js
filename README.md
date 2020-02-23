# oneByOne.js
Array.forEach replacement for async operations

oneByOne.js allows you to loop over a array and execute some async operations. Method itself returns a promise and resolves into an array of results of executions just like `Promise.all`.

Difference from `Promise.all` is, your actions are executed sequentially and you have access to previous results.

Example 1: 
```js
require('oneByOne');

['a', 'b', 'c', 'd'].oneByOne(function(element, index, results, previousResult) {
  return new Promise(functions(done) {
    fetch('www.google.com/?q=' + element)
    .then(function(response) { return response.text() })
    .then(function(responseText) {
      done(responseText); 
    }) 
  });
});
``` 

Example 2: 
```js
require('oneByOne');

['a', 'b', 'c', 'd'].oneByOne(async (element, index, results, previousResult) => {
    const response = await fetch('www.google.com/?q=' + this)
    const responseText = await response.text();
    return responseText;
});
``` 
It does not export anything, so you just include it.
