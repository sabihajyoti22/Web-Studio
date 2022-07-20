const daysText = document.querySelector(".days")
const hoursText = document.querySelector(".hours")
const mintuesText = document.querySelector(".mintues")
const secondsText = document.querySelector(".seconds")

// All are seconds
var time = 1296000;
var seconds = 1;
var mintues = seconds*60;
var hours = mintues*60;
var days = hours*24

const countDown = ()=>{
    let newDays = Math.floor(time/(days));
    let newHours = Math.floor(time%(days)/(hours));
    let newMintues = Math.floor(time%(hours)/mintues);
    let newSeconds = time%60;
    
    daysText.innerHTML = newDays.toString()
    hoursText.innerHTML = newHours.toString()
    mintuesText.innerHTML = newMintues.toString()
    secondsText.innerHTML = newSeconds.toString()
    
    time--;
}
setInterval(countDown,1000)
