/* In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

*/

function printerError(s) {
    const den = String(s.length)
    let num = ''
    let errCounter = 0
    const sArr = s.split('')
    const cArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
    
    sArr.forEach(el => cArr.includes(el) ? console.log(el) : errCounter += 1 )

    num = String(errCounter)
  
    return num + '/' + den
}

/* 
const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {   
    let s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "3/56")
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "6/60")
    s = "kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"
    Test.assertEquals(printerError(s) , "11/65")
    s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmm"
    Test.assertEquals(printerError(s), "0/53")
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    function do_ex() {
        let i = 0, res = "";
        let k = randint(10, 500);
        while (i < ~~3*k/2) {
            let n = randint(97, 109);
            res += String.fromCharCode(n);
            i++;
        }
        while (i < 2 * k) {
            if (i % 17 === 0) n = randint(110, 122); else n = randint(97, 109);
            res += String.fromCharCode(n);
            i++;
        }
        return res;
    }    
    //................
    function printerErrorSol(s) {
        let cnt = 0, l = s.length;
        for(let i = 0; i < l; i++) {
            let c = s.charCodeAt(i);
            if (c > 109 && c <= 122) cnt++;
        }
        return +cnt + "/" +l;
    }   
    //................
    
    for (let i = 0; i < 200; i++) {
        let s = do_ex();
        it("Testing printerError: ", function() {
            Test.assertEquals(printerError(s), printerErrorSol(s));
        }
    )}
})
*/