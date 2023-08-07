function retrieveAllKeysLocalStorage() {
    let array = [];
    for (var key in localStorage) {
      array.push(key);
    }
    array.splice(array.length - 6, 6);
    return array;
    }
  
function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
let sortedArr = []; // the sorted items will go here
while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0].high_Score > right[0].high_Score) {
    sortedArr.push(left.shift());
    } else {
    sortedArr.push(right.shift());
    }
}
// Use spread operators to create a new array, combining the three arrays
return [...sortedArr, ...left, ...right];
}

let arrayUserKey = retrieveAllKeysLocalStorage();

let arrayUserObjects = []
arrayUserKey.forEach((key) => {
let userObject = JSON.parse(localStorage[key])
arrayUserObjects.push(userObject)
})

// mergeSort(arrayUserObjects)

console.log(mergeSort(arrayUserObjects))

let sorted=mergeSort(arrayUserObjects);


var elem_3= document.getElementById("winner_Name");
elem_3.innerHTML = sorted[0].name ;

var elem_4= document.getElementById("winner_Score");
elem_4.innerHTML = sorted[0].high_Score ;



var elem_5= document.getElementById("runner_up_1_name");
elem_5.innerHTML = sorted[1].name ;

var elem_6= document.getElementById("runner_up_1_score");
elem_6.innerHTML = sorted[1].high_Score ;



var elem_7= document.getElementById("runner_up_2_name");
elem_7.innerHTML = sorted[2].name ;

var elem_8= document.getElementById("runner_up_2_score");
elem_8.innerHTML = sorted[2].high_Score ;



var elem_9= document.getElementById("runner_up_3_name");
elem_9.innerHTML = sorted[3].name ;

var elem_10= document.getElementById("runner_up_3_score");
elem_10.innerHTML = sorted[3].high_Score ;



var elem_11= document.getElementById("runner_up_4_name");
elem_11.innerHTML = sorted[4].name ;

var elem_12= document.getElementById("runner_up_4_score");
elem_12.innerHTML = sorted[4].high_Score ;