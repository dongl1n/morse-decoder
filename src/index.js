const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' '
};

function findMorse(str){
  for(key in MORSE_TABLE){
    if(key === str) return MORSE_TABLE[key];
  }
}

function convertBinaryToMorse(symbol){
  let arr = [];
  str='';
  for(let i = 0; i < symbol.length; i+=2) arr.push(symbol.slice(i, i + 2));
  for(let i=0; i <arr.length; i++)
    switch (arr[i]) {
      case '00': break;
      case '11': str+='-'; break;
      case '10': str+='.'; break;
      case '**': str+='**'; break;
    }
  return str;
}

function decode(expr) {
    let str='';
    for(let i = 0; i < expr.length; i+=10) str+=findMorse(convertBinaryToMorse(expr.slice(i, i + 10)));
    return str;
}

module.exports = {
    decode
}
