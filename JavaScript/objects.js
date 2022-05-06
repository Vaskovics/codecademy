
// const staffline = {
//     viktor: 'Vaskovics',
//     sandor: "Suszta",
//     gyorgy: "Pavley",
//     gabriel: 'Brinzel',
// };

// let key = Object.keys(staffline);
// let vals =Object.values(staffline);
// let entries = Object.entries(staffline);

// console.log(key);
// console.log(vals);
// console.log("____________")
// console.log(entries);

// let numO = [
//     [1, 5, 3, 7, 9, 11],
//     [2, 4, 6, 8, 10],
//     [21, 24, 27, 7, 10, 13]
// ];

// //nested loop
// for(let row of numO){
//     for(let i of row){
//         console.log(i);
//     }
// };

// const workers = {
//     supervisors: [
//         {name: "Viktor", gender: "male"},
//         {name: "Desi", gender: "female"},
//         {name: "George", gender: "male"},
//         {name: "Linda", gender: "female"},
//     ]
// }

// for(let obj of workers.supervisors){
//     console.log(obj);
   

//     for(let kv in obj){
//         console.log(kv);
//     };
// };

const monsterFactory = (name, age, energy, power) => {return {
    _name: name,
    _age: age,
    _energy: energy,
    power: power,
    set name(n){this._name = n},
    get name(){return this._name},
    get age(){return this._age},
    get energy(){return this._energy},

    

}
};

let monster1 = monsterFactory('John', 19, 199, 22);

monster1.name ='Pinka';

console.log(monster1);
