const studentAge = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
let sortStudentAge = studentAge.sort();

// Approach 1
let minVal = Math.min(...sortStudentAge);
let maxVal = Math.max(...sortStudentAge);

// console.log(minVal);
// console.log(maxVal);

// Approach 2
let myArr = Infinity, // provided by JS
  myArr2 = -Infinity;

for (item of sortStudentAge) {
  if (item < myArr) {
    myArr = item;
  }
  if (item > myArr2) {
    myArr2 = item;
  }
}

// console.log(myArr, myArr2);

// - Find the median age(one middle item or two middle items divided by two)
function findMedian(arr) {
  const sortArr = arr.sort();
  const median = sortArr.length / 2;

  if (sortArr.length % 2 === 0) {
    return (sortArr[median - 1] + sortArr[median]) / 2;
  }
  sortArr[median];
}

// console.log("median is : ", findMedian(sortStudentAge));

// - Find the average age(all items divided by number of items)

let studentCount = studentAge.length;
let studentsTotalAge = studentAge.reduce((curr, arr) => curr + arr);
let avgAgeOfStuent = Math.floor(studentsTotalAge / studentCount);
// console.log(avgAgeOfStuent);

// - Find the range of the ages(max minus min)
function getMinMax(arr) {
  let minAge = arr[0],
    maxAge = arr[0];

  for (item of sortStudentAge) {
    if (item < minAge) {
      minAge = item;
    }
    if (item > maxAge) {
      maxAge = item;
    }
  }
  console.log('Age range is : ',(maxAge - minAge));

  // - Compare the value of (min - average) and (max - average), use abs() method
  console.log(`Abs value of Min is : ${Math.abs(minAge - avgAgeOfStuent)}`)
  console.log(`Abs value of Min is : ${Math.abs(maxAge - avgAgeOfStuent)}`)
}


getMinMax(sortStudentAge)


