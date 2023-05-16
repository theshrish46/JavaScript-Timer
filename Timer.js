export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML()

        this.el = {
            minute: root.querySelector('.timer--minute'),
            second: root.querySelector('.timer--second'),
            control: root.querySelector('.timer--start'),
            reset: root.querySelector('.timer--reset')
        }

        this.interval = 90
        this.remainingSeconds = 90

        // this.el.control.addEventListener('click', start)
        this.el.control.addEventListener('click', () => {
            this.start()
        })
    }

    updateInterface() {
        let minutes = Math.floor(this.remainingSeconds / 60)
        let seconds = Math.floor(this.remainingSeconds % 60)
        this.el.minute.textContent = minutes.toString().padStart(2, '0')
        this.el.second.textContent = seconds.toString().padEnd(2, '0')
    }

    start() {
        // - Start is a function used by the start button for handling the events.
        // - Change the theme of the color and also make sure whether ther are any active timer running.

        if (this.remainingSeconds === 0) return

        if (this.interval) {
            this.el.control.innerHTML = `<span class="material-symbols-outlined">pause</span>`
            this.el.control.classList.remove('.timer--start')
            this.el.control.classList.add('.timer--control--start')
        }

        this.updateInterface()

    }

    updateControl() {
        // TODO
        // - Get the intervals and update them to not null and run a setInterval function.

    }

    static getHTML() { // gets all the html in the form of template literal and converts and renders it on the html page.
        return `
        <div class="timer--part">
            <span class="timer--part timer--minute">00</span>
            <span class="timer--part">:</span>
            <span class="timer--part timer--second">00</span>
        </div>

        <div class="btns">
            <button type="button" class="timer--btn timer--start">
                <span class="material-symbols-outlined"> play_arrow </span>
            </button>
            
            <button type="button" class="timer--btn timer--reset">
                <span class="material-symbols-outlined">timer</span>
            </button>
      </div>
        `
    }
}