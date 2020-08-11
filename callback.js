//Callback function and pass different function

function explainCallback(name, age, task) {
    console.log("hello", name);
    console.log("your age ", age);
    washHand();
    
}

function washHand(){
    console.log("wash hand with soap");
}

explainCallback("mahadi", 14);
explainCallback("hasan", 16);
