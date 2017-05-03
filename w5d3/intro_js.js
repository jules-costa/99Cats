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

uniq([1, 2, 3, 4, 5, 6, 6, 9, 1]);

//How to only return unique inner arrays? Can you even nest while loops?

function twoSum(arr) {
  let twoSums = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else if (twoSums.includes([i, j])) {
        continue;
      } else if (arr[i] + arr[j] === 0) {
        twoSums.push([i, j]);
      } else {
        continue;
      }
    };
  };
  return twoSums;
}

// let i = 0;
// let j = 1;
// while (i < arr.length) {
//   while (j < arr.length) {
//     if (arr[i] + arr[j] === 0) {
//       twoSums.push([i, j]);
//     } else {
//       continue;
//     }
//     j++;
//   }
//   i++;
// };
function transpose(arr) {

  // [[1,2], [3, 4], [5, 6]] => [[1, 3, 5], [2, 4, 6]]
  // find longest inner arr
  //grab el's from inner arrays that share same index, push into results as an array
  //if an inner arr if shorter than the longest, shovel in nil

}


function myEach(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function myMap(arr) {


}
function myInject(arr) {

}


function bubbleSort(arr) {

}

function substrings(arr) {

}
