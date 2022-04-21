
// function sum(pera1 =10 , pera2 = 10){
//     if(typeof pera1 == 'number' && typeof pera2 == 'number'){
//         console.log(true);
//         console.log(pera1 + pera2);
//     }
//     else{
//         console.log(false);
//     }
// }

// sum(1,4);

// counter  up js pluggin task start

// let count = document.querySelector('.counterup');

// let count_data =parseInt(count.dataset.number);
// let speed = parseInt(count.dataset.speed);


// let counterNumber = 0;
// console.log(counterNumber);

// function counterUp() {
//     counterNumber++;
//     count.innerHTML = counterNumber;    

//     if(counterNumber ===count_data) {
//         clearInterval(stop);
//     }
// }

// let stop = setInterval(function(){
//     counterUp();    
// },speed);


// Type js script  start point

let type = document.querySelector('.type');
let typeWriter = -1;
let getFullName = type.dataset.nam;
// console.log(getFullName);
let total_length = getFullName.length;
// console.log(total_length);

function typingEngine(){
    typeWriter++;

    type.innerHTML += getFullName.charAt(typeWriter);
    
    if(typeWriter === total_length) {
        clearInterval(stoptype);
    }

}

let stoptype = setInterval(function(){
    typingEngine();
},100)

    

