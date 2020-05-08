# oneByOne.js
Array.forEach replacement for async operations

oneByOne.js allows you to loop over a array and execute some async operations. Method itself returns a promise and resolves into an array of results of executions just like `Promise.all`.

Difference from `Promise.all` is, your actions are executed sequentially and you have access to previous results.

Example 1: 
```js
require('onebyonejs');

['a', 'b', 'c', 'd'].oneByOne(function(element, index, results, previousResult) {
  return new Promise(function (done) {
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
require('onebyonejs');

['a', 'b', 'c', 'd'].oneByOne(async (element, index, results, previousResult) => {
    const response = await fetch('www.google.com/?q=' + this)
    const responseText = await response.text();
    return responseText;
});
``` 
It does not export anything, so you just include it.

[![Edit OneByOne.js](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/onebyonejs-dhj7k?fontsize=14&hidenavigation=1&theme=dark)
