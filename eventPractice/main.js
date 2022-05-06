let btn = document.getElementById('btn');


const addH1 = ()=>{
    let newH1 = document.createElement('p');
    newH1.innerHTML = '<h1>This is new H1</h1>'
    document.body.appendChild(newH1);
};

function msg(){
    alert("Hi!");
}; 

btn.addEventListener('click', addH1);

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

const func1 = ()=>{
    console.log('Button one is pressed');
    one.style.width = '60px';
}

one.addEventListener('click', func1)

const func2 = ()=>{console.log('Button two is pressed')}
two.addEventListener('click', func2)