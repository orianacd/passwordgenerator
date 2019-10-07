var password = [""];
var passwordLength = prompt("What is your password length?");
var isLettersLower = confirm("Do you want lower case letters?");
var lettersLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var isLettersUpper = confirm("Do you want upper case letters?");
var lettersUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var isSymbols = confirm("Do you want symbols?");
var symbols = ["!", "@", "#", "$", "&"];
var isNumbers = confirm("Do you want numbers?");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/* defined function*/
//THIS IS BIG BOI FUNCTION
function pwGen() {
  for (i = 0; i < passwordLength; i++);
  if (isSymbols === true && i === 0) {
    var randomSymbols = Math.floor(Math.random() * symbols.length);
    password.push(symbols[randomSymbols]);
    //password = password + symbols[randomSymbol];
  }
  if (isNumbers === true && i === 1) {
    var randomNumbers = Math.floor(Math.random() * numbers.length);
    password.push(numbers[randomNumbers]);
  }
  if (isLettersLower === true && i === 2) {
    var randomLettersLower = Math.floor(Math.random() * lettersLower.length);
    password.push(lettersLower[randomLettersLower]);
  }
  if (isLettersUpper === true && i === 3) {
    var randomLettersUpper = Math.floor(Math.random() * lettersUpper.length);
    password.push(lettersUpper[randomLettersUpper]);
  } else {
    dumbalert = confirm("Must select something, dumb dumb!");
    pwGen();
  }
}

newPassShuffle = shuffle(password); //shuffle passed array
passwordBox.textContent = password.join(""); //turns array of single vaslues into one string smushed together

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there elements to shuffle, do this
  while (0 !== currentIndex) {
    // Pick an element in the index
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex = 1;
    // swaps element it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//var randomNumber = Math.floor(Math.random() * letters.length);
//passwordBox.innerHTML = letters[randomNumber];

//change this pw into a dynamic random pw
//document.write(password);

//copy text inside passphrase box to clipboard function
function copyPass() {
  var str = document.getElementById("newPassGox").innerHTML;
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}
