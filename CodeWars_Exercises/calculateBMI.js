/* 
        Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) { // weight in kg, height in meters
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    };    
    
}


    console.log(bmi(80, 1.80)); // "Normal"
    console.log(bmi(90, 2.80)); // "Normal"
    console.log(bmi(100, 1.20)); // "Normal"

// Journaly Entry:   

/* gotta be honest, been very distracted this week, not really meeting my goals. I'm going to try to get back on track this weekend.  I have a lot of work to do. I have managed to get other side quests done and work out 3 times this week as well as do my minimum one short exercise like above in the past 3 days so thats still a win.  Also have managed to enjoy my family time and help out more if you ask me, as well as finish my Atomic Habits book, which reminds me I want to work on implementing the Laws of that book under some of the suggested structure, especially the habit tracker, one or two simple habits using habit stacking and a written down and agreed upon identity and core values to review on later on */

