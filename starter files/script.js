export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML()

        const element = {
            minutes: root.querySelector(".minutes"),
            seconds: root.querySelector(".seconds"),
            start: root.querySelector(".start"),
            settings: root.querySelector(".settings")
        }

        element.start.addEventListener('click', (e) => {

            e.target.innerText === 'START' ?
            e.target.innerText = 'PAUSE' :
            e.target.innerText = 'START'
            // console.log(e.target)
        })

        element.settings.addEventListener('click', (e) => {
            
            console.log(e.target)
        })

        console.log(element)
    }
    static getHTML() {
        return `
        <div class="ring">
        <svg width="518" height="518" viewBox="0 0 518 518">
          <circle stroke-width="9px" x="0" y="y" cx="259" cy="259" r="254" />
        </svg>
      </div>
  
      <div class="timer">
        <div class="time">
          <div class="minutes">
            <input type="text" value="15" disabled />
          </div>
          <div class="colon">:</div>
          <div class="seconds">
            <input type="text" value="00" disabled />
          </div>
        </div>
        <button class="start">start</button>
        <button class="settings">
          <img src="images/gear.svg" alt="Settings" />
        </button>
      </div>
        `
    }
}