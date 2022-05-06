const numbers = [ 1, 5, 9, 4, 3, 11, 17, 4];
let a = numbers[0];
let b = numbers[1];
for(let i=1; i<numbers.length; i++){
    
    if(a>numbers[i]){b=a, a=numbers[i]}else if(b>numbers[i]){b=numbers[i]};
};


console.log(a, b,);