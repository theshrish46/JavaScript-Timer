export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML()

        // All the DOM elements used in the project are stored in this object el
        this.el = {
            minute: root.querySelector('.timer--minute'),
            second: root.querySelector('.timer--second'),
            control: root.querySelector('.timer--start-before'),
            reset: root.querySelector('.timer--reset-after')
        }

        // A variable by the name of interval is declared to keep track of the timer whether it is running or not.
        // A remainingSecond variable is declared to store the remaing second of the timer.

        this.interval = null
        this.remainingSeconds = 90
    }

    // Function updateTime is used to update the tiem. It converts the minuts into seconds and also changes the HTML dynamically
    updateTime() {
        let minutes = Math.floor(this.remainingSeconds / 60)
        let seconds = Math.floor(this.remainingSeconds % 60)
        this.el.minute.textContent = minutes.toString().padStart(2, '0')
        this.el.second.textContent = seconds.toString().padEnd(2, '0')
    }

    // updateControl is a function used to change the start and stop button and also alter them dynamicaaly whenever they are clicked.
    updateControl() {
        // - Check whether the timer is running or not.
        // -- Display play button if the interval is === null which means to start the timer.
        // - Display pause button if the interval is !== null which means to stop or pause the timer.

        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">play_arrow</span>`
            this.el.control.classList.add("timer--start-before")
            this.el.control.classList.remove("timer--start-after")
        } else {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`
            this.el.control.classList.add("timer--start-after")
            this.el.control.classList.remove("timer--start-before")
        }



    }

    start() {
        // - Check whether remainingSecond is not 0
        // - If it is not 0 then begin a timer by using the interval
        // - Decrement the reamingsecond everytime in the interval

        if (this.remainingSeconds === 0) return

        this.interval = setInterval(() => {
            this.remainingSeconds--
            this.updateTime()

            if (this.remainingSeconds === 0) {
                stop()
            }
        }, 1000);
        this.updateControl()

    }

    stop() {
        clearInterval(this.interval)

        this.interval = null
        this.updateControl()
    }

    static getHTML() { // gets all the html in the form of template literal and converts and renders it on the html page.
        return `
        <div class="timer--part">
            <span class="timer--part timer--minute">00</span>
            <span class="timer--part">:</span>
            <span class="timer--part timer--second">00</span>
        </div>

        <div class="btns">
            <button type="button" class="timer--btn timer--start-before">
                <span class="material-symbols-outlined"> play_arrow </span>
            </button>
            
            <button type="button" class="timer--btn timer--reset-before">
                <span class="material-symbols-outlined">timer</span>
            </button>
      </div>
        `
    }
}