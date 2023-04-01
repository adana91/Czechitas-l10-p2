'use strict';

console.log('funguju!');


const setTimer = (event) => {
    event.preventDefault()

    let timeInput = Number(document.querySelector('.time-input').value) 

    const secondsElm = document.querySelector('.alarm__seconds')
    const alarmElm = document.querySelector('.alarm')

    alarmElm.classList.remove('alarm--ring')

    secondsElm.textContent = String(timeInput)

    
    const countDown = () => {
        if (timeInput > 0) {
            timeInput -= 1
            secondsElm.textContent = String(timeInput)

        } 
        if (timeInput <= 0) {
            clearInterval(casovac)
            alarmElm.classList.add('alarm--ring')
            const audio = document.querySelector('audio')
            audio.play()
        }
    }

    const casovac = setInterval(countDown, 1000)
}

const btnStart = document.querySelector('.submit')
btnStart.addEventListener('click', setTimer)




