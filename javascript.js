let  inputOne = document.getElementById("numOne");
let  inputTwo = document.getElementById("numTwo");
let  outCome = document.getElementById("outCome");



function add()  {
  if (inputOne.value && inputTwo.value) {
    let operation =parseInt (inputOne.value) + parseInt (inputTwo.value);
    outCome.value = `${operation}`;
  }else {
    alert("Enter all the inputs!!! :(");
  }
}
function substract()  {
    if (inputOne.value && inputTwo.value) {
      let operation =parseInt (inputOne.value) - parseInt (inputTwo.value);
      outCome.value = `${operation}`;
    }else {
      alert("Enter all the inputs!!! :(");
    }
}

function multiply()  {
    if (inputOne.value && inputTwo.value) {
      let operation =parseInt (inputOne.value) * parseInt (inputTwo.value);
      outCome.value = `${operation}`;
    }else {
      alert("Enter all the inputs!!! :(");
    }
}

function divide()  {
    if (inputOne.value && inputTwo.value) {
      let operation =parseInt (inputOne.value) / parseInt (inputTwo.value);
      outCome.value = `${operation}`;
    }else {
      alert("Enter all the inputs!!! :(");
    }
  }

function reset() {
   outCome.value = "";
   inputOne.value = "";
   inputTwo.value = "";
}

// let sum = document.getElementById("add"); 

// sum.addEventListener("click", () => {
//     let operation = inputOne.value + inputTwo.value;
//     console.log(operation);
// })