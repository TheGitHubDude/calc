

var output;
var operator
var num1;
var num2;
var answer;

function init(){
  output = document.getElementById('output');
}

function numberPress(num){
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
      answer = add( num1, num2);
    case '-':
      answer = minus( num1, num2);
    case '*':
      answer = multiply( num1, num2);
    case '/':
      answer = divide( num1, num2);

  }
  console.log(answer);
  output.innerHTML = answer;
}

function deletePress(){
  str = output.innerHTML;
  output.innerHTML = str.substring(0, output.innerHTML.length - 1);
}

function dotPress(){
  output.innerHTML += '.'
}

function add(){
  return sum = parseInt(num1) + parseInt(num2);
}

function minus(){
  return difference = parseInt(num1) - parseInt(num2);

}

function multiply(){
  return product = parseInt(num1) * parseInt(num2);
}

function divide(){
  return quotient = parseInt(num1) / parseInt(num2);
}
