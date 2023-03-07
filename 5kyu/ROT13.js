// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
  let newStr = str.split('').map((char) => handleAscii(char))
  return newStr.join('')
}

function handleAscii(char){
  let charDec = char.charCodeAt(0)
  let newChar
  // Big letters
  if (charDec >= 65 && charDec <= 90){
    if (charDec + 13 > 90){
      let tmpChar = charDec + 13
      tmpChar = tmpChar - 90
      newChar = tmpChar + 64
    }else {
      newChar = charDec + 13
    }
  }
  // Small letters
  else if (charDec >= 97 && charDec <= 122){
    if (charDec + 13 > 122){
      let tmpChar = charDec + 13
      tmpChar = tmpChar - 122
      newChar = tmpChar + 96
    }else {
      newChar = charDec + 13
    }
    
  }
  // Anything else
  else {
    newChar = charDec
  }
  return String.fromCharCode(newChar)
}