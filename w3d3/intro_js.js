function uniq(arr) {
  let uniqs = [];

  for(var i = 0; i < arr.length; i++) {
    if (uniqs.includes(arr[i])) {
      continue;
    } else {
      uniqs.push(arr[i]);
    };
  };
  return uniqs;
}

function twoSum(arr) {
  let twoSums = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = (i + 1); j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }
  return twoSums;
};

function transpose(arr) {
  let transposed = [];

  for (var i = 0; i < arr[0].length; i++) {
    transposed.push([]);
  }

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr[i].length; k++) {
      transposed[k].push([arr[i][k]]);
    }
  }

  return transposed;
};

Array.prototype.myEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
    return this;
  }

Array.prototype.myMap = function (callback) {
  this.myEach((el, i) => { this[i] = callback(el, i) });
  return this;
}

Array.prototype.myInject = function (callback) {
  let accum = this[0];

  this.myEach((el, i) => {
    if (i !== 0) {
      accum = callback(accum, el);
    }
  });
  return accum;
}

function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let lesser = arr[i + 1];
        arr[i + 1] = arr[i]
        arr[i] = lesser;
        sorted = false;
      }
    }
  }
  return arr;
}

function substrings(str) {
// ['boba'] => [b, bo, bob, boba, o, ob, oba, b, ba, a]
  let subbies = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      subbies.push(str.slice(i, j));
    }
  }
  return subbies;
}

function range(start, end) {
  if (end < start) {
    return [];
  }

  let nums = [];
  nums.push(start);
  nums = nums.concat(range((start + 1), end));

  return nums;
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;
  total = arr.pop();
  total += sum(arr);

  return total;
}

function fibonnacci(n) {
  if (n <= 2) {
    return [0, 1].slice(0, n);
  }

  let fibs = fibonnacci(n - 1);
  fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);

  return fibs;
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  let midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) {
    return midIdx;
  }

  if (target < arr[midIdx]) {
    let left = arr.slice(0, midIdx);
    // console.log(left);
    return bsearch(left, target);
  } else {
    let right = arr.slice(midIdx + 1);
    // console.log(right);
    let searchResults = bsearch(right, target);
    console.log(searchResults);
    console.log(midIdx);
    return searchResults === null ? searchResults : (searchResults + midIdx + 1);
  }
}

function fibonnacci(n) {
  if (n <= 2) {
    return [0, 1].slice(0, n)
  }

  let fibs = fibonnacci(n - 1);
  fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);

  return fibs;
}
