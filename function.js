nums = [2, 23, 52, 22, 64, 52, 64, 87];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
  if (num % 2 == 0) {
      console.log(num, ": is even number");
  }else{
      console.log(num * 2, ": is odd number");
  }
    
};

//friends age

friendsAge = [23, 24, 53, 64, 63, 68, 32];
for (let i = 0; i < friendsAge.length; i++) {
    const age = friendsAge[i];
   if (age % 2 == 0) {
       console.log(age, ": is even number");                    
   }else{
       console.log(age, ": is odd number");
   }
    
}


//use function
function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, ": is even number");
    }else{
        console.log(num * 2, ": is odd number");
    }
}

nums = [2, 23, 52, 22, 64, 52, 64, 87];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num);

    
}

//2nd example
friendsAge = [23, 24, 53, 64, 63, 68, 32];
for (let i = 0; i < friendsAge.length; i++) {
    const age = friendsAge[i];
  evenify(age)
    
}


//3rd example
function evenify(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num % 2 == 0) {
            console.log(num, ": is even number");   
        }else{
            console.log(num * 2, ": is odd number" );
        }
    }
}

nums = [32, 55, 3, 4, 56, 23, 56];
evenify(nums);


