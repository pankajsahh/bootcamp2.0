

// take reference from ZTM cheatsheet
//https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/


// tell the memory heap to allocate memory for a number
const number = 11;
// allocate memory for a string
const string = "some text";
// allocate memory for an object and it's values
const person = {
  first: "Brittney",
  last: "Postma"
};


//enviroments about lexical enviremtnt and global enviroment
function one() {
    var isValid = true; // local env
    two(); // new execution context
  }
  
  function two() {
    var isValid; // undefined
  }
  
  var isValid = false; // global
  one();
  
  /* 
     two() isValid = undefined
     one() isValid = true
     global() isValid = false
     ------------------------
     call stack
  */