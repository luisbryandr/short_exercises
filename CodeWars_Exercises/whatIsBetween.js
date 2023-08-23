/* Back on the saddle, proud of this right here.  Simple exercise but the fact that I got it on first try, but more so because it shows my growth as a programmer or my experience with code because I was able to think about this problem pragmatically and knew certain intricancies of code, for loop and JavaScript in particular

Also proud because I've been in a slump the past two days from being sick, and a bad moneymaking weekend, as well as the fact that I may be unable to legally work for only God knows how long starting next thursday*/

function whatIsBetween(a, b) {
    // your code here
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    console.log(result);
    return result;
    }

    console.log(whatIsBetween(1, 4));
    console.log(whatIsBetween(-2, 2));
    console.log(whatIsBetween(20, 25));