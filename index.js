function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string) {
  return console.log(string.toUpperCase());
}

function logWhisper(string) {
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  
  var s = string;
  if (s.toUpperCase() === string)
    return string.toUpperCase();
  else if (s.toLowerCase() === string)
    return string.toLowerCase();
  else
    return string
    
  
}

