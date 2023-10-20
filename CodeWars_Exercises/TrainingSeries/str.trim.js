function fiveLine(s) {
    let str = s.trim();
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += `${str}\n`;
        str += s.trim();
    }
    return result.trim();
}

/* 


Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.


*/