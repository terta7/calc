let a, b, op;
function Calc (a, b, op){
switch (op){
case typeof a != "number" || typeof b != "number":
return "Error";

case "sum":   return a + b;

case "sub":    return a - b;

case "multi":   return a * b;

case "div":    return a / b;

case "exp":    return a ** b;

case "rev":    return a % b;

default: 
return "unknown operation"
}
}

console.log (Calc (7, 678, "sum"))
