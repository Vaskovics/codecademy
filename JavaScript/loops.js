const names = ["Sandor", "George", "Sebastian", "Gabriel", "Ladislav", "Desi", "Filip"];
const numbers = [41, 3, 27, 54, 14, 33, 5, 51, 22, 31, 9, 12, 41, 27, 4, 18, 46];
// Print each of name:
for(let i=0; i<names.length; i++){
    console.log(names[i]);
};
console.log("------------------------------");

// ForEach method:
names.forEach((name, index) => console.log(index, name));

// map method
const square = numbers.map(number=>{return number*number;});
console.log(square);

// filter method:

const oddNumbers = numbers.filter(number=> {
    if(number%2===0){return number}
});
console.log(oddNumbers);

// reduce method:

const sum = numbers.reduce((currentValue, startValue)=>{
    return currentValue+startValue;
}, 0);
console.log(sum);

let total=0;
numbers.forEach(number=>total += number);
console.log(total);

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number'){
        console.log(`My current level is ${this._energyLevel}`)
      }
    }
  };

  robot.energyLevel;
  