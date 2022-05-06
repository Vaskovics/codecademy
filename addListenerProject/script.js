const btn = document.getElementsByClassName('.btn');

function msg(){
    alert('Button pressed!')
}

btn.addEventListener('click', msg)