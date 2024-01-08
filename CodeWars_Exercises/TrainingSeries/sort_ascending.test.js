const input = [1, 1, 1, 2, 2, 3];
const expectedOutput = [3, 2, 2, 1, 1, 1];

const result = sortIt(input);

console.log(result); // Output: [3, 2, 2, 1, 1, 1]
console.log(result.length === expectedOutput.length && result.every((value, index) => value === expectedOutput[index])); // Output: true