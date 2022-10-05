const btn = document.querySelector('.btn');
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const timeDiv = document.querySelector('.time');
const dayDiv = document.querySelector('.day')
btn.addEventListener('click',()=>{
    document.body.classList.toggle('light')
    document.body.classList.toggle('dark')
    btn.innerText = document.body.classList.contains('light')? 'Dark Mode': 'Light Mode'

})

setInterval(()=>{

    const dateObject = new Date();
    const day = String(dateObject).split(" ");
    const time = String(dateObject).split(' ')[4].split(':');
    clock(time ,day)
},1000)

function clock([hours, minutes, seconds],day) {
    timeDiv.innerText =
      hours > 12
        ? `${+hours - 12}:${minutes} PM`
        : hours !== 12
        ? `${+hours}:${minutes} AM`
        : `${+hours}:${minutes} PM`;
    hours = hours>12? (hours-12): hours ;
    dayDiv.innerHTML = `${day[0]} , ${day[1]} <span class="date">${day[2]}</span>`;
  hour.style.transform = `rotate(${-90 + hours * 30}deg)`;
  minute.style.transform = `rotate(${-90 + minutes * 6}deg)`;
  second.style.transform = `rotate(${-90 + seconds * 6}deg)`;
}


