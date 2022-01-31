let a, b, op;

function Calc (a, b, op){

let operations ={
sum: a + b,
sub: a - b,
mult: a*b,
div: a / b,
exp: a ** b,
rev: a % b,
};
const notNum = (typeof a !== 'number') || (typeof b !== 'number');
if (notNum){
return "Error";
}
if (operations[op]) {
        return(operations[op]);
    } 
    else {
        return('unknown operation');
}

}
console.log(Calc(1, 2, 'sum'))
