const arraysOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 10];

const filterArray = arraysOfNumbers.filter((p) => p > 4);
console.log(filterArray);

const mapNumber = arraysOfNumbers.map((val) => ({ num: val }));
console.log(mapNumber);

const sum = arraysOfNumbers.reduce(
	(curResult, curValue) => curResult * curValue,
	1
);
console.log(sum);

function findMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}

const [min, max] = findMax(...arraysOfNumbers);

console.log(findMax(...arraysOfNumbers));

const userIds = new Set();
userIds.add(9.79);
userIds.add(3.21);

console.log(userIds);