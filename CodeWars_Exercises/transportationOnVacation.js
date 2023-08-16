/* Another day another challenge, still on easy mode but just want to make sure I complete one, been working on getting more of my financials and other commitments and disciplines in order to be able to code more 


Description 

After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).


*/

function rentalCarCost(d) {
    let total = d * 40;
    if (d >= 7) {
        total -= 50;
    } else if (d >= 3) {
        total -= 20;
    }
    return total;

}

console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(2)); // 80
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(7)); // 230
