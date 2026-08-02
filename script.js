
let counters=document.querySelectorAll("[data-number]");


counters.forEach(counter=>{


let target=Number(counter.dataset.number);

let current=0;


let timer=setInterval(()=>{


current+=Math.ceil(target/100);


counter.innerHTML=current+"+";


if(current>=target){

counter.innerHTML=target+"+";

clearInterval(timer);

}


},20);


});





function copyDiscord(){

navigator.clipboard.writeText("benni_12_");

alert("Discord copied!");

}
