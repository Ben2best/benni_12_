
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

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }

    };

    updateCounter();

});
