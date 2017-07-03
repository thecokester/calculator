

var box = document.getElementById('display');

function addtoscreen(x){
    box.value += x;
    console.log (x)
    if( x === 'c'){
        box.value = '';
    }
}

function answer(){
    x = box.value
    x = eval(x);
    box.value=x;
    console.log (z)
}

function power(){
    x = box.value;
    x = eval(x*x);
    box.value=x;
}

