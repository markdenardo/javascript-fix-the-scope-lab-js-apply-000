var animal = 'dog';
var otheranimal = 'cat';
var theFunk = 'FUNKY!'
;
function myAnimal() {
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return otheranimal;
}

function add2(n) {
  const two = 2;
  return n + two;

  // Feel free to move things around!
  
}

function funkyFunction() {
  return function theFunk(string){
    return theFunk;
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

