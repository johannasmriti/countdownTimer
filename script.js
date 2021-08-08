const daysEl = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secsEl= document.getElementById('secs');

const newYears = '1 Jan 2022';

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearDate-currentDate) / 1000;
    const days = Math.floor(seconds/3600/24);
    const secs = Math.floor(seconds%60);
    const hours = Math.floor(seconds/3600)%24;
    const minutes= (Math.floor(seconds/60)) %60;

    console.log(days,hours,minutes,secs);

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML= formatTime(hours);
    minsEl.innerHTML=formatTime(minutes);
    secsEl.innerHTML=formatTime(secs);
}

function formatTime(time){
    return time<10? `0${time}` : time;
}

countdown();

setInterval(countdown,1000);
