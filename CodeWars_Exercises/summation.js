/* Struggled to get back on it this week after a long, restless weekend.  But happy to be back on track.

    Todays exercise was an easy Summation factorial problem.

    Grasshopper - Summation
        Summation
            Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

                For example (Input -> Output):

                2 -> 3 (1 + 2)
                8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
                    
                    FUNDAMENTALS,MATHEMATICS 
*/

    var summation = function (num) { 

        if(num === 1) {
            return 1;
        } else {
        return num + summation(num - 1);  
        };
    };


    console.log(summation(1));
    console.log(summation(8));

    // 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)