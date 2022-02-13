let number=document.getElementById("number");
let check=document.getElementById("check");
let try1=document.getElementById("try1");
let button1=document.getElementById("button1");
let number1= 25/* Math.floor(Math.random() * 101) */
let attemps=document.getElementById("attemps");
let h2=document.getElementById("h2")
let h3=document.getElementById("h3")
console.log();
check.addEventListener("click", ()=>{
    if (number.value==number1) {
        h2.style.fontSize="1.5rem";
        h2.innerText=`Congrats, you found the number on your ${11-Number(try1.innerText)} attempt`;
        attemps.style.display = "none";
        button1.style.display = "block";

    }
    else if (number.value>number1){
        h2.style.fontSize="1.5rem";
        h2.innerText=`Please enter a smaller number, between 0 and ${number.value}`
        try1.innerText=Number(try1.innerText)-1
        if(try1.innerText==0){
            h2.innerText="Sorry, you failed."
            attemps.style.display = "none";
            button1.style.display = "block";
    
        }
    }
    else if (number.value<number1){
        h2.style.fontSize="1.5rem";
        h2.innerText=`Please enter a greater number, between ${number.value} and 100`
        try1.innerText=Number(try1.innerText)-1
        if(try1.innerText==0){
            h2.innerText="Sorry, you failed."
            attemps.style.display = "none";
            button1.style.display = "block";
    
        }
        
    }
    }
)
button1.addEventListener("click", ()=>{
    try1.innerText="10";
    attemps.style.display = "flex";
    })




