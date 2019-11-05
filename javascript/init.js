function add(n1, n2){
  return n1 + n2;
}
function subtract(n1, n2){
  return n1 - n2;
}
function multiply(n1, n2){
  return n1 * n2;
}
function divide(n1, n2){
  return n1 / n2;
  
}

function make_calc(n1, n2, operation){
  if(operation == "add"){
    return add(n1, n2);
  }
  if(operation == "subtract"){
    return subtract(n1, n2);
  }
  if(operation == "multiply"){
    return multiply(n1, n2);
  }
  if(operation == "divide"){
    return divide(n1, n2);
  }
}
var result = 0;

function init(){

  var sum = make_calc(2, 3, "add");
  console.log(sum);
  var subs = make_calc(2, 3, "subtract");
  console.log(subs)
  var mult = make_calc(2, 3, "multiply");
  console.log(mult)
  var div = make_calc(2, 3, "divide");
  console.log(div);
  
  result = sum + subs + mult + div;

  return result;
}


init();


