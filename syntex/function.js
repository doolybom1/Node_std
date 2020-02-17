console.log(Math.round(1.6)); // 2
console.log((Math.round(1.4))+'\n'); // 1
function sum(num1) {
    console.log(num1);
}

function sum(num1, num2) {
    console.log(num1+num2);
    return num1*num2;
}

console.log(sum(2,4));