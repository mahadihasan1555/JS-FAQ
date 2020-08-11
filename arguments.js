// arguments and deal with unknown number of arguments

function addNumber (num1, num2){
    return num1 + num2;
};

var result = addNumber(3, 5);
console.log(result);

//ex-2 (array like object)
function addNumber (num1, num2){
    console.log(arguments);
    return num1 + num2;
};

var result = addNumber(3, 5);
console.log(result);

//ex-3
function addNumber (num1, num2){
   var sum = 0;
   for (let i = 0; i < arguments.length; i++) {
       const num = arguments[i];
       console.log(num);
       
   }
   return num1 + num2
};

var result = addNumber(3, 5, 34, 6, 7, 8, 9);
console.log(result);

//sum
function addNumber (num1, num2){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
       sum = sum + sum;
        
    }
    return sum;
 };
 
 var result = addNumber(3, 7, 4, 7);
 console.log(result);