/* 
Task
Coding in function tailAndHead. function accept 1 parameter arr(a number array).

We use an example to explain this task:

You got an array [123,456,789,12,34,56,78].

First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

[123,456,789,1 2,3 4,5 6,78]
   3+4 6+7 9+1 2+3 4+5 6+7  
    |   |   |   |   |   |
   [7 ,13 ,10 , 5 , 9 ,13]
And then, Calculate their product and return it(7x13x10x5x9x13=532350)

So, tailAndHead([123,456,789,12,34,56,78]) should return 532350 

All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

*/

function tailAndHead(arr) {
    return arr.reduce((acc, num, index) => {
        let num2 = arr[index + 1];
        if (num2) {
            acc *= (num.toString().split('').pop() * 1) + (num2.toString().split('').shift() * 1);
        }
        return acc;
    }, 1);
}

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]), 532350);
console.log(tailAndHead([1, 2, 3, 4, 5]), 945);
console.log(tailAndHead([111, 2345, 66, 78, 900]), 7293);