// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// FUNDAMENTALS

//Feel okay about this one,  had to ask ChatGPT to explain why my original Case statements weren't working and I learned that the switch statement had to be switched to "true" from score so it can look for that value in my cases.
// I looked to use case/switch in this exercise instead of if..else to get some more practice and understand it better but still need to practice more with it.

function getGrade (s1, s2, s3) {
    // Code here
    let score = (s1 + s2 + s3) / 3;
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
console.log(getGrade(82, 85, 87));