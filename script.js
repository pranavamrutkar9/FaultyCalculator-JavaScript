let random = Math.random()

/*
        + ---> -
        * ---> +
        - ---> /
        / ---> *
*/

if(random > 0.1){
    function sum(a, b){
        return (a)+(b);
    }
    function subtract(a, b){
        return a-b;
    }
    function multiply(a, b){
        return a*b;
    }
    function divide(a, b){
        return a/b;
    }
}
else {
    function sum(a, b){
        return a-b;
    }
    function subtract(a, b){
        return a/b;
    }
    function multiply(a, b){
        return a+b;
    }
    function divide(a, b){
        return a*b;
    }
}

let a = Number(prompt("Enter Value of a: "))
let b = Number(prompt("Enter Value of b: "))
console.log(random)
console.log("Sum of a and b:",sum(a,b))
console.log("Difference of a and b:", subtract(a,b))
console.log("Product of a and b:", multiply(a,b))
console.log("Divvision of a and b:", divide(a,b))