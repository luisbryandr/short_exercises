//Tried to do this under 10 min timer. but failed. resorted to google for help. and got this from Stack Overflow.

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}