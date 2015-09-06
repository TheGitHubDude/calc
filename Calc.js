

var output;
var operator;
var num1;
var num2;
var answer;

function init(){
  output = document.getElementById('output');
}

function numberPress(num){
if(num1 === 'reset'){
  output.innerHTML = '';
}
  output.innerHTML += num;

}

function operatorPress(op){
  operator = op;
  num1 = output.innerHTML;
  console.log("num1: " + num1 + "\n"
            + "operator: " + operator);
output.innerHTML = '';
}

function equalsPress(){
  num2 = output.innerHTML;
  console.log("   num2: " + num2 + "\n")

  switch(operator){
    case '+':
      answer = add();
      break;
    case '-':
      answer = minus();
      break;
    case '*':
      answer = multiply();
      break;
    case '/':
      answer = divide();
      break;
  }
  console.log(answer);
  output.innerHTML = answer;
  num1 = 'reset';
  num2 = 0;
}

function deletePress(){
  str = output.innerHTML;
  output.innerHTML = str.substring(0, output.innerHTML.length - 1);
}

function dotPress(){
  output.innerHTML += '.';
}

function add(){
  return sum = parseFloat(num1) + parseFloat(num2);
}

function minus(){
  return difference = parseFloat(num1) - parseFloat(num2);

}

function multiply(){
  return product = parseFloat(num1) * parseFloat(num2);
}

function divide(){
  return quotient = parseFloat(num1) / parseFloat(num2);
}
