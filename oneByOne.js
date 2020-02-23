Array.prototype.oneByOne = function(action){
    var arr = this;
    return new Promise(function(resolve, reject){
      var results = [];
      var act = function (i) {
        // action expexted to return a promise but otherwise should still work
        var actionResult = action.call(arr[i], arr[i], i, results, results[i - 1]);
        if(!actionResult || actionResult.constructor != Promise){
          actionResult = new Promise(function (res, rej){
            res(actionResult);
          });
        }
        actionResult.then(function (resultOfSomething) {
          results.push(resultOfSomething);
          if(++i < arr.length) {
            act(i);
          }else{
            resolve(results);
          }
        }).catch(function(err) {throw new Error(err)});
      }
      act(0);
    });
  }
