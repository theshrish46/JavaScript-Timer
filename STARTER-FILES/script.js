const startBtn = document.querySelector('.start')
let minutes = document.querySelector('.minutes input').value



function convertToSeconds(minutes) {
    return `${minutes}000`
}

minutes = parseInt(convertToSeconds(minutes))


function Timer() {

    startTimer = function () {
        setInterval(() => {
            
        }, minutes);
    }
}









// console.log(minutes)

startBtn.addEventListener('click', startTimer)