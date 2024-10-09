let seven=document.getElementById("seven");
seven.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    
    
    inp.value+=7;

    
});
let eight=document.getElementById("eight");
eight.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    
    
    inp.value+=8;
    
    
});
let nine=document.getElementById("nine");
nine.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    
    
    inp.value+=9;
    
    
});
let times=document.getElementById("times");
times.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    
    
    inp.value+='*';
    
    
});
let four=document.getElementById("four");
four.addEventListener("click",function(){
    let inp=document.getElementById("calculator");    
    inp.value+=4;
});
let five=document.getElementById("five");
five.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=5;
    
    
});
let six=document.getElementById("six");
six.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=6;
    
    
});
let minus=document.getElementById("minus");
minus.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+="-";
    
    
});
let one=document.getElementById("one");
one.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=1;
    
    
});
let two=document.getElementById("two");
two.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=2;
    
    
});
let three=document.getElementById("three");
three.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=3;
    
    
});
let zero=document.getElementById("zero");
zero.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=0;
    
    
});
let dot=document.getElementById("dot");
dot.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value+=".";
    
    
});
let equal=document.getElementById("equal");
equal.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value=eval(inp.value)
    
    
});
let ac=document.getElementById("ac");
ac.addEventListener("click",function(){
    let inp=document.getElementById("calculator");
    inp.value="";
    
    
});
// let bracket=document.getElementById("bracket");
// bracket.addEventListener("click",function(){
//     let inp=document.getElementById("calculator");
//     inp.value+="(";///then )
    
    
// });
let bracket = document.getElementById("bracket");
let isOpen = false; // Track whether the last parenthesis added was '('

bracket.addEventListener("click", function() {
    let inp = document.getElementById("calculator");
    if (isOpen) {
        inp.value += ')'; // Append closing parenthesis if currently open
    } else {
        inp.value += '('; // Append opening parenthesis if currently closed
    }
    isOpen = !isOpen; // Toggle the state
});

// let five=document.querySelector("#five");
// onclick=ex3;
// function ex3(){
//     let i=document.getElementById("calculator");
//     i.value+=5;
// }


let addition=document.getElementById("addition");
addition.addEventListener("click",function(){
    let ibbn=document.getElementById("calculator");
    
    
    ibbn.value += '+';
    
    
});
let del=document.getElementById("del");
del.addEventListener("click",function(){
    let ibbn=document.getElementById("calculator");
    
    
    ibbn.value = ibbn.value.slice(0,-1);
    
    
});
let percent=document.getElementById("percent");
percent.addEventListener("click",function(){
    let ibbn=document.getElementById("calculator");
    ibbn.value +='%';
    
    
});
let divide=document.getElementById("divide");
divide.addEventListener("click",function(){
    let ibbn=document.getElementById("calculator");
    
    
    ibbn.value +='/';
    
    
});