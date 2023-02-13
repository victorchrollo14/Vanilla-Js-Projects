const minuteHand = document.querySelector('.clock-minutes');
const hourHand = document.querySelector('.clock-hours');
const secondHand = document.querySelector('.clock-seconds');

// let minHandAngle = -90; hourHandAngle = -90; secondHandAngle = -90;
// let sec1 = 1000;
// let min1 = 60 * 1000;
// let hour1 = 60 * 60 * 1000;

// const hourTimer = setInterval(rotateHour, hour1);
// const minTimer = setInterval(rotateMin, min1);
// const secondTimer = setInterval(rotateSecond, sec1);


// function rotateHour(){
//     hourHandAngle += 6;
//     hourHand.style.transform = `rotate(${hourHandAngle}deg)`;

// }

// function rotateMin(){
//     minHandAngle += 6;
//     minuteHand.style.transform = `rotate(${minHandAngle}deg)`;
// }

// function rotateSecond(){
//     secondHandAngle += 6;
//     secondHand.style.transform = `rotate(${secondHandAngle}deg)`;
// }


const timer = setInterval(rotate, 1000);

function rotate(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let hourHandAngle = 30*hours + 1/2*minutes;
    let minHandAngle = 6*minutes;
    let secondHandAngle = 6*seconds;
    console.log(minHandAngle);

    hourHand.style.transform = `rotate(${hourHandAngle-90}deg)`;
    minuteHand.style.transform = `rotate(${minHandAngle-90}deg)`;
    secondHand.style.transform = `rotate(${secondHandAngle-90}deg)`;

}

